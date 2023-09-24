<script lang="ts">
	import BackgroundImage from '$assets/bg2.png?w=1500;1000&format=avif;webp;jpg&as=picture';
	import AldoImage from '$assets/aldo.png?w=750&format=avif;webp;jpg&as=picture';
	import AldoCEOImage from '$assets/aldo1.webp?w=500&format=avif;webp;jpg&as=picture';
	import Image from '$components/custom/Util/image.svelte';
	import { services } from '$lib/constants';
	import Button from '$components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import ServiceImage from '$routes/(components)/service-image.svelte';

	const typeSafeServices = Object.entries(services) as [
		keyof typeof services,
		(typeof services)[keyof typeof services]
	][];
</script>

<svelte:head>
	<title>Interhome</title>
	<meta name="description" content="Interhome" />
</svelte:head>

<!-- Landing Page -->
<div class="relative" id="start">
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
</div>

<section class="relative px-8 py-24 overflow-hidden isolate sm:py-32 lg:px-8" id="zaswiadczenie">
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
</section>

<!-- Offer -->
<section
	id="oferta"
	class="flex flex-col items-center justify-start w-full gap-y-12 [&>*:nth-child(odd)]:bg-background/50 [&>*:nth-child(even)]:bg-background"
>
	<div class="w-full py-10 text-center sm:py-16 bg-background/50">
		<h2 class="text-3xl font-medium">Nasza oferta</h2>
	</div>
	{#each typeSafeServices as [service, data]}
		<div class="flex justify-center w-full group/service">
			<div
				class="grid w-full grid-cols-1 px-8 py-12 transition-colors lg:grid-cols-2 max-w-7xl rounded-3xl gap-x-16 gap-y-4"
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
<section class="w-full py-10 text-center sm:py-16 bg-background/50" id="kontakt">
	<h3 class="text-3xl font-medium">Kontakt</h3>
	<div>
		<p class="text-sm text-muted-foreground">
			Interhome Centrum Motoryzacji
			<br />
			ul. Wrocławska 1
			<br />
			58-100 Świdnica
		</p>
		<p class="mt-4 text-sm text-muted-foreground">
			<a href="tel:+48717444444">+48 717 444 444</a>
			<br />
			<a
				href="mailto:
				&#105;&#110;&#102;&#111;&#064;&#105;&#110;&#116;&#101;&#114;&#104;&#111;&#109;&#101;&#046;&#112;&#108;
				&#064;&#105;&#110;&#116;&#101;&#114;&#104;&#111;&#109;&#101;&#046;&#112;&#108;
			">mail</a
			>
		</p>
	</div>
</section>
