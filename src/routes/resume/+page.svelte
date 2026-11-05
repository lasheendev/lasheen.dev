<script lang="ts">
  // The CV, rendered from src/resume/resume.json (JSON Resume v1.0.0 format).
  import resume from "../../resume/resume.json";

  const b = resume.basics;
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function formatDate(date?: string): string {
    if (!date) return "";
    const [year, month] = date.split("-");
    return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
  }

  function dateRange(start?: string, end?: string, openEnded = true): string {
    const to = end ? formatDate(end) : openEnded ? "Present" : "";
    return [formatDate(start), to].filter(Boolean).join(" – ");
  }

  const prettyUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const place = [b.location?.city, b.location?.region].filter(Boolean).join(", ");

  const print = () => window.print();
</script>

<svelte:head>
  <title>Resume | {b.name}</title>
  <meta name="description" content={b.summary} />
</svelte:head>

<div class="toolbar">
  <p>Resume</p>
  <button class="btn secondary" on:click={print}>Save as PDF</button>
</div>

<article class="cv">
  <header class="top">
    <h1>{b.name}</h1>
    <p class="label">{b.label}</p>
    <p class="summary">{b.summary}</p>
    <ul class="contact">
      <li><a href="mailto:{b.email}">{b.email}</a></li>
      {#if b.phone}<li><a href="tel:{b.phone.replace(/\s/g, '')}">{b.phone}</a></li>{/if}
      {#if b.url}<li><a href={b.url}>{prettyUrl(b.url)}</a></li>{/if}
      {#each b.profiles ?? [] as p}
        <li><a href={p.url}>{p.network}: {p.username}</a></li>
      {/each}
      {#if place}<li class="place">{place}</li>{/if}
    </ul>
  </header>

  <div class="body">
    <div class="main">
      <section>
        <h2>Experience</h2>
        {#each resume.work as w}
          <div class="entry">
            <div class="entry-head">
              <div>
                <h3>{#if w.url}<a href={w.url}>{w.name}</a>{:else}{w.name}{/if}</h3>
                <p class="role">{w.position}</p>
              </div>
              <p class="dates">{dateRange(w.startDate, w.endDate)}</p>
            </div>
            {#if w.description || w.location}
              <p class="meta">{[w.description, w.location].filter(Boolean).join(" · ")}</p>
            {/if}
            {#if w.summary}<p class="text">{w.summary}</p>{/if}
            {#if w.highlights?.length}
              <ul class="bullets">
                {#each w.highlights as h}<li>{h}</li>{/each}
              </ul>
            {/if}
          </div>
        {/each}
      </section>

      {#if resume.projects?.length}
        <section>
          <h2>Projects</h2>
          {#each resume.projects as p}
            <div class="entry">
              <div class="entry-head">
                <div>
                  <h3>{#if p.url}<a href={p.url}>{p.name}</a>{:else}{p.name}{/if}</h3>
                  {#if p.type}<p class="role">{p.type}</p>{/if}
                </div>
                <p class="dates">{formatDate(p.startDate)}</p>
              </div>
              {#if p.description}<p class="text">{p.description}</p>{/if}
              {#if p.keywords?.length}
                <ul class="tags">{#each p.keywords as k}<li>{k}</li>{/each}</ul>
              {/if}
            </div>
          {/each}
        </section>
      {/if}

      <section>
        <h2>Education</h2>
        {#each resume.education as e}
          <div class="entry">
            <div class="entry-head">
              <div>
                <h3>{e.institution}</h3>
                <p class="role">{[e.studyType, e.area].filter(Boolean).join(" ")}</p>
              </div>
              <p class="dates">{dateRange(e.startDate, e.endDate, false)}</p>
            </div>
            {#if e.score}<p class="score">{e.score}</p>{/if}
            {#if e.courses?.length}<p class="meta">{e.courses.join(" · ")}</p>{/if}
          </div>
        {/each}
      </section>
    </div>

    <aside class="side">
      <section>
        <h2>Skills</h2>
        {#each resume.skills as s}
          <div class="skill">
            <h3>{s.name}</h3>
            <ul class="tags">{#each s.keywords as k}<li>{k}</li>{/each}</ul>
          </div>
        {/each}
      </section>

      {#if resume.languages?.length}
        <section>
          <h2>Languages</h2>
          <ul class="plain">
            {#each resume.languages as l}
              <li><strong>{l.language}</strong><span>{l.fluency}</span></li>
            {/each}
          </ul>
        </section>
      {/if}

      {#if resume.certificates?.length}
        <section>
          <h2>Certificates</h2>
          <ul class="plain">
            {#each resume.certificates as c}
              <li>
                <strong>{#if c.url}<a href={c.url}>{c.name}</a>{:else}{c.name}{/if}</strong>
                <span>{[c.issuer, c.date?.slice(0, 4)].filter(Boolean).join(", ")}</span>
              </li>
            {/each}
          </ul>
        </section>
      {/if}
    </aside>
  </div>
</article>

<style lang="scss">
  .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    p {
      font-weight: 800;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: $highlight;
    }
  }

  .cv {
    background: $surface;
    border: 1px solid $border;
    border-radius: $radius;
    overflow: hidden;
  }

  .top {
    position: relative;
    padding: 2.25rem 2.75rem 1.9rem;
    background: $accent;
    color: $on-accent;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 4px;
      background: $sky;
    }

    h1 {
      color: $on-accent;
      font-size: clamp(2rem, 5vw, 2.6rem);
      font-weight: 800;
      letter-spacing: -0.03em;
    }

    .label {
      margin-top: 0.3rem;
      font-size: 1.05rem;
      font-weight: 600;
      color: $sky;
    }

    .summary {
      margin-top: 1rem;
      max-width: 46rem;
      color: #d7deea;
    }
  }

  .contact {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 1.1rem;
    margin-top: 1.1rem;
    font-size: 0.85rem;

    a {
      color: #ffffff;
    }

    .place {
      color: #c3cde0;
    }
  }

  .body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 17.5rem;
  }

  .main {
    display: grid;
    gap: 1.75rem;
    align-content: start;
    padding: 1.9rem 2.5rem 2.25rem 2.75rem;
  }

  .side {
    display: grid;
    gap: 1.6rem;
    align-content: start;
    padding: 1.9rem 2.25rem 2.25rem 1.75rem;
    background: #f8fafc;
    border-left: 1px solid $border;
  }

  h2 {
    margin-bottom: 0.9rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid $border;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: $highlight;
  }

  .entry + .entry {
    margin-top: 1.1rem;
  }

  .entry-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.75rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 800;

    a {
      color: $text;
    }
  }

  .role {
    font-size: 0.9rem;
    font-weight: 600;
    color: $text-muted;
  }

  .dates {
    font-size: 0.82rem;
    color: $text-subtle;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .meta {
    margin-top: 0.15rem;
    font-size: 0.82rem;
    color: $text-subtle;
  }

  .text {
    margin-top: 0.4rem;
  }

  .score {
    margin-top: 0.3rem;
    font-weight: 600;
    color: $accent;
  }

  .bullets {
    display: grid;
    gap: 0.25rem;
    margin-top: 0.5rem;
    padding-left: 1.1rem;

    li::marker {
      color: $sky;
    }
  }

  .tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.45rem;

    li {
      padding: 0.1rem 0.55rem;
      border-radius: 999px;
      background: $surface-muted;
      color: $accent;
      font-size: 0.78rem;
      font-weight: 600;
    }
  }

  .skill + .skill {
    margin-top: 0.9rem;
  }

  .skill h3 {
    font-size: 0.85rem;
    font-weight: 700;
  }

  .plain {
    list-style: none;
    display: grid;
    gap: 0.5rem;
    font-size: 0.88rem;

    strong {
      display: block;
      font-weight: 700;

      a {
        color: $text;
      }
    }

    span {
      color: $text-subtle;
      font-size: 0.82rem;
    }
  }

  @media (max-width: $tablet) {
    .top {
      padding: 1.75rem 1.25rem 1.5rem;
    }

    .body {
      grid-template-columns: 1fr;
    }

    .main,
    .side {
      padding: 1.5rem 1.25rem;
    }

    .side {
      border-left: 0;
      border-top: 1px solid $border;
    }

    .entry-head {
      flex-direction: column;
      gap: 0.1rem;
    }
  }

  // Printing ("Save as PDF"): just the CV, on A4, with its colours.
  @media print {
    @page {
      size: A4;
      margin: 0;
    }

    :global(.site-header),
    :global(.site-footer),
    .toolbar {
      display: none !important;
    }

    :global(body) {
      background: #ffffff !important;
      font-size: 12.5px;
    }

    :global(main) {
      max-width: none !important;
      padding: 0 !important;
    }

    .cv {
      border: 0;
      border-radius: 0;
    }

    .top,
    .top::after,
    .side,
    .tags li {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .top {
      padding: 1.6rem 2.1rem 1.4rem;
    }

    .main {
      padding: 1.4rem 1.75rem 1.5rem 2.1rem;
      gap: 1.25rem;
    }

    .side {
      padding: 1.4rem 1.75rem 1.5rem 1.4rem;
      gap: 1.1rem;
    }

    .entry {
      break-inside: avoid;
    }
  }
</style>
