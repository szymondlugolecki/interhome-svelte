<script lang="ts">
	// General
	// Lobby

	// Tachografs
	import tachographImages from '$lib/images/tachographs';
	import lobbyImages from '$lib/images/lobby';

	import MasonryGallery from './(components)/masonry-gallery.svelte';

	const items = [...lobbyImages, ...tachographImages];
</script>

<div class="flex flex-col items-center min-h-screen pt-24 pb-12 gap-y-6">
	<!-- <h1 class="text-4xl font-bold tracking-tight scroll-m-20 lg:text-5xl">Galeria</h1> -->

	<div class="w-full px-8 max-w-7xl">
		<MasonryGallery {items} />
	</div>
</div>
