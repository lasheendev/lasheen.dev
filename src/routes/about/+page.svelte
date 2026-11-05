<svelte:head>
  <title>About | Youssef Lasheen</title>
  <meta
    name="description"
    content="About Youssef Lasheen: Flutter and SwiftUI developer in Cairo, lead app developer at Simply Nikah, and founder of the lasheen.dev product studio."
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
    lasheen.dev is my product studio. Clients get a complete solution, from
    design and backend to launch and maintenance, with me as their one point of
    contact. I lead every project personally and bring in specialists when a
    project needs them, and I keep the number of projects small so each one
    gets real attention.
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
    <a href="/resume" class="btn primary">View my resume</a>
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
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    color: $text-muted;
    font-size: 1.05rem;
    line-height: 1.75;
    & + p {
      margin-top: 1.25rem;
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2.5rem;
  }

  .colophon {
    margin-top: 3rem;
    font-size: 0.85rem;
    color: $text-subtle;
  }
</style>
