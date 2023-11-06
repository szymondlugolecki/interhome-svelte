<script lang="ts">
	import type { BiggerPictureInstance } from 'bigger-picture';
	import { onMount } from 'svelte';
	import { masonry, loadBp } from '$lib/utils';

	// image data
	export let items: any[] = [];

	// initializes in onMount so it runs only in browser
	let bp: BiggerPictureInstance;

	/** click handler */
	function openBiggerPicture(e: Event) {
		e.preventDefault();
		const target = e.currentTarget as HTMLAnchorElement;
		bp.open({
			items: target.parentElement!.children,
			el: target
		});
	}

	onMount(async () => {
		// use onMount to define variable so it runs only in the browser
		bp = await loadBp();
	});
</script>

<section use:masonry>
	{#each items as [image, thumbnail]}
		<a
			on:click={openBiggerPicture}
			href={image.src}
			data-img={image.src}
			data-thumb={thumbnail.src}
			data-height={image.height}
			data-width={image.width}
			data-alt="Zdjęcie do galerii"
		>
			<img src={thumbnail.src} alt="Miniaturka zdjęcia z galerii" />
		</a>
	{/each}
</section>

<style>
	img {
		max-width: 100%;
		vertical-align: bottom;
	}
</style>
