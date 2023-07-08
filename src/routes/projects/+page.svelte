<script>
	import ProjectsGrid from '$lib/projects/ProjectsGrid.svelte';
	import { onMount } from 'svelte';

	import { db } from '$lib/firebase';
	import { doc, getDoc } from "firebase/firestore";


	let latestProjects = [];
	

	const docRef = doc(db, "Data", "projects_screen");
	onMount(async () => {
		try {
			const docSnapshot =  await getDoc(docRef);
			if (docSnapshot.exists) {
				latestProjects = Object.values(latestProjects = docSnapshot.data()['projects']);
				
				latestProjects.forEach((post, index) => {
					post['id'] = Object.keys(docSnapshot.data()['projects'])[index];
				});

				latestProjects = latestProjects.sort((a, b) => (a.order > b.order) ? 1 : -1)

				
				
			} else {
				console.log('Document not found');
			}
		} catch (error) {
			console.error('Error fetching Firestore document:', error);
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
