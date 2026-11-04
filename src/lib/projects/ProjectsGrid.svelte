<script lang="ts">
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  import ProjectCard from "./ProjectCard.svelte";
  import type { Project } from "../../types/project";

  export let projects: Project[];
</script>

<div class="projects-grid">
  {#each projects as project (project.id)}
    <div animate:flip={{ duration: 300 }} transition:fade={{ duration: 200 }}>
      <ProjectCard {project} />
    </div>
  {/each}
</div>

<style lang="scss">
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
    gap: 1.5rem;
  }
</style>
