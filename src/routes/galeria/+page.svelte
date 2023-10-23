<script lang="ts">
	import PhotoSwipeGallery from 'svelte-photoswipe';
	import type { GalleryItem } from 'svelte-photoswipe';
	const images: GalleryItem[] = [];

	for (let q = 0; q < 9; q++) {
		images.push({
			src: `/galeria/${q + 1}.jpg`,
			width: 1500,
			height: 1000,
			alt: `Zdjęcie ${q + 1}`,
			cropped: true,
			thumbnail: { src: `/galeria/${q + 1}.jpg`, width: 450, height: 300 }
		});
	}

	// console.log('images', images);
</script>

<div class="flex justify-center min-h-screen pt-24 pb-12">
	<div class="px-4 gap-y-6 max-w-7xl sm:px-6 lg:px-8">
		<PhotoSwipeGallery {images} styling="flex" />
	</div>
</div>
