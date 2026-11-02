<svelte:head>
  <title>About | Youssef Lasheen</title>
  <meta
    name="description"
    content="About Youssef Lasheen: Flutter and SwiftUI developer in Cairo, lead app developer at Simply Nikah, and the person behind lasheen.dev."
  />
</svelte:head>

<article>
  <h1>About</h1>

  <p>
    I'm Youssef Lasheen, a mobile developer based in Cairo, Egypt. I build apps
    with Flutter and SwiftUI and have shipped them to the App Store, the Play
    Store and Snapcraft.
  </p>

  <p>
    Since 2023 I've led app development at
    <a href="https://apps.apple.com/us/app/simply-nikah/id6471347083"
      >Simply Nikah</a
    >, a Muslim matrimonial app, where I work as both developer and product
    manager. Before that I was a Flutter developer and product manager at
    Intelligent Web, where I launched projects including the 2GO taxi apps for
    riders and drivers and Stbtr Academy.
  </p>

  <p>
    lasheen.dev is my independent studio. It's just me: when you hire
    lasheen.dev, you work directly with the person designing and writing your
    app. I take on a few freelance projects at a time alongside my full-time
    role.
  </p>

  <p>
    Outside of work I write open source. I've published Flutter packages like
    <a href="https://github.com/YoussefLasheen/flurry_navigation"
      >flurry_navigation</a
    >
    and contributed to
    <a href="https://github.com/ubuntu-flutter-community"
      >ubuntu-flutter-community</a
    >, building Flutter apps for the Linux desktop. I studied Computer
    Engineering at Shorouk Academy, and I speak Arabic and English.
  </p>

  <div class="links">
    <a href="https://resume.lasheen.dev" class="btn">View my resume</a>
    <a href="/contact" class="btn secondary">Get in touch</a>
  </div>

  <p class="colophon">
    This site is built with SvelteKit. The
    <a href="https://github.com/lasheendev/lasheen.dev">source is on GitHub</a>.
  </p>
</article>

<style lang="scss">
  article {
    max-width: 42rem;
  }

  h1 {
    color: $clr-fg-1;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.8;
    color: $clr-fg-3;
    & + p {
      margin-top: 1.25rem;
    }
  }

  a {
    color: $accent-0;
    &:hover {
      color: $clr-fg-1;
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2.5rem;
  }

  .btn {
    padding: 0.9rem 1.6rem;
    border-radius: 0.5rem;
    background: $accent-1;
    color: $clr-fg-1;
    font-size: 0.9rem;
    font-weight: 600;
    &.secondary {
      background: $clr-bg-350;
    }
    &:hover {
      color: $clr-fg-1;
      filter: brightness(1.2);
    }
  }

  .colophon {
    margin-top: 3rem;
    font-size: 0.85rem;
    color: $clr-fg-450;
  }
</style>
