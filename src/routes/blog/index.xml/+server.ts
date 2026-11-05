// RSS feed at /blog/index.xml, the same path Hugo used for the old blog's feed.
import { allPosts } from "$lib/server/posts";

export const prerender = true;
export const trailingSlash = "never";

const SITE = "https://lasheen.dev";
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET = () => {
  const items = allPosts()
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${p.slug}/</link>
      <guid>${SITE}/blog/${p.slug}/</guid>
      <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>Youssef Lasheen's blog</title>
    <link>${SITE}/blog/</link>
    <description>Notes on Flutter, Linux and building software, by Youssef Lasheen.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
