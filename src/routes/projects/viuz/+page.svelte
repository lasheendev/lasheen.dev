<script lang="ts">
  const shot = (name: string) => `/images/projects/viuz/${name}.webp`;

  const facts = [
    { label: "Role", value: "App and backend" },
    { label: "Built", value: "Dec 2024 – Mar 2025" },
    { label: "Platforms", value: "iOS and Android" },
    { label: "Status", value: "Cancelled before launch" },
  ];

  const features = [
    {
      title: "Reviews you can see",
      text: "Every review is a post with photos or video, a star rating and the exact branch it's about, so people can see what they'd get before they go. Posts scroll like a social feed, and you can swipe through a post's photos, like it, save it or open its comments.",
      shots: [
        { src: "feed", alt: "The main feed, showing a photo review of a café with a 4.5-star rating" },
        { src: "comments", alt: "The comments sheet on a review" },
      ],
    },
    {
      title: "Three feeds",
      text: "The global feed shows everything posted on Viuz. The timeline shows only people and businesses you follow. The businesses feed shows posts from businesses, ranked by how close they are to you.",
      shots: [
        { src: "timeline", alt: "The timeline feed, with reviews from followed people" },
        { src: "business-feed", alt: "The businesses feed, with posts from nearby businesses" },
      ],
    },
    {
      title: "A map of places",
      text: "The map shows every business branch around you, each with its logo. Tap one to open the business's profile. Map data comes from OpenStreetMap, and the app only loads the branches inside the part of the map you're looking at.",
      shots: [{ src: "map", alt: "A map of London with business logos pinned on their branches" }],
    },
    {
      title: "Posting a review",
      text: "To post, you add photos or videos, write about your visit, choose the business and the branch, and give it a star rating. Media uploads straight from the phone and shows up in the feeds of everyone who follows you.",
      shots: [{ src: "add-post", alt: "The Add Post screen with media, business, branch and star rating" }],
    },
    {
      title: "Profiles and search",
      text: "Everyone has a profile with their bio, follower counts and posts. A business profile has two tabs: the posts the business wrote, and the reviews people wrote about it. You can search people and businesses separately.",
      shots: [
        { src: "business-profile", alt: "A café's profile with Posts and Reviews tabs" },
        { src: "search", alt: "Search, with separate tabs for users and businesses" },
      ],
    },
  ];

  const stack = [
    { name: "Flutter", text: "One codebase for iOS and Android." },
    { name: "Riverpod", text: "App state, data loading and caching." },
    { name: "go_router", text: "Typed routes, with a bottom tab bar that keeps each tab's history." },
    { name: "Firebase Auth", text: "Sign-in with Google or email, with a Cloud Function that creates the user's record on sign-up." },
    { name: "Firebase Data Connect", text: "A PostgreSQL database behind GraphQL for users, businesses, branches, posts and reviews, with type-safe Dart clients generated from the queries." },
    { name: "Stream activity feeds", text: "Feeds, follows, likes and comments, including the location-ranked businesses feed." },
    { name: "Firebase Storage", text: "Photo and video uploads." },
    { name: "Crashlytics and Analytics", text: "Crash reports and usage data." },
    { name: "flutter_map", text: "The business map, on OpenStreetMap tiles." },
  ];
</script>

<svelte:head>
  <title>Viuz | Youssef Lasheen</title>
  <meta
    name="description"
    content="Viuz is a social app for photo and video reviews of local businesses, built with Flutter and Firebase by lasheen.dev for a client."
  />
  <meta property="og:title" content="Viuz" />
  <meta property="og:description" content="A social app for photo and video reviews of local businesses." />
  <meta property="og:image" content="https://lasheen.dev/images/projects/viuz.webp" />
</svelte:head>

<article class="case">
  <a href="/projects" class="back">← All projects</a>

  <header class="hero">
    <div class="hero-text">
      <p class="badge">Client project</p>
      <h1>Viuz</h1>
      <p class="lead">
        A social app for honest reviews of local cafés, restaurants and shops. People post photo and video
        reviews with a star rating, follow each other, and find places on a map. Businesses get their own
        profile to post updates and see what people say about each of their branches.
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
    src="/images/projects/viuz.webp"
    alt="Three Viuz screens: the business map, the review feed and a café's profile"
    width="960"
    height="504"
  />

  <section class="intro">
    <h2>The idea</h2>
    <p>
      Review sites are mostly walls of text and star ratings that are hard to trust. Viuz turned reviews into
      a social feed: every review is a post with real photos or video from the visit, tied to a specific
      branch, from a person you can follow. Businesses were part of it too. They could post their own news,
      list all their branches, and see the reviews of each one in one place.
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
      <h2>One app, two modes</h2>
      <p>
        One account can be both a reviewer and a business owner. After signing in you pick a mode. In
        <strong>user mode</strong> you share your location once, then review places, follow people and browse
        the feeds. In <strong>business mode</strong> you act as one of your businesses: you post as the
        business, edit its profile and industry, and manage its branches, each with its own address and
        pin on the map. You can switch modes at any time from your profile.
      </p>
    </div>
    <div class="phones pair">
      <figure class="phone">
        <img src={shot("app-mode")} alt="The screen for picking user mode or business mode" width="600" height="1298" loading="lazy" decoding="async" />
      </figure>
      <figure class="phone">
        <img src={shot("profile")} alt="A user's own profile with their reviews" width="600" height="1298" loading="lazy" decoding="async" />
      </figure>
    </div>
  </section>

  <section class="stack">
    <h2>How it was built</h2>
    <p class="section-intro">
      I built the Flutter app and the Firebase side. The app is split by feature, and each feature has its
      own data, domain and presentation layers.
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
      The client cancelled the project before launch, before the backend was finished. The app itself was
      working, with all of the features above, but it never reached the App Store or Google Play.
    </p>
    <p class="note">
      The screenshots on this page are from the real app, running on demo data. The people, places and
      photos are made up.
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
