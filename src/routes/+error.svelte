<script lang="ts">
  import { page } from "$app/stores";

  $: notFound = $page.status === 404;
</script>

<svelte:head>
  <title>{notFound ? "Page not found" : "Something went wrong"} | Youssef Lasheen</title>
</svelte:head>

<section class="error">
  <p class="code">{$page.status}</p>
  <h1>{notFound ? "This page doesn't exist" : "Something went wrong"}</h1>
  <p class="lede">
    {#if notFound}
      The link may be old, or the page may have moved. Old blog posts now live
      under <a href="/blog/">lasheen.dev/blog</a>.
    {:else}
      Try reloading the page. If it keeps happening, email
      <a href="mailto:youssef@lasheen.dev">youssef@lasheen.dev</a>.
    {/if}
  </p>
  <div class="actions">
    <a href="/" class="btn primary">Go to the home page</a>
    <a href="/blog/" class="btn secondary">Read the blog</a>
  </div>
</section>

<style lang="scss">
  .error {
    max-width: 38rem;
    padding: 3rem 0 2rem;
  }

  .code {
    font-weight: 800;
    font-size: 1rem;
    letter-spacing: 0.08em;
    color: $highlight;
  }

  h1 {
    margin-top: 0.75rem;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
  }

  .lede {
    margin-top: 1rem;
    color: $text-muted;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
  }
</style>
