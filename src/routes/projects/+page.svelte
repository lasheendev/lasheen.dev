<script lang="ts">
  import ProjectsGrid from "$lib/projects/ProjectsGrid.svelte";
  import FilterChips from "$lib/projects/FilterChips.svelte";
  import { projects, categories } from "$lib/projects/projects";
  import type { Project } from "../../types/project";

  const filters = [...new Set(projects.flatMap((project) => project.tags))];
  let selectedFilters: string[] = [];

  $: filteredProjects =
    selectedFilters.length > 0
      ? projects.filter((project: Project) =>
          selectedFilters.every((filter) => project.tags.includes(filter)),
        )
      : projects;

  $: sections = categories
    .map((category) => ({
      ...category,
      projects: filteredProjects.filter((p) => p.category === category.id),
    }))
    .filter((section) => section.projects.length > 0);
</script>

<svelte:head>
  <title>Projects | Youssef Lasheen</title>
  <meta
    name="description"
    content="Client work by lasheen.dev, apps from Youssef Lasheen's full-time roles, and his own apps and open-source Flutter packages."
  />
</svelte:head>

<section class="latest">
  <h1>Projects</h1>
  <p class="intro">
    Client work through lasheen.dev, apps from my full-time roles, and my own
    apps and open-source packages.
  </p>
  <FilterChips {filters} bind:selectedFilters />

  {#each sections as section (section.id)}
    <section class="group" aria-labelledby="group-{section.id}">
      <header>
        <h2 id="group-{section.id}">{section.title}</h2>
        <p>{section.description}</p>
      </header>
      <ProjectsGrid projects={section.projects} />
    </section>
  {:else}
    <p class="no-results">
      No projects match the selected filters. Try removing one.
    </p>
  {/each}
</section>

<style lang="scss">
  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .intro {
    max-width: 40rem;
    margin-bottom: 2rem;
    color: $text-muted;
  }

  .group {
    margin-top: 3.5rem;

    header {
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: clamp(1.5rem, 2.5vw, 1.9rem);
      font-weight: 700;
    }

    p {
      margin-top: 0.25rem;
      color: $text-muted;
    }
  }

  .no-results {
    padding: 2rem 0;
    color: $text-muted;
  }
</style>
