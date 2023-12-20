<script lang="ts">
	import VehicleMechanicsImage from '$assets/services/mechanika-pojazdowa/main.jpg?w=750&format=avif;webp;jpg&as=picture';
	import TurbochargerRegenerationImage from '$assets/services/regeneracja-turbosprezarek/main.jpg?w=750&format=avif;webp;jpg&as=picture';
	import DistrictVehicleInspectionStationImage from '$assets/services/okregowa-stacja-kontroli-pojazdow/main.jpg?w=750&format=avif;webp;jpg&as=picture';
	import TachographsLegalizationImage from '$assets/services/legalizacja-tachografow/main.jpg?w=750&format=avif;webp;jpg&as=picture';
	import CarRentalImage from '$assets/services/wynajem-auta-zastepczego/main.jpeg?w=750&format=avif;webp;jpg&as=picture';
	import Image from '$components/custom/Util/image.svelte';
	import { services } from '$lib/constants';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	export let service: keyof typeof services;

	let isInView: boolean;
	const inViewEnter = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div
	class="overflow-hidden rounded-3xl w-full max-w-[28rem] xl:max-w-[34rem] lg:group-even/service:order-1 lg:group-odd/service:-order-1"
	use:inview={{ rootMargin: '10px', unobserveOnEnter: true }}
	on:inview_enter={inViewEnter}
>
	{#if isInView}
		<a
			href={services[service].url}
			class="group/image"
			in:fade={{
				duration: 300,
				delay: 50
			}}
		>
			{#if service === 'vehicle-mechanics'}
				<Image
					class="object-cover object-center w-full h-full transition-transform group-hover/service:scale-105"
					loading="lazy"
					meta={VehicleMechanicsImage}
					alt={services[service].label}
				/>
			{:else if service === 'turbocharger-regeneration'}
				<Image
					class="object-cover object-center w-full h-full transition-transform group-hover/service:scale-105"
					loading="lazy"
					meta={TurbochargerRegenerationImage}
					alt={services[service].label}
				/>
			{:else if service === 'district-vehicle-inspection-station'}
				<Image
					class="object-cover object-center w-full h-full transition-transform group-hover/service:scale-105"
					loading="lazy"
					meta={DistrictVehicleInspectionStationImage}
					alt={services[service].label}
				/>
			{:else if service === 'tachographs-legalization'}
				<Image
					class="object-cover object-center w-full h-full transition-transform group-hover/service:scale-105"
					loading="lazy"
					meta={TachographsLegalizationImage}
					alt={services[service].label}
				/>
			{:else if service === 'car-rental'}
				<Image
					class="object-cover object-center w-full h-full transition-transform group-hover/service:scale-95"
					loading="lazy"
					meta={CarRentalImage}
					alt={services[service].label}
				/>
			{/if}
		</a>
	{/if}
</div>
