<script>
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";

  const links = [
    { href: "/projects", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  let open = false;

  // Close the mobile menu whenever the route changes.
  $: $page.url.pathname, (open = false);
</script>

<header class="site-header">
  <nav class="bar" aria-label="Main">
    <a href="/" class="logo">lasheen<span>.dev</span></a>

    <button
      class="menu-toggle"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="nav-links"
      on:click={() => (open = !open)}
    >
      <Icon icon={open ? "ic:round-close" : "ic:round-menu"} />
    </button>

    <div id="nav-links" class="links" class:open>
      {#each links as { href, label }}
        <a {href} class="link" class:active={$page.url.pathname.startsWith(href)}>{label}</a>
      {/each}
      <a href="/contact" class="btn primary cta">Start a project</a>
    </div>
  </nav>
</header>

<style lang="scss">
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(250, 249, 247, 0.85);
    backdrop-filter: saturate(180%) blur(12px);
    -webkit-backdrop-filter: saturate(180%) blur(12px);
    border-bottom: 1px solid $border;
  }

  .bar {
    max-width: $content-width;
    margin: 0 auto;
    padding: 0.85rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .logo {
    font-family: $heading-font;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    color: $text;

    span {
      color: $accent;
    }

    &:hover {
      color: $text;
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .link {
    padding: 0.5rem 0.85rem;
    border-radius: 0.5rem;
    color: $text-muted;
    font-weight: 500;
    font-size: 0.95rem;

    &:hover {
      color: $text;
      background: $surface-muted;
    }

    &.active {
      color: $text;
    }
  }

  .cta {
    margin-left: 0.75rem;
    padding: 0.6rem 1.1rem;
  }

  .menu-toggle {
    display: none;
    background: none;
    color: $text;
    font-size: 1.6rem;
    line-height: 0;
    padding: 0.35rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  @media (max-width: $tablet) {
    .bar {
      padding: 0.75rem 1rem;
      flex-wrap: wrap;
    }

    .menu-toggle {
      display: block;
    }

    .links {
      display: none;
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      gap: 0.25rem;
      padding: 0.5rem 0 0.75rem;

      &.open {
        display: flex;
      }
    }

    .link {
      padding: 0.75rem 0.5rem;
      font-size: 1.05rem;
    }

    .cta {
      margin: 0.5rem 0 0;
      padding: 0.85rem 1rem;
    }
  }
</style>
