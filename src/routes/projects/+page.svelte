<script>
	import ProjectsGrid from '$lib/projects/ProjectsGrid.svelte';
	let latestPosts = [
		{
			title: 'Dummy Article Title',
			description: 'This is a dummy article description.',
			date: '2023-06-26',
			color: '#FF0000',
			symbol: 'fa fa-star',
			tags: ['dummy', 'example', 'data'],
			coverImage:
				'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
			imageSrc: 'Photo by John Doe',
			url: '/article/dummy-article-title',
		},
		{
			title: 'Dummy Article Title',
			description: 'This is a dummy article description.',
			date: '2023-06-26',
			color: '#FF0000',
			symbol: 'fa fa-star',
			tags: ['dummy', 'example', 'data'],
			coverImage:
				'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
			featuredImage: {
				asset: {
					metadata: {
						lqip: 'https://example.com/images/dummy-image-lqip.jpg'
					}
				}
			},
			imageSrc: 'Photo by John Doe',
			url: '/article/dummy-article-title',
		},
		{
			title: 'Dummy Article Title',
			description: 'This is a dummy article description.',
			date: '2023-06-26',
			color: '#FF0000',
			symbol: 'fa fa-star',
			tags: ['dummy', 'example', 'data'],
			coverImage:
				'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
			featuredImage: {
				asset: {
					metadata: {
						lqip: 'https://example.com/images/dummy-image-lqip.jpg'
					}
				}
			},
			imageSrc: 'Photo by John Doe',
			url: '/article/dummy-article-title',
		}
	];
</script>

<section class="latest">
	<h2>Projects</h2>
	<ProjectsGrid posts={latestPosts} />
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
