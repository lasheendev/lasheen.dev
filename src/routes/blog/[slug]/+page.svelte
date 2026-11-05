<script lang="ts">
  import "highlight.js/styles/github.css";

  export let data;
  $: post = data.post;

  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
</script>

<svelte:head>
  <title>{post.title} | Youssef Lasheen</title>
  <meta name="description" content={post.description} />
  <link rel="canonical" href="https://lasheen.dev/blog/{post.slug}/" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.description} />
  <meta property="og:url" content="https://lasheen.dev/blog/{post.slug}/" />
  <link rel="alternate" type="application/rss+xml" title="Youssef Lasheen's blog" href="/blog/index.xml" />
</svelte:head>

<article class="post">
  <a href="/blog/" class="back">← All posts</a>

  <header>
    <h1>{post.title}</h1>
    <p class="meta">
      <time datetime={post.date}>{formatDate(post.date)}</time>
      · {post.readingMinutes} min read
      {#if post.author !== "Youssef Lasheen"}· Guest post by {post.author}{/if}
    </p>
  </header>

  <div class="content">
    {@html post.html}
  </div>

  <nav class="pager" aria-label="More posts">
    {#if data.newer}
      <a href="/blog/{data.newer.slug}/" class="newer"><span>Newer</span>{data.newer.title}</a>
    {/if}
    {#if data.older}
      <a href="/blog/{data.older.slug}/" class="older"><span>Older</span>{data.older.title}</a>
    {/if}
  </nav>
</article>

<style lang="scss">
  .post {
    max-width: 46rem;
    margin: 0 auto;
  }

  .back {
    font-weight: 600;
    font-size: 0.9rem;
  }

  header {
    margin: 1.5rem 0 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid $border;

    h1 {
      font-size: clamp(2rem, 4.5vw, 2.9rem);
      font-weight: 800;
      line-height: 1.1;
      text-wrap: balance;
    }

    .meta {
      margin-top: 0.75rem;
      color: $text-subtle;
      font-size: 0.95rem;
    }
  }

  // Rendered Markdown
  .content {
    font-size: 1.075rem;
    line-height: 1.75;
    color: $text;
    overflow-wrap: break-word;

    :global(> * + *) {
      margin-top: 1.15em;
    }

    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4) {
      position: relative;
      margin-top: 2em;
      font-weight: 800;
      line-height: 1.25;
      scroll-margin-top: 5rem;
    }

    // A heading the post itself starts with sits one level below the page title.
    :global(h1),
    :global(h2) {
      font-size: 1.6rem;
    }

    :global(> h1:first-child) {
      margin-top: 0;
    }

    :global(h3) {
      font-size: 1.3rem;
    }

    :global(h4) {
      font-size: 1.1rem;
    }

    :global(.anchor) {
      position: absolute;
      left: -1.1em;
      color: $text-subtle;
      opacity: 0;
      text-decoration: none;
    }

    :global(h1:hover .anchor),
    :global(h2:hover .anchor),
    :global(h3:hover .anchor),
    :global(h4:hover .anchor) {
      opacity: 1;
    }

    :global(a) {
      color: $highlight;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
    }

    :global(ul),
    :global(ol) {
      padding-left: 1.4rem;
    }

    :global(li + li) {
      margin-top: 0.35em;
    }

    :global(li::marker) {
      color: $highlight;
    }

    :global(img) {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 0.75rem;
      border: 1px solid $border;
    }

    // Badges and inline images inside paragraphs stay inline.
    :global(p img[src*="shields.io"]),
    :global(p img[src*="komarev"]),
    :global(p img[src*="gpvc"]) {
      display: inline-block;
      border: 0;
      border-radius: 0;
    }

    :global(blockquote) {
      padding: 0.75rem 1.25rem;
      border-left: 3px solid $sky;
      background: $accent-soft;
      border-radius: 0 0.5rem 0.5rem 0;
      color: $text-muted;
    }

    :global(code) {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 0.88em;
      background: $surface-muted;
      padding: 0.12em 0.38em;
      border-radius: 0.35rem;
    }

    :global(pre) {
      overflow-x: auto;
      padding: 1rem 1.15rem;
      background: $surface;
      border: 1px solid $border;
      border-radius: 0.75rem;
      line-height: 1.55;
    }

    :global(pre code) {
      background: none;
      padding: 0;
      font-size: 0.88rem;
    }

    :global(table) {
      display: block;
      overflow-x: auto;
      border-collapse: collapse;
      font-size: 0.95rem;
    }

    :global(th),
    :global(td) {
      padding: 0.5rem 0.75rem;
      border: 1px solid $border;
      text-align: left;
      vertical-align: top;
    }

    :global(th) {
      background: $surface-muted;
      font-weight: 700;
    }

    :global(hr) {
      border: 0;
      border-top: 1px solid $border;
      margin: 2.5em 0;
    }
  }

  .pager {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 3.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid $border;

    a {
      display: block;
      padding: 1rem 1.15rem;
      border: 1px solid $border;
      border-radius: 0.75rem;
      background: $surface;
      color: $text;
      font-weight: 700;

      &:hover {
        border-color: $text-subtle;
      }

      span {
        display: block;
        margin-bottom: 0.2rem;
        font-size: 0.8rem;
        font-weight: 600;
        color: $text-subtle;
      }
    }

    .older {
      grid-column: 2;
      text-align: right;
    }
  }

  @media (max-width: $tablet) {
    .pager {
      grid-template-columns: 1fr;

      .older {
        grid-column: auto;
        text-align: left;
      }
    }

    .content :global(.anchor) {
      display: none;
    }
  }
</style>
