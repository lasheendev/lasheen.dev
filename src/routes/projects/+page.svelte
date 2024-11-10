<script lang="ts">
    import ProjectsGrid from '$lib/projects/ProjectsGrid.svelte';
    import FilterChips from '$lib/projects/FilterChips.svelte';
    import { onMount } from 'svelte';
    import type { Project,ProjectResponse } from '../../types/project';

    let latestProjects: Project[] = [];
    let filteredProjects: Project[] = [];
    let filters: string[] = [];
    let selectedFilters: string[] = [];

    const githubUrl: string = 'https://raw.githubusercontent.com/lasheendev/lasheen.dev/refs/heads/master/json/projects_v2.json';

    async function fetchProjects(): Promise<ProjectResponse> {
        const response = await fetch(githubUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    $: {
        filteredProjects = selectedFilters.length > 0
            ? latestProjects.filter((project: Project) => 
                project.tags.some((tech: string) => 
                    selectedFilters.includes(tech)
                )
            )
            : latestProjects;
    }

    onMount(async () => {
        try {
            const data: ProjectResponse = await fetchProjects();
            latestProjects = Object.values(data.projects);
            filters = [...new Set(
                latestProjects.flatMap(project => project.tags)
            )];
        } catch (error: unknown) {
            console.error('Error fetching projects:', error instanceof Error ? error.message : error);
        }
    });
</script>

<section class="latest">
    <h2>Projects</h2>
    <FilterChips {filters} bind:selectedFilters />
    <ProjectsGrid projects={filteredProjects} />
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
</style>
