<script lang="ts">
	import OutletContactInfo from './(components)/outlet-contact-info.svelte';

	// import { Loader } from '@googlemaps/js-api-loader';
	import { Separator } from '$lib/components/ui/separator';

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
	<meta name="description" content="Kontakty do poszczególnych działów" />
</svelte:head>

<div class="flex flex-col items-center w-full min-h-screen pt-24">
	<div class="flex flex-col w-full px-8 sm:px-12 lg:max-w-7xl gap-y-12">
		<main
			class="flex flex-col items-center w-full text-center scroll-auto scroll-m-20 gap-y-6 bg-background/50"
			id="kontakt"
		>
			<h1 class="text-4xl font-medium">Dane kontaktowe</h1>

			<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
				{#each outletContactInfo as { title, phones }}
					<OutletContactInfo {title} {phones} />
				{/each}
			</div>

			<div class="w-full max-w-4xl">
				<Separator />
			</div>

			<!-- Map -->
			<section
				class="flex flex-col items-center w-full pb-10 text-center gap-y-6 sm:pb-16 bg-background/50"
				id="address"
			>
				<div class="flex flex-col gap-y-3">
					<h2 class="text-3xl font-medium">Gdzie nas znaleźć</h2>
					<address id="adres" class="flex flex-col text-left">
						<span class="font-medium">Interhome Centrum Motoryzacji</span>
						<span>Mazowiecka 6</span>
						<span>06-400 Ciechanów</span>
					</address>
				</div>
				<div class="flex justify-center w-full overflow-x-auto rounded-lg">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.1422568155535!2d20.595154701945095!3d52.8672993185738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c2ec6a598dfe7%3A0x1566545c9bd56f57!2sInterhome%20Centrum%20Motoryzacji%20Mechanika%20Hamownia%20Regeneracja%20Turbospr%C4%99%C5%BCarek!5e0!3m2!1spl!2spl!4v1716888515155!5m2!1spl!2spl"
						width="1216"
						height="450"
						style="border:0;"
						title="Mapa lokalizacji Interhome"
						allowfullscreen={true}
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					/>
				</div>
			</section>
		</main>
	</div>
</div>
