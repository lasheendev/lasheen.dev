<script>
    import ProjectsGrid from '$lib/projects/ProjectsGrid.svelte';
    import { onMount } from 'svelte';

    let latestProjects = [];

    const githubUrl = 'https://raw.githubusercontent.com/lasheendev/lasheen.dev/refs/heads/master/json/projects.json';

    async function fetchProjects() {
        const response = await fetch(githubUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    onMount(async () => {
        try {
            const data = await fetchProjects();
            latestProjects = Object.values(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    });
</script>


<section class="latest">
	<h2>Projects</h2>
	<ProjectsGrid projects={latestProjects} />
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
