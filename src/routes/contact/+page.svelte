<script>
  import Icon from "@iconify/svelte";

  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/lasheen.dev/",
      icon: "mdi:facebook",
      color: "#3b5998",
    },
    {
      name: "Twitter",
      url: "https://x.com/lasheendev",
      icon: "fa6-brands:square-x-twitter",
      color: "#ffffff",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/lasheen.dev/",
      icon: "ant-design:instagram-filled",
      color: "#e1306c",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/lasheendev",
      icon: "mdi:linkedin",
      color: "#0077b5",
    },
  ];
</script>

<svelte:head>
  <title>Contact | Youssef Lasheen</title>
  <meta
    name="description"
    content="Get in touch with Youssef Lasheen about a freelance project, a role, or anything else."
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
    <p class="personal">
      You can also find me on
      <a href="https://linkedin.com/in/yousseflasheen">LinkedIn</a> and
      <a href="https://github.com/YoussefLasheen">GitHub</a>. lasheen.dev is on
      the networks below.
    </p>
  </header>

  <div class="button-container">
    {#each socialMediaLinks as { name, url, icon, color }}
      <a
        class="button"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style="background-color: {color}; --color: {color};"
      >
        <div id="customicon">
          <Icon {icon} />
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  header {
    max-width: 42rem;

    h2 {
      color: $clr-fg-1;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.8;
      & + p {
        margin-top: 0.75rem;
      }
    }

    a {
      color: $accent-0;
      &:hover {
        color: $clr-fg-1;
      }
    }
  }

  .button-container {
    padding-top: 50px;
    display: grid;
    gap: 20px;
    grid-template-columns: 200px 200px 200px 200px;
    justify-content: center;
  }

  @media (max-width: $desktop) {
    .button-container {
      grid-template-columns: 200px 200px;
    }
  }

  @media (max-width: $tablet) {
    .button-container {
      grid-template-columns: 200px 200px;
    }
  }
  @media (max-width: $mobile) {
    .button-container {
      grid-template-columns: 200px;
    }
  }

  .button {
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    border-radius: 10px;
    text-decoration: none;
    transition: box-shadow 0.3s ease-in-out;
  }

  .button:hover {
    box-shadow: 0 0 20px var(--color);
  }

  #customicon {
    display: flex;
    color: $bg;
  }
</style>
