<script lang="ts">
	// import BackgroundImage from '$assets/bg3.jpg?w=1000&format=avif;webp;jpg&as=picture';
	import BackgroundImage1 from '$assets/about_us_1.jpg?w=2000&format=avif;webp;jpg&as=picture';
	import BackgroundImage2 from '$assets/about_us_2.jpg?w=2000&format=avif;webp;jpg&as=picture';
	import BackgroundImage3 from '$assets/bg3.jpg?w=1000&format=avif;webp;jpg&as=picture';

	import Image from '$components/custom/Util/image.svelte';
	import { services } from '$lib/constants';
</script>

<svelte:head>
	<title>O nas • Interhome</title>
	<meta name="description" content="Nasza historia i wartości." />
</svelte:head>

<!-- <div class="flex justify-center w-full min-h-screen">
	<div class="flex w-full max-w-3xl px-8 pt-24 pb-12 sm:pb-24 sm:px-12 lg:max-w-7xl gap-x-12">
		<div class="flex flex-col flex-1 gap-y-6">
			<div
				class="flex justify-center w-full overflow-hidden duration-700 h-52 sm:h-80 md:h-96 animate-in fade-in-0 slide-in-from-top-48"
			>
				<Image
					class="object-scale-down object-center w-full h-auto xs:-translate-y-20 sm:-translate-y-10 lg:-translate-y-44 xl:-translate-y-52"
					loading="eager"
					meta={BackgroundImage1}
					alt="budynek Interhome"
				/>
			</div>
			<h1 class="text-4xl font-medium tracking-tight">O nas</h1>
			<p class="text-sm sm:text-base first-letter:text-xl">
				Firma Interhome Company Ltd. istnieje od 1991 roku. W 2000r. weszliśmy na rynek
				profesjonalnych usług motoryzacyjnych. Nasza kadra zarządzająca posiada szerokie
				doświadczenie w sektorze usług motoryzacyjnych, w tym regeneracji turbosprężarek.
				Kompetencje te pozwoliły nam szybko rozwinąć nową działalność i znacząco zwiększyć udział
				firmy w rynku. Obecnie jesteśmy postrzegani w skali powiatu i okolicy jako jeden z wiodących
				podmiotów wśród firm dostarczających usługi motoryzacyjne. Nasza strategia obejmuje min.
				ciągły monitoring dynamicznie rozwijającego się rynku samochodowego i dostosowywanie oferty
				do zmieniających się realiów tego rynku, co pozwala nam optymistycznie spoglądać w
				przyszłość - przyszłość profesjonalnych usług sektora motoryzacyjnego. Wiedza i
				doświadczenie zespołu pozwoliły naszej firmie na utrzymaniu standardu usług na niezmiennie
				wysokim poziomie, spełniającym oczekiwania naszych klientów. Szeroki zakres działalności
				daje możliwość zrealizowania różnego rodzaju usług związanych z pojazdem w jednym miejscu,
				bez straty cennego czasu. Dla klientów naszej firmy mamy do dyspozycji wykwalifikowaną i
				ciągle podnoszącą swoje kompetencje kadrę pracowników, która zapewnia szybką i fachową
				obsługę. <br /><br />Zapraszamy do współpracy
				<bold class="font-medium">Interhome Company LTD</bold> Ciechanów, ul. Mazowiecka 6
			</p>
			<div
				class="flex justify-center w-full overflow-hidden duration-700 h-52 sm:h-80 md:h-96 animate-in fade-in-0 slide-in-from-top-48"
			>
				<Image
					class="object-scale-down object-center w-full h-auto xs:-translate-y-20 sm:-translate-y-10 lg:-translate-y-44 xl:-translate-y-52"
					loading="eager"
					meta={BackgroundImage2}
					alt="warsztat Interhome"
				/>
			</div>
		</div>
	</div>
</div> -->

<div class="flex justify-center w-full min-h-screen pt-24 pb-12">
	<div class="max-w-3xl px-8 sm:px-12 lg:max-w-7xl">
		<div class="grid w-full grid-cols-1 grid-rows-2 gap-4 xl:grid-cols-3">
			<!-- <div class="flex w-full max-w-3xl px-8 pt-24 pb-12 sm:pb-24 sm:px-12 lg:max-w-7xl gap-x-12"> -->
			<div class="flex flex-col col-span-2 row-span-2 gap-y-4">
				<div class="flex flex-col flex-1 gap-y-3">
					<h1 class="text-4xl font-medium tracking-tight">O nas</h1>
					<p class="text-sm sm:text-base first-letter:text-xl">
						Firma Interhome Company Ltd. istnieje od 1991 roku. W 2000r. weszliśmy na rynek
						profesjonalnych usług motoryzacyjnych. Nasza kadra zarządzająca posiada szerokie
						doświadczenie w sektorze usług motoryzacyjnych, w tym regeneracji turbosprężarek.
						Kompetencje te pozwoliły nam szybko rozwinąć nową działalność i znacząco zwiększyć
						udział firmy w rynku. Obecnie jesteśmy postrzegani w skali powiatu i okolicy jako jeden
						z wiodących podmiotów wśród firm dostarczających usługi motoryzacyjne. Nasza strategia
						obejmuje min. ciągły monitoring dynamicznie rozwijającego się rynku samochodowego i
						dostosowywanie oferty do zmieniających się realiów tego rynku, co pozwala nam
						optymistycznie spoglądać w przyszłość - przyszłość profesjonalnych usług sektora
						motoryzacyjnego. Wiedza i doświadczenie zespołu pozwoliły naszej firmie na utrzymaniu
						standardu usług na niezmiennie wysokim poziomie, spełniającym oczekiwania naszych
						klientów. Szeroki zakres działalności daje możliwość zrealizowania różnego rodzaju usług
						związanych z pojazdem w jednym miejscu, bez straty cennego czasu. Dla klientów naszej
						firmy mamy do dyspozycji wykwalifikowaną i ciągle podnoszącą swoje kompetencje kadrę
						pracowników, która zapewnia szybką i fachową obsługę. <br /><br />Zapraszamy do
						współpracy
						<bold class="font-medium">Interhome Company LTD</bold> Ciechanów, ul. Mazowiecka 6.
					</p>
				</div>

				<div
					class="hidden overflow-hidden duration-700 animate-in fade-in-0 slide-in-from-top-48 h-96 xl:block"
				>
					<Image
						class="object-cover object-center w-full h-full"
						loading="eager"
						meta={BackgroundImage2}
						alt="warsztat firmy Interhome"
					/>
				</div>
			</div>

			<div
				class="row-span-2 w-[16rem] sm:w-[24rem] animate-in fade-in-0 slide-in-from-top-48 duration-700 overflow-hidden"
			>
				<Image
					class="object-cover object-center w-full h-full"
					loading="eager"
					meta={BackgroundImage3}
					alt="budynek firmy Interhome"
				/>
			</div>
		</div>
	</div>
</div>

<!-- <div
class="h-full hidden w-[32rem] lg:flex animate-in fade-in-0 slide-in-from-top-48 duration-700"
>
<Image
	class="object-cover object-center w-full h-full"
	loading="eager"
	meta={BackgroundImage}
	alt="tło strony, warsztat samochodowy"
/>
</div> -->
