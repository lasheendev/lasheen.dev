<script lang="ts">
  import { onMount } from "svelte";
  import phone from "../assets/images/illustration-phones.svg";
  import ProjectsGrid from "$lib/projects/ProjectsGrid.svelte";
  import { fetchProjects } from "$lib/projects/fetchProjects";
  import type { Project } from "../types/project";

  // Shown on the home page, in this order. The rest live on /projects.
  const featuredIds = ["simplynikah", "2go", "surelight-express"];

  let featured: Project[] = [];

  onMount(async () => {
    try {
      const projects = await fetchProjects();
      featured = featuredIds
        .map((id) => projects.find((project) => project.id === id))
        .filter((project): project is Project => project !== undefined);
    } catch (error: unknown) {
      console.error(
        "Error fetching projects:",
        error instanceof Error ? error.message : error,
      );
    }
  });
</script>

<svelte:head>
  <title>Youssef Lasheen | Mobile App Developer</title>
  <meta name="title" content="Youssef Lasheen | Mobile App Developer" />
  <meta
    name="description"
    content="I'm Youssef Lasheen, a Flutter and SwiftUI developer in Cairo. I've shipped 10+ apps and packages, and through lasheen.dev I take on select freelance projects."
  />
</svelte:head>

<section id="intro">
  <p class="eyebrow">Youssef Lasheen · lasheen.dev</p>
  <h1>Hi, I'm Youssef.<br />I build mobile apps.</h1>
  <p class="lede">
    I'm a Flutter and SwiftUI developer based in Cairo. By day I lead app
    development at Simply Nikah. Through lasheen.dev, my independent studio, I
    take on a few freelance projects alongside it.
  </p>
  <div class="row">
    <a href="/projects" class="btn primary">See my work</a>
    <a href="#work-with-me" class="btn secondary">Work with me</a>
    <a href="https://resume.lasheen.dev" class="text-link">Resume →</a>
  </div>

  <ul class="facts">
    <li><strong>10+</strong> apps and packages shipped</li>
    <li><strong>App Store · Play Store · Snapcraft</strong> and pub.dev</li>
    <li><strong>Open source</strong> contributor to ubuntu-flutter-community</li>
  </ul>
</section>

<section id="featured">
  <header>
    <h2>Selected work</h2>
    <a href="/projects" class="text-link">All projects →</a>
  </header>
  {#if featured.length > 0}
    <ProjectsGrid projects={featured} />
  {:else}
    <p class="muted">
      Loading projects… If nothing shows up, <a href="/projects">see them all</a
      >.
    </p>
  {/if}
</section>

<section id="work-with-me">
  <div class="panel">
    <article>
      <h2>Work with me</h2>
      <p>
        I take on a small number of freelance projects alongside my full-time
        role. Keeping the list short means each one gets my full attention, and
        you work directly with the person writing the code.
      </p>

      <h3>What I build</h3>
      <ul>
        <li>
          <strong>Mobile apps</strong>: iOS and Android with Flutter or
          SwiftUI, from first idea to App Store and Play Store launch.
        </li>
        <li>
          <strong>Desktop and web</strong>: Linux desktop apps, Flutter web
          and websites.
        </li>
      </ul>

      <h3>How it works</h3>
      <ol>
        <li>Tell me about your idea. The first call is free.</li>
        <li>I reply with a scope and a quote within 2 business days.</li>
        <li>We build, test and launch it together.</li>
      </ol>

      <p class="note">Discounted rates for non-profits.</p>

      <a href="/contact" class="btn light">Get in touch</a>
    </article>
    <img id="phone" src={phone} alt="" aria-hidden="true" />
  </div>
</section>

<style lang="scss">
  section + section {
    margin-top: 6rem;
  }

  .eyebrow {
    color: $accent-0;
    font-weight: 500;
    letter-spacing: 0.04em;
    margin-bottom: 1rem;
  }

  h1 {
    color: $clr-fg-1;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 500;
    line-height: 1.1;
  }

  h2 {
    color: $clr-fg-2;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 600;
  }

  .lede {
    max-width: 40rem;
    margin-top: 1.5rem;
    font-size: 1.15rem;
    line-height: 1.8;
    color: $clr-fg-4;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1rem;
    margin-top: 2rem;
  }

  .btn {
    display: inline-block;
    padding: 0.9rem 1.6rem;
    border-radius: 0.5rem;
    color: $clr-fg-1;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    @include hover {
      filter: brightness(1.2);
      transition: all 0.1s ease-in-out;
    }
    &.primary {
      background: $accent-1;
    }
    &.secondary {
      background: $clr-bg-350;
    }
    &.light {
      margin-top: 1.5rem;
      background: $clr-fg-1;
      color: $accent-3;
    }
  }

  .text-link {
    color: $accent-0;
    font-weight: 500;
    &:hover {
      color: $clr-fg-1;
    }
  }

  .facts {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2.5rem;
    margin-top: 3rem;
    color: $clr-fg-4;
    font-size: 0.95rem;

    strong {
      color: $clr-fg-2;
      font-weight: 600;
    }
  }

  #featured header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .muted {
    color: $clr-fg-4;
  }

  #work-with-me .panel {
    position: relative;
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    gap: 2rem;
    padding: 3rem;
    border-radius: 0.5rem 4rem 0.5rem 4rem;
    background: $accent;
    color: $clr-fg-1;
    overflow: hidden;

    h2 {
      color: $clr-fg-1;
    }

    h3 {
      margin-top: 1.75rem;
      margin-bottom: 0.5rem;
      font-size: 1.05rem;
      font-weight: 600;
    }

    p,
    li {
      line-height: 1.8;
    }

    p {
      margin-top: 1rem;
      max-width: 38rem;
    }

    ul,
    ol {
      padding-left: 1.25rem;
    }

    .note {
      font-style: italic;
      opacity: 0.85;
    }

    #phone {
      width: 100%;
      max-width: 22rem;
      justify-self: center;
    }
  }

  @media screen and (max-width: $tablet) {
    section + section {
      margin-top: 4rem;
    }

    #work-with-me .panel {
      grid-template-columns: 1fr;
      padding: 2rem 1.5rem;
      border-radius: 0.5rem 2rem 0.5rem 2rem;

      #phone {
        display: none;
      }
    }
  }
</style>
