<script>
  import "@fontsource-variable/inter";
  import "@fontsource-variable/bricolage-grotesque";
  import "../styles/app.scss";
  import { page } from "$app/stores";
  import Nav from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";

  // Pages under /projects/<app> are plain privacy policies.
  $: isLegalPage = /^\/projects\/.+/.test($page.url.pathname);
</script>

<Nav />
<main class:prose={isLegalPage}>
  <slot />
</main>
<Footer />

<style lang="scss">
  main {
    max-width: $content-width;
    margin: 0 auto;
    padding: 3.5rem 1.5rem 0;

    &.prose {
      max-width: calc(44rem + 3rem);
    }
  }

  @media (max-width: $tablet) {
    main {
      padding: 2rem 1rem 0;
    }
  }
</style>
