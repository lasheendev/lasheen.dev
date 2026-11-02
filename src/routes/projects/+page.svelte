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
    font-size: 3rem;
    //margin-top: 2rem;
    margin-bottom: 2rem;
    color: $clr-fg-2;
    font-weight: 600;
  }

  // Tablet and smaller devices
  @media screen and (max-width: $tablet) {
    h2 {
      font-size: 1.3rem;
      color: $clr-fg-2;
      font-weight: 400;
    }
  }

  .no-results {
    text-align: center;
    padding: 2rem;
    color: $clr-fg-2;
    font-size: 1.2rem;
  }

  @media screen and (max-width: $tablet) {
    .no-results {
      font-size: 1rem;
      padding: 1rem;
    }
  }
</style>
