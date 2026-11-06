<script lang="ts">
  const shot = (name: string) => `/images/projects/petrojet/${name}.webp`;

  const facts = [
    { label: "Role", value: "Mobile app" },
    { label: "Built", value: "Apr 2023" },
    { label: "Platforms", value: "Android and iOS" },
    { label: "Status", value: "Cancelled before launch" },
  ];

  const features = [
    {
      title: "Every trip in one place",
      text: "The home screen shows the PR department's latest events, like the summer vacation and the company's hotel units. Each event opens a list of destinations, such as Sharm El Sheikh, Hurghada, Luxor and El Gouna, and each destination lists its hotels and Nile cruises.",
      shots: [
        { src: "home", alt: "The home screen with the Summer Vacation and Hotel Units events" },
        { src: "cruises", alt: "The Luxor destination, listing Nile cruises such as Nile Style, Crown Prince and Crown Emperor" },
      ],
    },
    {
      title: "What each stay includes",
      text: "A hotel's page shows its photos, meal plan and location, with the distance from Cairo and a button that opens it in the phone's maps app. It lists the price per person for single, double and triple rooms, the child policy, and the company's contribution, which is 60% for employees up to assistant general manager and 50% above that.",
      shots: [{ src: "details", alt: "The Crown Emperor page with its meal plan, room prices, child policy and company discount" }],
    },
    {
      title: "Guests and rooms",
      text: "Employees add the family members coming with them, with a name, birth date, relationship and gender. Then they add rooms and drag each person into one. The app checks each room's limits on adults and children, and won't save until every room has the right number of adults.",
      shots: [
        { src: "add-guest", alt: "The Add Person sheet with name, birth date, relationship and gender" },
        { src: "rooming", alt: "The rooming screen with Ahmed, Samia and Sara in a double room" },
      ],
    },
    {
      title: "The price before you book",
      text: "On the order screen you pick the trip dates and the transport: bus, train or plane. The summary adds up the room price for each adult and child, with the company's discount already taken off, plus the transport for each person. If something is missing, its card shakes.",
      shots: [{ src: "order", alt: "The order summary for a double room by train, with the discounted prices and total" }],
    },
  ];

  const stack = [
    { name: "Flutter", text: "One codebase for Android and iOS." },
    { name: "Riverpod", text: "Keeps each trip's order, rooms and guests while the employee moves between screens." },
    { name: "flutter_animate and animations", text: "Screen transitions, the order button that slides up, and the shake on missing choices." },
    { name: "intl", text: "Arabic and English text, with an Arabic layout that reads right to left." },
    { name: "Google Fonts", text: "Oswald for English and Cairo for Arabic." },
    { name: "map and maps_launcher", text: "The map of each hotel, and opening it in the phone's maps app." },
    { name: "Firebase Cloud Messaging", text: "Push notifications from the PR department to every employee with the app." },
  ];
</script>

<svelte:head>
  <title>My Petrojet | Youssef Lasheen</title>
  <meta
    name="description"
    content="My Petrojet is a vacation booking app for Petrojet employees, built with Flutter by lasheen.dev for the company's PR department."
  />
  <meta property="og:title" content="My Petrojet" />
  <meta property="og:description" content="A vacation booking app for Petrojet employees and their families." />
  <meta property="og:image" content="https://lasheen.dev/images/projects/petrojet.webp" />
</svelte:head>

<article class="case">
  <a href="/projects" class="back">← All projects</a>

  <header class="hero">
    <div class="hero-text">
      <p class="badge">Client project</p>
      <h1>My Petrojet</h1>
      <p class="lead">
        A vacation booking app for employees of Petrojet, built for the company's PR department. Employees
        browse the company's trips, choose a hotel or Nile cruise, add the family members coming with them,
        arrange everyone into rooms, and see what they'll pay after the company's contribution.
      </p>
    </div>
    <dl class="facts">
      {#each facts as fact}
        <div>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      {/each}
    </dl>
  </header>

  <img
    class="cover"
    src="/images/projects/petrojet.webp"
    alt="Three My Petrojet screens: the Luxor Nile cruises, the rooming screen and the order summary"
    width="960"
    height="600"
  />

  <section class="intro">
    <h2>The idea</h2>
    <p>
      Petrojet's PR department organises vacations for employees and their families. The app let employees
      pick their vacation preferences on their phone: the destination and hotel, the dates and transport,
      and who is coming with them and which room each guest stays in, with the price and the company's
      share shown as they go.
    </p>
  </section>

  {#each features as feature, i}
    <section class="feature" class:flip={i % 2 === 1}>
      <div class="feature-text">
        <h2>{feature.title}</h2>
        <p>{feature.text}</p>
      </div>
      <div class="phones" class:pair={feature.shots.length > 1}>
        {#each feature.shots as s}
          <figure class="phone">
            <img src={shot(s.src)} alt={s.alt} width="600" height="1298" loading="lazy" decoding="async" />
          </figure>
        {/each}
      </div>
    </section>
  {/each}

  <section class="feature">
    <div class="feature-text">
      <h2>Arabic and English</h2>
      <p>
        The first time the app opens, it asks which language to use, and you can change it later in
        settings. In <strong>Arabic</strong> the whole layout flips to read right to left and uses the Cairo
        font. In <strong>English</strong> it uses Oswald.
      </p>
    </div>
    <div class="phones pair">
      <figure class="phone">
        <img src={shot("home-ar")} alt="The home screen in Arabic" width="600" height="1298" loading="lazy" decoding="async" />
      </figure>
      <figure class="phone">
        <img src={shot("details-ar")} alt="The Crown Emperor page in Arabic, laid out right to left" width="600" height="1298" loading="lazy" decoding="async" />
      </figure>
    </div>
  </section>

  <section class="stack">
    <h2>How it was built</h2>
    <p class="section-intro">
      I built the Flutter app. The trips, hotels and prices were sample data in the app, ready to be
      replaced by a backend.
    </p>
    <ul>
      {#each stack as item}
        <li>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </li>
      {/each}
    </ul>
  </section>

  <section class="outcome">
    <h2>Where it ended</h2>
    <p>
      The project was cancelled before the backend was built. The app itself worked, with all of the
      features above, but orders were never sent anywhere and it never reached the App Store or Google Play.
    </p>
    <p class="note">
      The screenshots on this page are from the real app, running on its sample data. The guests are made up.
    </p>
  </section>

  <aside class="cta">
    <div>
      <h2>Have an app like this in mind?</h2>
      <p>I design and build mobile apps with Flutter, from the first screen to the store listing.</p>
    </div>
    <a href="/contact" class="btn primary">Start a project</a>
  </aside>
</article>

<style lang="scss">
  .case {
    max-width: 64rem;
    margin: 0 auto;
  }

  .back {
    display: inline-block;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 16rem;
    gap: 3rem;
    align-items: end;
  }

  .badge {
    display: inline-block;
    margin-bottom: 0.75rem;
    padding: 0.15rem 0.6rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    background: $accent-soft;
    color: $accent;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
  }

  .lead {
    margin-top: 1rem;
    max-width: 40rem;
    font-size: 1.15rem;
    color: $text-muted;
  }

  .facts {
    display: grid;
    gap: 1rem;
    padding: 1.25rem;
    border: 1px solid $border;
    border-radius: $radius;
    background: $surface;

    dt {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: $text-subtle;
    }

    dd {
      font-weight: 600;
    }
  }

  .cover {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 2.5rem;
    border-radius: $radius;
    box-shadow: $shadow;
  }

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 1.9rem);
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  section {
    margin-top: 5rem;
  }

  .intro p,
  .outcome p {
    max-width: 44rem;
    font-size: 1.05rem;
    color: $text-muted;
  }

  .outcome p + p {
    margin-top: 1rem;
  }

  .feature {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 3rem;
    align-items: center;

    &.flip .feature-text {
      order: 2;
    }

    p {
      color: $text-muted;
      font-size: 1.05rem;
    }
  }

  .phones {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1.25rem;

    .phone {
      width: min(100%, 13rem);
    }

    &.pair .phone {
      width: min(48%, 13rem);
    }

    &.pair .phone:nth-child(2) {
      margin-top: 2.5rem;
    }
  }

  .phone {
    padding: 0.4rem;
    border-radius: 1.9rem;
    background: #1a1a1d;
    box-shadow: $shadow;

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 1.55rem;
    }
  }

  .stack {
    .section-intro {
      max-width: 44rem;
      color: $text-muted;
      font-size: 1.05rem;
    }

    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));
      gap: 1rem;
      margin-top: 1.75rem;
    }

    li {
      padding: 1.25rem;
      border: 1px solid $border;
      border-radius: $radius;
      background: $surface;
    }

    h3 {
      font-size: 1rem;
      font-weight: 700;
    }

    li p {
      margin-top: 0.3rem;
      font-size: 0.95rem;
      color: $text-muted;
    }
  }

  .note {
    font-size: 0.95rem !important;
    color: $text-subtle !important;
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 5rem;
    padding: 2rem;
    border-radius: $radius;
    background: $accent;
    color: $on-accent;

    h2 {
      color: $on-accent;
      margin-bottom: 0.35rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
    }

    .btn {
      flex-shrink: 0;
      background: $surface;
      color: $accent;
    }
  }

  @media (max-width: $tablet) {
    .hero,
    .feature {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.75rem;
    }

    .feature.flip .feature-text {
      order: 0;
    }

    section {
      margin-top: 3.5rem;
    }

    .cta {
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem;
    }
  }
</style>
