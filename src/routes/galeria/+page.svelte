<script lang="ts">
	import BiggerPicture from 'bigger-picture/svelte';

	// General

	// Lobby
	// import lobby_1 from '$assets/services/legalizacja-tachografow/main.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';

	// Tachografs
	import tachografs_1 from '$assets/services/legalizacja-tachografow/7266.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_2 from '$assets/services/legalizacja-tachografow/7270.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_3 from '$assets/services/legalizacja-tachografow/7277.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_4 from '$assets/services/legalizacja-tachografow/7295.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_5 from '$assets/services/legalizacja-tachografow/7300.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_6 from '$assets/services/legalizacja-tachografow/7314.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_7 from '$assets/services/legalizacja-tachografow/7316.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_8 from '$assets/services/legalizacja-tachografow/7318.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_9 from '$assets/services/legalizacja-tachografow/main.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_10 from '$assets/services/legalizacja-tachografow/7322.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_11 from '$assets/services/legalizacja-tachografow/7345.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import tachografs_12 from '$assets/services/legalizacja-tachografow/7349.jpg?w=2000;500&format=webp&as=metadata&imagetools-gallery';
	import MasonryGallery from './(components)/masonry-gallery.svelte';

	const items = [
		tachografs_1,
		tachografs_2,
		tachografs_3,
		tachografs_4,
		tachografs_5,
		tachografs_6,
		tachografs_7,
		tachografs_8,
		tachografs_9,
		tachografs_10,
		tachografs_11,
		tachografs_12
	];
</script>

<div class="flex flex-col items-center min-h-screen pt-24 pb-12 gap-y-6">
	<!-- <h1 class="text-4xl font-bold tracking-tight scroll-m-20 lg:text-5xl">Galeria</h1> -->

	<div class="w-full px-8 max-w-7xl">
		<MasonryGallery {items} />
	</div>
</div>
