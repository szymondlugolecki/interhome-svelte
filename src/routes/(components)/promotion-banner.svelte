<script lang="ts">
	import Image from '$components/custom/Util/image.svelte';
	import Banner from '$assets/banners/zima.png?w=500&format=avif;webp;jpg&as=picture';
	import * as Drawer from '$lib/components/ui/drawer';

	export let showPromotionBanner: boolean;
</script>

<!-- {#if showPromotionBanner} -->
<Drawer.Root bind:open={showPromotionBanner} preventScroll={false}>
	<Drawer.Content class="text-foreground bg-background" aria-label="Baner promocyjny">
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
			on:click={() => (showPromotionBanner = false)}
			class="absolute top-0 right-0 p-2 font-bold text-white sm:p-2 sm:text-lg"><X /></button
		>
		<button
			on:click={() => (showPromotionBanner = false)}
			class="absolute bottom-0 right-0 px-2 py-2 text-lg font-bold text-white">Zamknij</button
		> -->

		<!-- max-w-[280px] min-[320px]:max-w-[310px] min-[500px]:max-w-[400px] sm:max-w-[450px] -->

		<Drawer.Footer class="flex items-center justify-center w-full px-4">
			<Drawer.Close
				class="py-2 font-semibold rounded-md bg-foreground text-background max-w-[400px] w-full"
				>Zamknij</Drawer.Close
			>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
