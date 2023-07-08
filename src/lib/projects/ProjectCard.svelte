<script>
	import { fly } from 'svelte/transition';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	import Icon from '@iconify/svelte';
	export let project;
	export let i;
	if (project.tags) {
		project.tags = project.tags.slice(0, 2);
	}
	var url = 'projects/' + project.id;
</script>

<div class="card" in:fly={{ y: 10, duration: 300, delay: i * 200 + 200 }}>
	<div class="card-image">
		<img
			data-src={project.backgroundImageSource}
			alt="thumbnail"
			use:lazyImage={{ threshold: 0.5 }}
		/>
	</div>
	<div class="card-content">
		<div class="card-info">
			<span class="card-title">{project.title}</span>
			<p class="card-text">
				{project.shortDescription}
			</p>
			<!-- tags -->
			{#if project.tags}
				<div class="tags">
					{#each project.tags as tag}
						<div class="tag-link">
							<Icon icon="mdi:pound" /><span class="tag-name">{tag}</span>
						</div>
					{/each}
				</div>
			{/if}
			<div class="actions">
				{#each Object.entries(project.access) as [key, value]}
					<a href={value.url} class="btn" title={key} style="--color: {value.color}">
						<Icon icon={value.icon} />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		position: relative;
		height: calc(100% + 2rem);
		max-width: 630px;
		background: $clr-card;
		border-radius: 1.5rem;
		transition: all 200ms ease-in-out, transform 100ms;
		padding: 0.7rem;

		.card-image {
			width: 100%;
			height: 13rem;
			overflow: hidden;
			border-radius: 1em;
			transition: all 200ms ease-in-out;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center center !important;
				transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
			}
		}

		.card-content {
			padding: 1rem 0.5rem 0.5rem 0.5rem;
		}

		.card-info {
			a {
				text-decoration: none;
				transition: 0.2s;
				@include hover {
					filter: brightness(0.9);
				}
			}

			.card-title {
				font-size: 1.2rem;
				color: $clr-fg-2;
				font-family: $title-secondary-font;
				font-weight: 500;
			}

			.card-text {
				margin-block: 0.7rem;
				font-size: small;
				line-height: 1.1rem;
				color: $clr-fg-4;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
			}

			.tags {
				position: absolute;
				bottom: 1rem;
				display: flex;
				flex-wrap: wrap;
				margin-top: 0.5rem;
				gap: 0.5rem;
				font-size: 0.8rem;
				font-family: $ui-font;
				font-weight: 500;
				color: $clr-fg-4;

				.tag-link {
					display: flex;
					align-items: center;
					gap: 0.2rem;
					color: $clr-fg-4;
					border-radius: 1rem;
					background: lighten($clr-card, 8%);
					padding: 0.2rem 0.5rem;

					transition: 0.2s;
				}

				.tag-name {
					font-size: 0.8rem;
					font-family: $ui-font;
					font-weight: 500;
					color: $clr-fg-4;
				}
			}
			.actions {
				position: absolute;
				right: 1rem;
				bottom: 1rem;

				overflow: hidden;
				gap: 0.5rem;
				display: flex;

				.btn {
					overflow: hidden;

					aspect-ratio: 1;
					padding: 0.5em;
					border-radius: 0.5rem;

					background-color: var(--color);
					color: $clr-fg-2;

					font-size: 20px;
					cursor: pointer;
					@include hover {
						filter: brightness(0.8);
					}
				}
			}
		}

		@media (min-width: $tablet) {
			max-width: 420px;
		}

		@include hover {
			filter: brightness(1.1);
			// transform: translateY(-1%);
			box-shadow: 0px 4px 20px 5px transparentize($clr-bg-450, 0.8);

			.card-image {
				filter: brightness(0.9);
			}
		}
	}

	// @media screen and (max-width: $mobile) {
	// 	.card {
	// 		padding: 0.5rem;
	// 		background: none;
	// 	}

	// 	.card-image {
	// 		height: auto !important;
	// 		margin-inline: calc(-50vw + 50%);
	// 		width: 100vw !important;
	// 		border-radius: 0 !important;
	// 		height: auto !important;
	// 		max-height: 18rem;
	// 	}
	// }
</style>
