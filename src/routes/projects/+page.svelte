<script>
    import ProjectsGrid from '$lib/projects/ProjectsGrid.svelte';
    import FilterChips from '$lib/projects/FilterChips.svelte';
    import { onMount } from 'svelte';

    let latestProjects = [];
    let filteredProjects = [];
    let filters = [];
    let selectedFilters = [];

    const githubUrl = 'https://raw.githubusercontent.com/lasheendev/lasheen.dev/refs/heads/master/json/projects.json';

    async function fetchProjects() {
        const response = await fetch(githubUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    $: {
        filteredProjects = selectedFilters.length > 0
            ? latestProjects.filter(project => 
                project.tags?.some(tech => 
                    selectedFilters.includes(tech)
                )
            )
            : latestProjects;
    }

    onMount(async () => {
        try {
            const data = await fetchProjects();
            latestProjects = Object.values(data);
            // Extract unique technologies for filters
            filters = [...new Set(
                latestProjects.flatMap(project => project.tags || [])
            )];
        } catch (error) {
            console.error('Error fetching projects:', error);
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
