<script>
  import Icon from "@iconify/svelte";

  const groups = [
    {
      title: "lasheen.dev",
      description: "Studio news, launches and client work.",
      links: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/lasheendev",
          icon: "mdi:linkedin",
          color: "#0077b5",
        },
        {
          name: "X",
          url: "https://x.com/lasheendev",
          icon: "fa6-brands:x-twitter",
          color: "#000000",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/lasheen.dev/",
          icon: "ant-design:instagram-filled",
          color: "#e1306c",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/lasheen.dev/",
          icon: "mdi:facebook",
          color: "#3b5998",
        },
        {
          name: "GitHub",
          url: "https://github.com/lasheendev",
          icon: "mdi:github",
          color: "#333333",
        },
      ],
    },
    {
      title: "Youssef",
      description: "My own profiles, code and open-source work.",
      links: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/yousseflasheen",
          icon: "mdi:linkedin",
          color: "#0077b5",
        },
        {
          name: "GitHub",
          url: "https://github.com/YoussefLasheen",
          icon: "mdi:github",
          color: "#333333",
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Contact | Youssef Lasheen</title>
  <meta
    name="description"
    content="Start a project with lasheen.dev, or get in touch with Youssef Lasheen."
  />
</svelte:head>

<div id="body">
  <header>
    <h2>Get in touch</h2>
    <p>
      Have an app idea, a project, or a role you think I'd be a good fit for?
      Email me at <a href="mailto:youssef@lasheen.dev">youssef@lasheen.dev</a>.
      I reply within 2 business days.
    </p>
  </header>

  {#each groups as group}
    <section class="group">
      <h3>{group.title}</h3>
      <p class="description">{group.description}</p>
      <div class="links">
        {#each group.links as { name, url, icon, color }}
          <a
            class="link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style="--color: {color};"
          >
            <Icon {icon} />
            <span>{name}</span>
          </a>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style lang="scss">
  header {
    max-width: 42rem;

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      color: $text-muted;
      font-size: 1.05rem;
      line-height: 1.75;
    }

    a {
      font-weight: 600;
    }
  }

  .group {
    margin-top: 3rem;

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .description {
      margin-top: 0.25rem;
      color: $text-muted;
      font-size: 0.95rem;
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .link {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.75rem 1.1rem;
    border: 1px solid $border;
    border-radius: 0.65rem;
    background: $surface;
    color: $text;
    font-weight: 500;
    font-size: 0.95rem;
    transition: border-color 0.15s ease;

    :global(svg) {
      font-size: 1.35rem;
      color: var(--color);
    }

    &:hover {
      border-color: $text-subtle;
      color: $text;
    }
  }
</style>
