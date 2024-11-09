<script>
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	import PostCard from './ProjectCard.svelte';

	export let projects;
</script>

<div class="projects-grid">
	{#each projects as project, i (project.id)}
		<div animate:flip={{duration: 300}} transition:fade={{ duration: 200 }} >
			<PostCard {project} {i} />
		</div>
	{/each}
</div>

<style lang="scss">
	.projects-grid {
		display: grid;
		grid-auto-columns: 100px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 3rem 1rem;
		@media screen and (max-width: $tablet) {
			margin-inline: -1rem;
		}
	}
</style>
