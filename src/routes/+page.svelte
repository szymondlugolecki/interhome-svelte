<script lang="ts">
	import BackgroundImage from '$assets/bg2.png?w=1500;1000&format=avif;webp;jpg&as=picture';
	import AldoImage from '$assets/aldo.png?w=750&format=avif;webp;jpg&as=picture';
	import AldoCEOImage from '$assets/aldo1.webp?w=500&format=avif;webp;jpg&as=picture';
	import Image from '$components/custom/Util/image.svelte';
	import { services } from '$lib/constants';
	import Button from '$components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import ServiceImage from '$routes/(components)/service-image.svelte';
	import OpenStatus from './(components)/open-status.svelte';
	import { onMount } from 'svelte';

	const typeSafeServices = Object.entries(services) as [
		keyof typeof services,
		(typeof services)[keyof typeof services]
	][];

	const openingHours = {
		motorization: {
			week: {
				opens: 8,
				closes: 16 // 17
			},
			saturday: {
				opens: 8,
				closes: 14
			}
		},
		station: {
			week: {
				opens: 7,
				closes: 18
			},
			saturday: {
				opens: 7,
				closes: 14
			}
		}
	};

	let time = new Date();

	onMount(() => {
		// Update the time every minute
		const interval = setInterval(() => {
			time = new Date();
		}, 1000 * 60);

		return () => {
			clearInterval(interval);
		};
	});

	$: motorizationOpen = isOpen(time, 'motorization');
	$: stationOpen = isOpen(time, 'station');

	const isOpen = (time: Date, service: keyof typeof openingHours) => {
		const dayOfTheWeek = time.getDay();
		const hour = time.getHours();

		// Sunday
		if (dayOfTheWeek === 0) {
			return false;
		}

		const { opens, closes } = openingHours[service][dayOfTheWeek <= 5 ? 'week' : 'saturday'];

		return hour >= opens && hour < closes;
	};
</script>

<svelte:head>
	<title>Interhome</title>
	<meta name="description" content="Interhome" />
</svelte:head>

<!-- Landing Page -->
<section class="relative" id="start">
	<div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
		<Image
			class="w-full h-full brightness-[.4] object-cover object-center -z-50"
			loading="eager"
			meta={BackgroundImage}
			alt="tło strony, warsztat samochodowy"
		/>
	</div>
	<div
		class="relative flex flex-col items-center justify-center h-screen max-w-2xl px-0 mx-auto text-center gap-y-1"
	>
		<h1 class="text-5xl font-bold tracking-tight text-white uppercase sm:text-7xl">Interhome</h1>
		<p class="max-w-sm px-2 text-lg text-white sm:text-xl">
			Centrum Motoryzacji. Mechanika. Hamownia. Regeneracja turbosprężarek
		</p>
	</div>
</section>

<section
	class="flex justify-center w-full px-8 py-24 overflow-hidden isolate sm:py-32 lg:px-8"
	id="godziny-otwarcia"
>
	<div class="w-full max-w-7xl">
		<div class="w-full py-10 text-center sm:py-16 bg-background/50">
			<h2 class="text-3xl font-medium">Godziny otwarcia</h2>
		</div>
		<div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-y-12">
			<dl class="flex flex-col gap-y-3">
				<OpenStatus open={motorizationOpen} />
				<dt class="text-lg font-medium">Centrum motoryzacji</dt>
				<dd>
					<p class="text-sm text-muted-foreground">
						Poniedziałek - Piątek: 8:00 - 17:00
						<br />
						Sobota: 8:00 - 14:00
					</p>
				</dd>
			</dl>
			<dl class="flex flex-col gap-y-3">
				<OpenStatus open={stationOpen} />
				<dt class="text-lg font-medium">Stacja kontroli pojazdów</dt>
				<dd>
					<p class="text-sm text-muted-foreground">
						Poniedziałek - Piątek: 7:00 - 18:00
						<br />
						Sobota: 7:00 - 14:00
					</p>
				</dd>
			</dl>
		</div>
	</div>
</section>

<!-- <section class="relative px-8 py-24 overflow-hidden isolate sm:py-32 lg:px-8" id="zaswiadczenie">
	<div class="absolute inset-0 -z-10 opacity-10" />
	<div class="max-w-2xl mx-auto lg:max-w-4xl">
		<div class="mx-auto overflow-hidden w-52">
			<Image
				class="object-cover object-center w-full h-full"
				loading="lazy"
				meta={AldoImage}
				alt="ALDO Logo"
			/>
		</div>
		<figure class="mt-10">
			<blockquote class="text-xl font-semibold leading-8 text-centersm:text-2xl sm:leading-9">
				<p>
					“Współpraca z Interhome to czysta przyjemność. Nigdy nie spotkałem się z tak profesjonalną
					firmą, która zaawansowaniem technologicznym przywyższa nawet takich gigantów jak Apple i
					Microsoft.”
				</p>
			</blockquote>
			<figcaption class="mt-10">
				<div class="mx-auto overflow-hidden rounded-full square-16">
					<Image
						class="object-cover object-center w-full h-full scale-[3.2] translate-x-3 translate-y-[18px]"
						loading="lazy"
						meta={AldoCEOImage}
						alt="Leszek Długołęcki"
					/>
				</div>
				<div class="flex items-center justify-center mt-4 space-x-3 text-base">
					<div class="font-semibold">Leszek Długołęcki</div>
					<svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-primary">
						<circle cx="1" cy="1" r="1" />
					</svg>
					<div class="text-muted-foreground">Współwłaściciel ALDO</div>
				</div>
			</figcaption>
		</figure>
	</div>
</section> -->

<!-- Offer -->
<section
	id="oferta"
	class="flex flex-col items-center justify-start w-full [&>*:nth-child(odd)]:bg-background/50 [&>*:nth-child(even)]:bg-background"
>
	<div class="w-full py-6 text-center sm:py-16 bg-background/50">
		<h3 class="text-3xl font-medium">Nasza oferta</h3>
	</div>
	{#each typeSafeServices as [service, data]}
		<div class="flex justify-center w-full group/service">
			<div
				class="grid w-full grid-cols-1 px-8 py-6 transition-colors sm:py-12 lg:grid-cols-2 max-w-7xl rounded-3xl gap-x-16 gap-y-4"
			>
				<ServiceImage {service} />
				<div class="flex flex-col py-2 gap-y-4 max-w-[28rem] lg:max-w-none">
					<dl class="flex flex-col gap-y-2">
						<dt class="text-lg font-medium">{data.label}</dt>
						<dd class="text-sm first-letter:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in massa mauris. Nullam
							porta dolor et efficitur lobortis. Praesent libero ex, bibendum et magna et, iaculis
							molestie leo. Duis vestibulum lorem eget sollicitudin euismod. Class aptent taciti
							sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin luctus,
							metus sed suscipit vestibulum, ligula sem auctor mauris, vulputate malesuada turpis
							leo et lectus. Donec tristique, nibh vel vehicula lobortis, turpis purus bibendum
							odio, ut lacinia velit metus elementum neque.
						</dd>
					</dl>
					<div class="">
						<Button variant="outline" href={data.url}>Dowiedz się więcej</Button>
					</div>
				</div>
			</div>
		</div>
	{/each}
</section>

<!-- Contact -->
<section
	class="flex flex-col items-center w-full py-10 text-center gap-y-6 sm:py-16 bg-background/50"
	id="kontakt"
>
	<h4 class="text-3xl font-medium">Dane kontaktowe</h4>

	<address class="flex flex-col sm:flex-row gap-x-24 gap-y-6">
		<div class="flex flex-col text-left">
			<span class="font-medium">Interhome Centrum Motoryzacji</span>
			<span>Mazowiecka 6</span>
			<span>06-400 Ciechanów</span>
		</div>
		<div class="flex flex-col text-left">
			<span class="font-medium">Kontakt</span>
			<span>tel/fax: <a href="tel:+48236721439">23 672 14 39</a></span>
			<span>tel: <a href="tel:+48236723029">23 672 30 29</a></span>
			<span><a href="mailto:office@interhome.com.pl"> office@interhome.com.pl </a></span>
		</div>
	</address>
</section>
