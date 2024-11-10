<script>
  import "../styles/app.scss";
  import Nav from "$lib/Navbar.svelte";
</script>

<Nav />
<main>
  <slot />
</main>

<style lang="scss">
  main {
    padding: 1.4rem 2rem 2rem 1rem;
    margin-left: 4.8rem;
    margin-top: 4.2rem;
  }

  @media only screen and (max-width: $tablet) {
    main {
      width: 100%;
      margin: 0;
      margin-top: 4rem;
      padding: 4vh 5vw 12vh 5vw;
    }
  }
</style>
