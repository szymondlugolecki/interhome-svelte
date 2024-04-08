<script lang="ts">
	import Image from '$components/custom/Util/image.svelte';
	import Button from '$components/ui/button/button.svelte';
	import { fade } from 'svelte/transition';
	import Banner from '$assets/baner.jpg?w=1000&format=avif;webp;jpg&as=picture';
	import { onNavigate } from '$app/navigation';
	import { X } from 'lucide-svelte';
	import * as Drawer from '$lib/components/ui/drawer';

	export let visible: boolean;
	const timeout = setTimeout(() => {
		visible = true;
	}, 1000);

	onNavigate(() => {
		console.log('navigating');
		clearTimeout(timeout);
	});
</script>

<!-- {#if visible} -->
<Drawer.Root bind:open={visible} preventScroll={false}>
	<Drawer.Content class="text-foreground bg-background">
		<!-- <Drawer.Header>
			<Drawer.Title>Oferta okresowa</Drawer.Title>
			<Drawer.Description>Ta oferta jest ograniczona czasowo</Drawer.Description>
		</Drawer.Header> -->

		<div class="flex items-center justify-center w-full pt-4">
			<div class="w-[400px]">
				<Image
					class="object-cover object-center w-full h-full"
					loading="eager"
					meta={Banner}
					alt="baner reklamowy"
				/>
			</div>
		</div>
		<!-- <button
			on:click={() => (visible = false)}
			class="absolute top-0 right-0 p-2 font-bold text-white sm:p-2 sm:text-lg"><X /></button
		>
		<button
			on:click={() => (visible = false)}
			class="absolute bottom-0 right-0 px-2 py-2 text-lg font-bold text-white">Zamknij</button
		> -->

		<Drawer.Footer class="flex items-center justify-center w-full px-2">
			<Drawer.Close
				class="py-2 font-semibold rounded-md bg-foreground text-background max-w-[400px] w-full"
				>Zamknij</Drawer.Close
			>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
