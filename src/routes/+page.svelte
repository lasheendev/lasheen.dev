<script lang="ts">
  export let data;

  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });

  import Icon from "@iconify/svelte";
  import ProjectsGrid from "$lib/projects/ProjectsGrid.svelte";
  import { projects } from "$lib/projects/projects";
  import type { Project } from "../types/project";

  // Shown on the home page, in this order. The rest live on /projects.
  // Each card is labeled as client work, a full-time role or personal.
  const featuredIds = ["simplynikah", "wtc", "harmony"];

  const featured = featuredIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => project !== undefined);

  const services = [
    {
      icon: "ph:device-mobile",
      title: "Mobile apps",
      text: "iOS and Android apps with Flutter or SwiftUI.",
    },
    {
      icon: "ph:database",
      title: "Backend and APIs",
      text: "Firebase, AWS Amplify, REST and GraphQL.",
    },
    {
      icon: "ph:browser",
      title: "Web and desktop",
      text: "Websites, admin dashboards and Linux desktop apps.",
    },
    {
      icon: "ph:pen-nib",
      title: "UI/UX design",
      text: "From wireframes to a polished interface.",
    },
    {
      icon: "ph:rocket-launch",
      title: "Launch and beyond",
      text: "App Store and Play Store publishing, then updates and maintenance.",
    },
  ];

  const steps = [
    {
      title: "Tell me about your idea",
      text: "The first call is free. We talk through what you need and who it's for.",
    },
    {
      title: "Get a scope and quote",
      text: "I reply with a clear plan and a price within 2 business days.",
    },
    {
      title: "Design, build and launch",
      text: "We ship it together, and I stay on for updates after launch.",
    },
  ];

</script>

<svelte:head>
  <title>Youssef Lasheen | Mobile App Developer</title>
  <meta name="title" content="Youssef Lasheen | Mobile App Developer" />
  <meta
    name="description"
    content="I'm Youssef Lasheen, a Flutter and SwiftUI developer in Cairo. I've shipped 10+ apps and packages, and through lasheen.dev, my product studio, I build complete apps for clients."
  />
</svelte:head>

<section class="hero">
  <p class="eyebrow">Product studio · Cairo, Egypt</p>
  <h1>Hi, I'm Youssef.<br /><span>I build mobile apps.</span></h1>
  <p class="lede">
    I'm a Flutter and SwiftUI developer. By day I lead app development at
    Simply Nikah. Through lasheen.dev, my product studio, I build complete apps
    for clients, from first idea to launch and beyond.
  </p>
  <div class="actions">
    <a href="/contact" class="btn primary">Start a project</a>
    <a href="/projects" class="btn secondary">See my work</a>
    <a href="https://resume.lasheen.dev" class="text-link">Resume →</a>
  </div>

  <dl class="facts">
    <div>
      <dt>10+</dt>
      <dd>apps and packages shipped</dd>
    </div>
    <div>
      <dt>4 platforms</dt>
      <dd>App Store, Google Play, Snapcraft and pub.dev</dd>
    </div>
    <div>
      <dt>Open source</dt>
      <dd>contributor to ubuntu-flutter-community</dd>
    </div>
  </dl>
</section>

<section class="section">
  <header class="section-head">
    <h2>Selected work</h2>
    <a href="/projects" class="text-link">All projects →</a>
  </header>
  <ProjectsGrid projects={featured} />
</section>

<section class="section" id="services">
  <header class="section-head stacked">
    <h2>Work with lasheen.dev</h2>
    <p>
      lasheen.dev is a product studio led by me. You get a complete product and
      one point of contact: I lead every project personally, and bring in
      specialists when a project needs them.
    </p>
  </header>

  <ul class="services">
    {#each services as service}
      <li>
        <span class="service-icon"><Icon icon={service.icon} /></span>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
      </li>
    {/each}
  </ul>
</section>

<section class="section">
  <header class="section-head">
    <h2>How it works</h2>
  </header>
  <ol class="steps">
    {#each steps as step, i}
      <li>
        <span class="step-number">{i + 1}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </li>
    {/each}
  </ol>
</section>

<section class="section" id="blog">
  <header class="section-head">
    <h2>From the blog</h2>
    <a href="/blog/" class="text-link">All posts →</a>
  </header>
  <ul class="blog-posts">
    {#each data.blogPosts as post (post.slug)}
      <li>
        <a href="/blog/{post.slug}/">
          <span class="blog-meta"><time datetime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read</span>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </a>
      </li>
    {/each}
  </ul>
</section>

<section class="cta">
  <div>
    <h2>Have an app idea?</h2>
    <p>
      Tell me about it. The first call is free, and non-profits get discounted
      rates.
    </p>
  </div>
  <a href="/contact" class="btn light">Get in touch</a>
</section>

<style lang="scss">
  .hero {
    padding: 2rem 0 1rem;
  }

  .eyebrow {
    color: $highlight;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: clamp(2.6rem, 7vw, 5rem);
    font-weight: 800;
    line-height: 1.02;
    letter-spacing: -0.035em;

    span {
      color: $highlight;
    }
  }

  .lede {
    max-width: 38rem;
    margin-top: 1.5rem;
    font-size: clamp(1.05rem, 1.6vw, 1.2rem);
    color: $text-muted;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1rem;
    margin-top: 2rem;
  }

  .text-link {
    font-weight: 600;
  }

  .facts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid $border;

    dt {
      font-family: $heading-font;
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    dd {
      color: $text-muted;
      font-size: 0.95rem;
    }
  }

  .section {
    margin-top: 6rem;
  }

  .section-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;

    h2 {
      font-size: clamp(1.8rem, 3.5vw, 2.5rem);
      font-weight: 700;
    }

    &.stacked {
      flex-direction: column;
      align-items: flex-start;

      p {
        max-width: 40rem;
        color: $text-muted;
        font-size: 1.05rem;
      }
    }
  }

  .services {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 13rem), 1fr));
    gap: 1rem;

    li {
      padding: 1.5rem;
      background: $surface;
      border: 1px solid $border;
      border-radius: $radius;
    }

    h3 {
      margin-top: 1rem;
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      margin-top: 0.35rem;
      color: $text-muted;
      font-size: 0.95rem;
    }
  }

  .service-icon {
    display: inline-flex;
    padding: 0.6rem;
    border-radius: 0.65rem;
    background: $accent-soft;
    color: $highlight;
    font-size: 1.4rem;
  }

  .steps {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    h3 {
      margin-top: 1rem;
      font-size: 1.15rem;
      font-weight: 600;
    }

    p {
      margin-top: 0.35rem;
      color: $text-muted;
    }
  }

  .step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 999px;
    border: 1px solid $border;
    background: $surface;
    font-weight: 700;
    color: $highlight;
  }

  .blog-posts {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
    gap: 1rem;

    a {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 1.4rem;
      background: $surface;
      border: 1px solid $border;
      border-radius: $radius;
      color: $text;
      transition: border-color 0.15s ease;

      &:hover {
        border-color: $text-subtle;

        h3 {
          color: $highlight;
        }
      }
    }

    .blog-meta {
      font-size: 0.85rem;
      color: $text-subtle;
    }

    h3 {
      margin-top: 0.5rem;
      font-size: 1.1rem;
      font-weight: 700;
      transition: color 0.15s ease;
    }

    p {
      margin-top: 0.4rem;
      color: $text-muted;
      font-size: 0.95rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .cta {
    margin-top: 6rem;
    padding: clamp(2rem, 5vw, 3.5rem);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    border-radius: 1.5rem;
    background: $accent;
    color: $on-accent;

    h2 {
      color: $on-accent;
      font-size: clamp(1.8rem, 3.5vw, 2.5rem);
      font-weight: 700;
    }

    p {
      margin-top: 0.5rem;
      max-width: 32rem;
      opacity: 0.9;
    }

    .btn.light {
      background: $surface;
      color: $accent;
      &:hover {
        background: $accent-soft;
        color: $accent-hover;
      }
    }
  }

  @media (max-width: $tablet) {
    .hero {
      padding-top: 1rem;
    }

    .facts,
    .steps {
      grid-template-columns: 1fr;
    }

    .facts {
      margin-top: 3rem;
      gap: 1.25rem;
    }

    .section,
    .cta {
      margin-top: 4rem;
    }
  }
</style>
