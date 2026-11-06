<script lang="ts">
  import { useLazyImage as lazyImage } from "svelte-lazy-image";
  import Icon from "@iconify/svelte";
  import type { Project } from "../../types/project";
  export let project: Project;

  // Friendly labels for the link ids used in projects_v2.json.
  const labels: Record<string, string> = {
    Appstore: "App Store",
    Playstore: "Google Play",
    Github: "GitHub",
    Website: "Website",
    "pub.dev": "pub.dev",
    Snapcraft: "Snapcraft",
    Android: "Android app",
  };

  // "Playstore-Driver" -> "Google Play (Driver)"
  const categoryLabel = {
    client: "Client project",
    employment: "Full-time role",
    personal: "Personal",
  };

  $: badge =
    project.category === "employment" && project.employer
      ? `Full-time · ${project.employer}`
      : categoryLabel[project.category];

  const label = (id: string) => {
    if (labels[id]) return labels[id];
    const [base, variant] = id.split("-");
    return variant && labels[base] ? `${labels[base]} (${variant})` : id;
  };
</script>

<article class="card">
  <div class="card-image">
    {#if project.backgroundImageSource}
      <img
        data-src={project.backgroundImageSource}
        alt="{project.title} preview"
        use:lazyImage={{ threshold: 0.5 }}
      />
    {:else}
      <div class="placeholder" aria-hidden="true">{project.title}</div>
    {/if}
  </div>
  <div class="card-info">
    <p class="badge" data-category={project.category}>{badge}</p>
    <h3 class="card-title">{project.title}</h3>
    <p class="card-text">{project.shortDescription}</p>

    {#if project.tags}
      <ul class="tags" aria-label="Tags">
        {#each project.tags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    {/if}

    {#if project.status === "discontinued"}
      <p class="status">No longer on the stores</p>
    {/if}

    {#if project.access?.length}
      <div class="actions">
        {#each project.access as link}
          <a href={link.url} class="action" target="_blank" rel="noopener noreferrer">
            <Icon icon={link.icon} />
            <span>{label(link.id)}</span>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</article>

<style lang="scss">
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: $surface;
    border: 1px solid $border;
    border-radius: $radius;
    overflow: hidden;
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;

    @include hover {
      box-shadow: $shadow;
      transform: translateY(-2px);
    }
  }

  .card-image {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: $surface-muted;
    border-bottom: 1px solid $border;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .placeholder {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    font-family: $heading-font;
    font-size: 1.6rem;
    font-weight: 600;
    color: $accent;
    background: $accent-soft;
  }

  .card-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
  }

  .badge {
    align-self: flex-start;
    margin-bottom: 0.6rem;
    padding: 0.15rem 0.6rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    background: $accent-soft;
    color: $accent;

    &[data-category="employment"] {
      background: #e7f3ec;
      color: #1d6b40;
    }

    &[data-category="personal"] {
      background: $surface-muted;
      color: $text-muted;
    }
  }

  .status {
    margin-top: 0.9rem;
    font-size: 0.85rem;
    color: $text-subtle;
  }

  .card-title {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .card-text {
    margin-top: 0.35rem;
    color: $text-muted;
    font-size: 0.95rem;
  }

  .tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.9rem;

    li {
      padding: 0.15rem 0.6rem;
      border-radius: 999px;
      background: $surface-muted;
      color: $text-muted;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
    padding-top: 1.25rem;
  }

  .action {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.45rem 0.75rem;
    border: 1px solid $border;
    border-radius: 0.55rem;
    color: $text;
    font-size: 0.85rem;
    font-weight: 500;

    :global(svg) {
      font-size: 1.05rem;
    }

    &:hover {
      border-color: $text-subtle;
      color: $text;
    }
  }
</style>
