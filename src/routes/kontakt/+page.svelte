<script lang="ts">
	import OutletContactInfo from './(components)/outlet-contact-info.svelte';
	import { onMount } from 'svelte';

	import { Loader } from '@googlemaps/js-api-loader';
	import { env } from '$env/dynamic/public';

	const mapOptions = {
		center: {
			lat: 52.866647,
			lng: 20.602871
		},
		zoom: 18
	} satisfies google.maps.MapOptions;

	onMount(() => {
		const loader = new Loader({
			apiKey: env.PUBLIC_GOOGLE_MAPS_API_KEY,
			version: 'weekly'
		});

		const mapElement = document.getElementById('mapa');

		if (mapElement) {
			loader
				.importLibrary('maps')
				.then(({ Map }) => {
					new Map(mapElement, mapOptions);
				})
				.catch((e) => {
					// do something
					console.error(e);
				});
		}
	});

	const outletContactInfo = [
		{
			title: 'Serwis aut',
			phones: ['23 672 14 39', '506 929 777']
		},
		{
			title: 'Turbosprężarki',
			phones: ['23 672 14 39', '506 929 777']
		},
		{
			title: 'Tachografy',
			phones: ['23 672 14 39', '573 412 312']
		},
		{
			title: 'Stacja diagnostyczna',
			phones: ['23 672 14 39', '573 674 103']
		}
	];
</script>

<svelte:head>
	<title>Kontakt • Interhome</title>
	<meta name="description" content="Interhome" />
</svelte:head>

<div class="flex flex-col w-full min-h-screen pt-24 gap-y-12">
	<main
		class="flex flex-col items-center w-full px-8 text-center scroll-auto scroll-m-20 gap-y-6 bg-background/50"
		id="kontakt"
	>
		<h1 class="text-4xl font-medium">Dane kontaktowe</h1>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			{#each outletContactInfo as { title, phones }}
				<OutletContactInfo {title} {phones} />
			{/each}
		</div>

		<!-- Map -->
		<section
			class="flex flex-col items-center w-full px-8 pb-10 text-center gap-y-6 sm:pb-16 bg-background/50"
			id="mapa"
		>
			<div class="flex justify-center w-full overflow-x-auto rounded-lg">
				<div id="mapa" class="w-[1216px] h-[450px]" />
				<!-- <iframe
					title="Mapa dojazdu do Interhome"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2408.542285868978!2d20.6028713!3d52.8666473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c2ec13d0ccdc1%3A0xd22ced45baf77712!2sMazowiecka%206%2C%2006-400%20Ciechan%C3%B3w!5e0!3m2!1spl!2spl!4v1689539529109!5m2!1spl!2spl"
					width="1216"
					height="450"
					class="border-0 rounded-lg"
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/> -->
			</div>
		</section>
	</main>
</div>
