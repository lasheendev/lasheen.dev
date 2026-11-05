// Blog posts: Markdown files in src/posts/, rendered to HTML at build time.
// Images that sit next to a post live in static/blog/<slug>/.
import { Marked, type Tokens } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import { parse as parseYaml } from "yaml";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  html: string;
}

const DEFAULT_AUTHOR = "Youssef Lasheen";

const files = import.meta.glob("/src/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function splitFrontMatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: raw };
  return { data: parseYaml(match[1]) ?? {}, body: raw.slice(match[0].length) };
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function rendererFor(slug: string) {
  const isRelative = (href: string) => !/^([a-z]+:|\/|#)/i.test(href);
  return {
    image({ href, title, text }: Tokens.Image) {
      const src = isRelative(href) ? `/blog/${slug}/${href}` : href;
      const t = title ? ` title="${title}"` : "";
      return `<img src="${src}" alt="${text}"${t} loading="lazy" decoding="async">`;
    },
    heading(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, { tokens, depth }: Tokens.Heading) {
      const inner = this.parser.parseInline(tokens);
      const id = slugify(inner);
      return `<h${depth} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${inner}</h${depth}>\n`;
    },
    link(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, { href, title, tokens }: Tokens.Link) {
      const inner = this.parser.parseInline(tokens);
      const external = /^https?:\/\//.test(href) && !href.startsWith("https://lasheen.dev");
      const t = title ? ` title="${title}"` : "";
      const rel = external ? ` target="_blank" rel="noopener noreferrer"` : "";
      return `<a href="${href}"${t}${rel}>${inner}</a>`;
    },
  };
}

function excerpt(body: string, length = 180): string {
  const text = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^#{1,6}\s.*$/gm, " ") // headings
    .replace(/\\/g, "") // Markdown escapes such as "1\."
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]*>/g, " ")
    .replace(/[#>*_`|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length).replace(/\s+\S*$/, "")}…` : text;
}

function load(): Post[] {
  return Object.values(files)
    .map((raw) => {
      const { data, body } = splitFrontMatter(raw);
      if (data.draft === true) return null;
      const slug = String(data.slug);
      const marked = new Marked(
        markedHighlight({
          langPrefix: "hljs language-",
          highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
          },
        }),
        { gfm: true, renderer: rendererFor(slug) },
      );
      const words = body.split(/\s+/).filter(Boolean).length;
      const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
      return {
        slug,
        title: String(data.title ?? slug).trim(),
        date,
        description: String(data.description ?? "").trim() || excerpt(body),
        author: String(data.author ?? DEFAULT_AUTHOR),
        readingMinutes: Math.max(1, Math.round(words / 220)),
        html: marked.parse(body) as string,
      } satisfies Post;
    })
    .filter((p): p is Post => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

const posts = load();

export const allPosts = (): PostMeta[] => posts.map(({ html: _html, ...meta }) => meta);
export const getPost = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);
