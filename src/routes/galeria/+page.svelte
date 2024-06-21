<script lang="ts">
	// Images
	import generalImages from '$lib/images/general';
	import lobbyImages from '$lib/images/lobby';
	import newImages from '$lib/images/new-images';
	import vehicleMechanicsImages from '$lib/images/vehicle-mechanics';
	import turbochargersImages from '$lib/images/turbochargers';
	import inspectionStationImages from '$lib/images/inspection-station';
	import tachographImages from '$lib/images/tachographs';

	import MasonryGallery from './(components)/masonry-gallery.svelte';

	const items = [
		...generalImages,
		...lobbyImages,
		...newImages,
		...vehicleMechanicsImages,
		...turbochargersImages,
		...inspectionStationImages,
		...tachographImages
	];
</script>

<svelte:head>
	<title>Galeria • Interhome</title>
	<meta name="description" content="Zdjęcia z placówki Interhome." />
</svelte:head>

<div class="flex flex-col items-center min-h-screen pt-24 pb-12 gap-y-6">
	<!-- <h1 class="text-4xl font-bold tracking-tight scroll-m-20 lg:text-5xl">Galeria</h1> -->

	<div class="w-full px-8 max-w-7xl">
		<MasonryGallery {items} />
	</div>
</div>
