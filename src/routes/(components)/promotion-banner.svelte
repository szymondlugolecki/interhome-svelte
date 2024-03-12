<script lang="ts">
	import Image from '$components/custom/Util/image.svelte';
	import Banner from '$assets/banner.jpg?w=750&format=avif;webp;jpg&as=picture';
	import Button from '$components/ui/button/button.svelte';
	import { fade } from 'svelte/transition';

	let visible = false;
	setTimeout(() => {
		visible = true;
	}, 1000);
</script>

<!-- animate-in duration-1000 delay-1000 -->

{#if visible}
	<section
		class="sticky bottom-5 left-0 right-0 w-full px-2.5 sm:px-5 pb-1.5 z-40 overflow-hidden"
		in:fade={{
			duration: 1000,
			delay: 1000
		}}
		out:fade={{
			duration: 300,
			delay: 0
		}}
	>
		<div
			class="w-full h-full rounded-md flex sm:flex-row flex-col gap-x-6 gap-y-3 px-2.5 sm:px-5 py-3 shadow-lg overflow-hidden bg-background"
		>
			<!-- <div class="hidden sm:flex absolute -top-0.5 right-0.5 sm:top-2 sm:right-2">
				<p class="text-red-500 font-bold text-lg">Limitowana oferta!</p>
			</div> -->
			<div class="flex-1 flex flex-col justify-start gap-y-2 sm:gap-y-4 h-full">
				<div class="">
					<h1
						class="scroll-m-20 border-b pb-1 sm:pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0"
					>
						Przygotujemy Twoje auto na wiosnę
					</h1>
				</div>
				<div>
					<ul class="pl-6 list-disc gap-y-2 columns-3 sm:text-base text-sm">
						<li>Wymiana opon</li>
						<li>Konserwacja opon</li>
						<li>Komputerowe ustawienie geometrii kół 3D</li>
						<li>Przechowalnia opon</li>
						<li>Przegląd klimatyzacji</li>
						<li>Wymiana czynnika i oleju w klimatyzacji</li>
						<li>Odgrzybianie klimatyzacji</li>
						<li>Sprawdzanie szczelności układu klimatyzacji</li>
					</ul>
				</div>
				<!-- <div class="absolute left-0 top-0 bottom-0 opacity-75 -ml-5 z-10">
				<Image
					meta={Banner}
					alt="tło baneru promocyjnego"
					sizes="500px"
					width="500px"
					height="147px"
				/>
			</div> -->
			</div>
			<div class="flex flex-col justify-center sm:w-auto flex-grow max-w-[128px]">
				<Button class="w-[120px]" variant="default" on:click={() => (visible = false)}
					>Zamknij</Button
				>
			</div>
		</div>
	</section>
{/if}
