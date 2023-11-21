<script lang="ts">
	import BackgroundImage from '$assets/bg2.png?w=1500;1000&format=avif;webp;jpg&as=picture';
	import AldoImage from '$assets/aldo.png?w=750&format=avif;webp;jpg&as=picture';
	import AldoCEOImage from '$assets/aldo1.webp?w=500&format=avif;webp;jpg&as=picture';
	import Customer1Image from '$assets/cristianoronaldo.jpeg?w=200&format=avif;webp;jpg&as=picture';
	import Customer2Image from '$assets/robertlewandowski.jpg?w=200&format=avif;webp;jpg&as=picture';
	import Image from '$components/custom/Util/image.svelte';
	import { services } from '$lib/constants';
	import Button from '$components/ui/button/button.svelte';
	import ServiceImage from '$routes/(components)/service-image.svelte';
	import OpenStatus from './(components)/open-status.svelte';
	import { onMount } from 'svelte';
	import Review from './(components)/review.svelte';

	import { Loader } from '@googlemaps/js-api-loader';
	import { env } from '$env/dynamic/public';
	import OfferServiceDescription from './(components)/offer-service-description.svelte';

	const serviceEntries = Object.entries(services) as [
		keyof typeof services,
		(typeof services)[keyof typeof services]
	][];

	let time = new Date();

	const openingHours = {
		motorization: {
			week: {
				opens: 8,
				closes: 17
			},
			saturday: {
				opens: null,
				closes: null
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

		if (service === 'motorization' && dayOfTheWeek > 5) {
			return false;
		}

		const { opens, closes } = openingHours[service][dayOfTheWeek <= 5 ? 'week' : 'saturday'];

		if (!opens || !closes) {
			return false;
		}

		return hour >= opens && hour < closes;
	};

	const formatHour = (hour: number | null) => {
		if (!hour) return '';
		return `${hour}:00`;
	};
</script>

<svelte:head>
	<title>Start • Interhome</title>
	<meta name="description" content="Strona startowa Interhome" />
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
		class="relative flex flex-col items-center justify-center h-screen max-w-2xl px-0 mx-auto text-center gap-y-1.5"
	>
		<h1
			class="text-5xl font-bold tracking-tight text-white uppercase sm:text-7xl animate__bounceIn"
		>
			Interhome
		</h1>
		<div class="text-2xl font-semibold text-white sm:text-3xl animate__fadeIn">
			Centrum Motoryzacji
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
	class="scroll-m-20 flex flex-col items-center justify-start w-full [&>*:nth-child(odd)]:bg-background/50 [&>*:nth-child(even)]:bg-background py-6"
>
	<div class="w-full py-6 text-center sm:py-16 bg-background/50">
		<h2 class="text-3xl font-medium">Nasza oferta</h2>
	</div>
	{#each serviceEntries as [service, data]}
		<div class="flex justify-center w-full group/service">
			<div
				class="grid w-full grid-cols-1 px-8 py-6 transition-colors justify-items-center sm:py-12 lg:grid-cols-2 max-w-7xl rounded-3xl gap-x-16 gap-y-4"
			>
				<ServiceImage {service} />
				<div class="flex flex-col py-2 gap-y-4 max-w-[28rem] lg:max-w-none">
					<dl class="flex flex-col gap-y-2">
						<dt class="text-lg font-medium">{data.label}</dt>
						<dd class="text-sm first-letter:text-base">
							<OfferServiceDescription {service} />
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

<section
	class="flex justify-center w-full px-8 py-24 overflow-hidden scroll-m-20 isolate sm:py-32 lg:px-8"
	id="godziny-otwarcia"
>
	<div class="w-full max-w-7xl">
		<div class="w-full py-12 text-center sm:py-24 bg-background/50">
			<h3 class="text-3xl font-medium">Godziny otwarcia</h3>
		</div>
		<div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-y-12">
			<dl class="flex flex-col text-center sm:text-start gap-y-3">
				<dt class="text-2xl font-medium">
					<OpenStatus open={motorizationOpen} />
					Centrum motoryzacji
				</dt>
				<dd class="text-sm text-muted-foreground">
					Poniedziałek - Piątek: {formatHour(openingHours.motorization.week.opens)} - {formatHour(
						openingHours.motorization.week.closes
					)}
				</dd>
			</dl>
			<dl class="flex flex-col text-center gap-y-3 sm:text-start">
				<dt class="text-2xl font-medium">
					<OpenStatus open={stationOpen} />
					Stacja kontroli pojazdów
				</dt>
				<dd class="text-sm text-muted-foreground">
					Poniedziałek - Piątek: {formatHour(openingHours.station.week.opens)} - {formatHour(
						openingHours.station.week.closes
					)}
					<br />
					Sobota: {formatHour(openingHours.station.saturday.opens)} - {formatHour(
						openingHours.station.saturday.closes
					)}
				</dd>
			</dl>
		</div>
	</div>
</section>

<!-- Reviews -->
<section
	class="flex flex-col items-center w-full px-8 py-16 text-center scroll-m-20 gap-y-6 sm:py-24 bg-background/50"
	id="opinie"
>
	<div class="flex flex-col items-center justify-center gap-y-6 lg:px-8 max-w-7xl">
		<div class="text-center">
			<h4 class="text-3xl font-medium">Opinie klientów</h4>
		</div>
		<div class="grid items-start grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
			<Review
				review="Zleciłem przegląd auta z wymianą oleju silnikowego i kompletu filtrów w Audi Q7.
			Usługa wykonana sprawnie i profesjonalnie. Polecam."
				name="Janusz"
				class=""
			/>

			<Review
				review="Z moim samochodem zwiedziłem 3 warsztaty i nikt nie mógł zdiagnozować usterki w instalacji elektrycznej.
			W Interhome elektryk poradził sobie z problemem w dwie godziny."
				name="Rafał"
			/>

			<Review
				review="Miałem problem ze stukami w przednim zawieszeniu mojego samochodu. Zostałem umówiony
			na kolejny dzień. Po kilku godzinach usterka została naprawiona i tego samego dnia
			mogłem odebrać auto. Firma godna polecenia."
				name="Piotr"
				class="sm:col-span-2"
			/>
		</div>
	</div>
</section>

<!-- Contact -->
<!-- <section
	class="flex flex-col items-center w-full px-8 py-10 text-center scroll-auto scroll-m-20 gap-y-6 sm:py-16 bg-background/50"
	id="kontakt"
>
	<h5 class="text-3xl font-medium">Dane kontaktowe</h5>

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
</section> -->
