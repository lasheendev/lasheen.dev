<script lang="ts">
  export let data;

  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
</script>

<svelte:head>
  <title>Blog | Youssef Lasheen</title>
  <meta
    name="description"
    content="Notes on Flutter, Linux and building software, by Youssef Lasheen."
  />
  <link rel="alternate" type="application/rss+xml" title="Youssef Lasheen's blog" href="/blog/index.xml" />
</svelte:head>

<section class="blog">
  <header>
    <h1>Blog</h1>
    <p>Notes on Flutter, Linux and building software.</p>
    <a href="/blog/index.xml" class="rss">RSS feed</a>
  </header>

  <ol class="posts">
    {#each data.posts as post (post.slug)}
      <li>
        <a href="/blog/{post.slug}/" class="post">
          <time datetime={post.date}>{formatDate(post.date)}</time>
          <div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <span class="meta">
              {post.readingMinutes} min read{post.author !== "Youssef Lasheen" ? ` · by ${post.author}` : ""}
            </span>
          </div>
        </a>
      </li>
    {/each}
  </ol>
</section>

<style lang="scss">
  .blog {
    max-width: 52rem;
  }

  header {
    margin-bottom: 2.5rem;

    h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
    }

    p {
      margin-top: 0.5rem;
      color: $text-muted;
      font-size: 1.05rem;
    }

    .rss {
      display: inline-block;
      margin-top: 0.75rem;
      font-weight: 600;
      font-size: 0.9rem;
    }
  }

  .posts {
    list-style: none;
    border-top: 1px solid $border;
  }

  .post {
    display: grid;
    grid-template-columns: 8rem minmax(0, 1fr);
    gap: 1.5rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid $border;
    color: $text;

    &:hover h2 {
      color: $highlight;
    }

    time {
      padding-top: 0.2rem;
      color: $text-subtle;
      font-size: 0.9rem;
      font-variant-numeric: tabular-nums;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 700;
      transition: color 0.15s ease;
    }

    p {
      margin-top: 0.35rem;
      color: $text-muted;
    }

    .meta {
      display: block;
      margin-top: 0.5rem;
      font-size: 0.85rem;
      color: $text-subtle;
    }
  }

  @media (max-width: $tablet) {
    .post {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }
  }
</style>
