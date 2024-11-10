<script>
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  let open = false;
</script>

<nav class="sidebar" class:open>
  <button title="Menu" class="link" id="hamb" on:click={() => (open = !open)}>
    {#if !open}
      <Icon icon="ic:round-menu" />
    {:else}
      <Icon icon="ic:round-close" />
    {/if}
  </button>
  <ul class="nav-list">
    <li id="home" class:active={$page.url.pathname === "/"}>
      <a href="/">
        <Icon
          icon={$page.url.pathname === "/" ? "bxs:home-smile" : "bx:home-smile"}
        />
        <span>Home</span>
      </a>
    </li>
    <li id="projects" class:active={$page.url.pathname.startsWith("/projects")}>
      <a href="/projects">
        <Icon
          icon={$page.url.pathname.startsWith("/projects")
            ? "bxs:compass"
            : "bx:compass"}
        />
        <span>Projects</span>
      </a>
    </li>
    <li id="contact" class:active={$page.url.pathname === "/contact"}>
      <a href="/contact">
        <Icon
          icon={$page.url.pathname === "/contact"
            ? "bxs:navigation"
            : "bx:navigation"}
        />
        <span>Contact</span>
      </a>
    </li>
    <li id="about" class="link" class:active={$page.url.pathname === "/about"}>
      <a href="/about">
        <Icon
          icon={$page.url.pathname === "/about"
            ? "material-symbols:info-rounded"
            : "material-symbols:info-outline-rounded"}
        />
        <span>About</span>
      </a>
    </li>
  </ul>
</nav>

<style lang="scss">
  .sidebar {
    position: fixed;
    width: 4.5rem;
    height: 100vh;
    list-style: none;

    top: 0;
    padding: 0.4rem 0.9rem;
    z-index: 102;
    will-change: transform;

    background: $clr-bg-3;
    transition: width 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .sidebar #hamb {
    position: fixed;
    background: none;
    margin: 0;
    padding: 0;
    font-size: 1.7rem;
    left: 1.35rem;
    line-height: 4.1rem;

    color: $clr-fg-350;
    cursor: pointer;
  }

  .sidebar ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-block-start: 5rem;
  }

  ul li {
    height: 2.5rem;
    width: 2.5rem;
    margin-bottom: 1.2rem;
    list-style: none;
    line-height: 2.5rem;
    position: relative;

    border-radius: 1rem;

    transition:
      0.2s cubic-bezier(0.86, 0, 0.07, 1),
      filter 0.3s;
    transition-delay: 0.1s;
    cursor: pointer;

    :global(svg) {
      // vertically center
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.3125rem;
    }

    a {
      all: unset;
      display: block;
      padding: 0rem 0.6rem 0 0.6rem;
      color: $clr-fg-350;
      white-space: nowrap;
      text-decoration: none;
      transition: 0.2s;

      &:active {
        transform: scale(0.98);
      }
    }

    &:nth-last-child(2) {
      margin-top: auto;
    }

    @include hover {
      filter: brightness(1.2);
      transition: all 0.1s ease-in-out;
    }

    &:active {
      filter: brightness(0.9);
    }
    span {
      font-size: smaller;
      font-weight: 500;
      margin-left: 2.8rem;
      transform: scale(0) translateX(-100%);
      transform-origin: left;
      opacity: 0;
      pointer-events: none;
      transition: all 0.1s ease-in-out;
      transition-delay: 0.2s;
    }
  }

  ul li.active {
    a {
      color: $clr-fg-2;
    }

    &#home {
      background: #6400ff;
    }
    &#projects {
      background: #6400ff;
    }

    &#contact {
      background: #6400ff;
    }

    &#about {
      background: #6400ff;
    }
  }

  .sidebar.open {
    width: 15rem;

    #hamb :global(svg) {
      color: $accent-0;
    }

    span {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
    //background of expanded buttons
    ul li {
      width: calc(95%);
      background: #d5c6eb2a;
    }

    ul li.active {
      background: $accent-1;
    }

    ul li {
      border-radius: 12px;
    }
  }

  @media only screen and (max-width: $tablet) {
    .sidebar #hamb,
    .sidebar #about {
      display: none;
    }

    .sidebar #contact {
      margin-top: 0;
    }

    .sidebar li {
      margin-top: 0;
    }

    .sidebar {
      top: auto;
      bottom: 0;
      width: 100vw;
      height: 4rem;
      position: fixed;
      background: $clr-bg-4;
      border-top: 1px solid $clr-fg-5;
      filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.37));
      padding: 0 8vw;
      overflow: hidden;
    }

    .sidebar .nav-list {
      flex-direction: row;

      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;

      position: relative;

      bottom: 2.5rem;
    }

    ul li {
      display: inline;
      padding: 0 !important;
      border-radius: 0 !important;

      :global(svg) {
        font-size: 1.5rem;
      }

      background: none !important;

      position: relative;
    }
  }
</style>
