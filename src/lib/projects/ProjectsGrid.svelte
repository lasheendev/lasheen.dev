<script>
	import PostCard from './ProjectCard.svelte';
	export let posts;

	let grid;
</script>

<div class="projects-grid" bind:this={grid}>
	{#each posts as post, i}
		<PostCard {post} {i} />
	{/each}
</div>

<style lang="scss">
	.projects-grid {
		display: grid;
		grid-auto-columns: 100px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 3rem 1rem;
		transition: all 200ms ease-in-out;
		@media screen and (max-width: $tablet) {
			margin-inline: -1rem;
		}
	}
</style>
