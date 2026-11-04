<script lang="ts">
  import ProjectsGrid from "$lib/projects/ProjectsGrid.svelte";
  import FilterChips from "$lib/projects/FilterChips.svelte";
  import { onMount } from "svelte";
  import { fetchProjects } from "$lib/projects/fetchProjects";
  import type { Project } from "../../types/project";

  let latestProjects: Project[] = [];
  let filteredProjects: Project[] = [];
  let filters: string[] = [];
  let selectedFilters: string[] = [];
  let loading = true;

  $: {
    filteredProjects =
      selectedFilters.length > 0
        ? latestProjects.filter((project: Project) =>
            selectedFilters.every((filter: string) => 
              project.tags.includes(filter)
            ),
          )
        : latestProjects;
  }

  onMount(async () => {
    try {
      latestProjects = await fetchProjects();
      filters = [...new Set(latestProjects.flatMap((project) => project.tags))];
    } catch (error: unknown) {
      console.error(
        "Error fetching projects:",
        error instanceof Error ? error.message : error,
      );
    } finally {
      loading = false;
    }
  });
</script>

<svelte:head>
  <title>Projects | Youssef Lasheen</title>
  <meta
    name="description"
    content="Apps and packages built by Youssef Lasheen: mobile apps on the App Store and Play Store, Linux desktop apps, and open-source Flutter packages."
  />
</svelte:head>

<section class="latest">
  <h2>Projects</h2>
  <p class="intro">
    Apps for clients and employers, plus my own apps and open-source packages.
  </p>
  <FilterChips {filters} bind:selectedFilters />
  {#if loading}
    <div class="no-results">Loading projects…</div>
  {:else if filteredProjects.length > 0}
    <ProjectsGrid projects={filteredProjects} />
  {:else}
    <div class="no-results">
      No projects found with selected filters. Please adjust your selection.
    </div>
  {/if}
</section>

<style lang="scss">
  .latest h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .intro {
    max-width: 40rem;
    margin-bottom: 2rem;
    color: $text-muted;
  }

  .no-results {
    padding: 2rem 0;
    color: $text-muted;
  }
</style>
