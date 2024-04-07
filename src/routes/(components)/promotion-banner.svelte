<script lang="ts">
	import Image from '$components/custom/Util/image.svelte';
	import Button from '$components/ui/button/button.svelte';
	import { fade } from 'svelte/transition';
	import Banner from '$assets/baner.jpg?w=1000&format=avif;webp;jpg&as=picture';
	import { onNavigate } from '$app/navigation';

	let visible = false;
	const timeout = setTimeout(() => {
		visible = true;
	}, 1000);

	onNavigate(() => {
		console.log('navigating');
		clearTimeout(timeout);
	});
</script>

{#if visible}
	<div
		in:fade={{
			duration: 750,
			delay: 0
		}}
		out:fade={{
			duration: 300,
			delay: 0
		}}
		class="relative shadow-xl banner"
	>
		<div class="w-72 sm:w-[550px]">
			<Image
				class="object-cover object-center w-full h-full"
				loading="eager"
				meta={Banner}
				alt="baner reklamowy"
			/>
		</div>
		<!-- <button
			on:click={() => (visible = false)}
			class="absolute top-0 right-0 p-1 font-bold text-white sm:p-2 sm:text-lg">Zamknij</button
		> -->
		<button
			on:click={() => (visible = false)}
			class="absolute bottom-0 right-0 px-2 py-2 text-lg font-bold text-white">Zamknij</button
		>
	</div>
{/if}

<style>
	.banner {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
