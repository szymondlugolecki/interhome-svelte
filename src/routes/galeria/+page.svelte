<script lang="ts">
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import PhotoSwipe from 'photoswipe';
	import 'photoswipe/style.css';

	// import BackgroundImage from '$assets/bg2.png?w=1500;1000&format=avif;webp;jpg&as=picture';
	// import Image from '$components/custom/Util/image.svelte';

	let galleryID = 'gallery';

	const lightbox = new PhotoSwipeLightbox({
		gallery: '#gallery--no-dynamic-import',
		children: 'a',
		pswpModule: PhotoSwipe
	});

	lightbox.init();

	interface Image {
		thumbnailURL: string;
		largeURL: string;
		width: number;
		height: number;
	}

	let images: Image[] = [];
</script>

<div class="pswp-gallery" id={galleryID}>
	{#each images as image}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={image.thumbnailURL} alt="" />
		</a>
	{/each}
</div>
