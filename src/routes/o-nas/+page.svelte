<script lang="ts">
	// import BackgroundImage1 from '$assets/about-us/1.jpg?w=2000&format=avif;webp;jpg&as=picture';
	import BackgroundImage2 from '$assets/about-us/2.jpg?w=2000&format=avif;webp;jpg&as=picture';
	import BackgroundImage3 from '$assets/about-us/3.jpg?w=2000&format=avif;webp;jpg&as=picture';
	import BackgroundImage4 from '$assets/about-us/4.jpg?w=2000&format=avif;webp;jpg&as=picture';
	import BackgroundImage5 from '$assets/about-us/5.jpg?w=2000&format=avif;webp;jpg&as=picture';

	import Image from '$components/custom/Util/image.svelte';
</script>

<svelte:head>
	<title>O nas • Interhome</title>
	<meta name="description" content="Nasza historia i wartości." />
</svelte:head>

<div class="flex justify-center w-full min-h-screen pt-24 pb-12">
	<div class="max-w-3xl px-8 sm:px-12 lg:max-w-7xl">
		<div class="grid w-full grid-cols-1 grid-rows-2 gap-4 xl:grid-cols-3">
			<!-- <div class="flex w-full max-w-3xl px-8 pt-24 pb-12 sm:pb-24 sm:px-12 lg:max-w-7xl gap-x-12"> -->
			<div class="flex flex-col col-span-2 row-span-2 gap-y-4">
				<div class="flex flex-col flex-1 gap-y-3">
					<h1 class="text-4xl font-medium tracking-tight">O nas</h1>

					<h2 class="text-xl font-medium">Centrum Motoryzacyjne Interhome Ciechanów</h2>

					<p class="font-medium">
						Zlokalizowane w Ciechanowie Centrum Motoryzacyjne Interhome świadczy kompleksowe usługi
						motoryzacyjne od ponad 20 lat. Profesjonalizm pracowników, nowoczesne wyposażenie oraz
						solidność zaowocowały zaufaniem klientów.
					</p>

					<p class="p">
						Firma Interhome Company Ltd. istnieje od ponad 30 lat, została założona w 1991 roku. W
						2000 roku Interhome zadebiutował na rynku profesjonalnych usług motoryzacyjnych.
						Kompetencje pracowników oraz solidność usług pozwoliły szybko rozwinąć nową działalność
						i znacząco zwiększyć udział firmy w rynku. W regionie Interhome jest postrzegany jako
						wiodąca firma dostarczająca usługi motoryzacyjne. W roku ubiegłym marka Interhome
						znalazła się pod skrzydłami ALDO, wiodącego dilera maszyn rolniczych.
					</p>

					<p class="p-italic">
						- Interhome ma wieloletnie doświadczenie w branży motoryzacyjnej. Kompetencje firmy w
						sektorze usług serwisowych, napraw, a także regeneracji turbosprężarek przekładają się
						na zadowolenie klientów. To dla nas, nowych właścicieli firmy, także jest to
						priorytetem. Nasza lokalizacja w Ciechanowie, obok głównych tras komunikacyjnych,
						zapewnia doskonały dojazd. Zapraszamy więc do nas, ale także do odwiedzenia naszych
						stron internetowych: interhome.com.pl oraz naprawaturbo.pl – Andrzej Długołęcki,
						współwłaściciel ALDO.
					</p>

					<h3 class="text-xl font-medium">Serwis mechaniczny Interhome</h3>

					<p class="p">
						Sercem działalności Centrum Motoryzacyjnego Interhome jest serwis mechaniczny. Tu
						prowadzone są naprawy i przeglądy samochodów. Serwis Interhome świadczy kompleksowe
						usługi w zakresie napraw gwarancyjnych, ale także pogwarancyjnych samochodów wszystkich
						typów i marek, zarówno osobowych, dostawczych jak i ciężarowych. Wykonuje również
						naprawy główne. Wykwalifikowany zespół pracowników i odpowiednio wyposażony warsztat są
						gwarancją usług na najwyższym poziomie. Dla specjalistów Interhome żaden samochód nie ma
						tajemnic.
					</p>

					<p class="p-italic">
						- Z moim samochodem zwiedziłem 3 warsztaty i nikt nie mógł zdiagnozować usterki w
						instalacji elektrycznej. W Interhome elektryk poradził sobie z problemem w dwie godziny
						– pan Rafał z Ciechanowa.
					</p>

					<h4 class="text-xl font-medium">Regeneracja turbosprężarek Ciechanów</h4>

					<p class="p">
						Interhome specjalizuje się w regeneracji turbosprężarek. Stosuje przy tym najnowsze
						technologie, wszystko aby zapewnić najlepszą wydajność i niezawodność regenerowanych
						podzespołów. Firma zapewnia kompleksową regenerację turbosprężarek do samochodów
						osobowych, ciężarowych, maszyn rolniczych oraz budowlanych. Realizuje też naprawy nawet
						najpoważniejszych uszkodzeń, oferując znacząco tańsze rozwiązanie od zakupu nowego
						podzespołu.
					</p>

					<p class="p">
						Nowoczesny park maszynowy pozwala regenerować różne typy turbosprężarek. Interhome
						stosuje wyłącznie wysokiej jakości części zamienne renomowanych dostawców, aby zapewnić
						długotrwałą i efektywną pracę urządzeń. Po wykonanej naprawie każda turbosprężarka
						przechodzi testy na profesjonalnym analizatorze.
					</p>

					<p class="p-italic">
						- Pewność jakości świadczonych usług pozwala nam na zaoferowanie klientom 12-miesięcznej
						gwarancji bez limitu kilometrów. Klientom z Ciechanowa i okolic zapewniamy także
						bezpłatny odbiór oraz dostawę turbosprężarki po naprawie – zapewnia Norbert Piczak,
						dyrektor operacyjny Interhome.
					</p>

					<h5 class="text-xl font-medium">Stacja kontroli pojazdów Ciechanów</h5>

					<p class="p">
						Stacja Interhome prowadzi okresowe badania techniczne wszystkich pojazdów samochodowych.
						Diagności poddają kontroli: samochody osobowe, ciężarowe, autobusy, ciągniki siodłowe i
						balastowe, a także samochody specjalne. Stacja prowadzi także okresowe badania
						techniczne przyczep, naczep, ciągników rolniczych oraz motocykli. Diagności Interhome są
						także upoważnieni do badania technicznego niezbędnego przed pierwszą rejestracją
						wszystkich rodzajów i typów pojazdów rejestrowanych po raz pierwszy w Polsce, a więc
						pojazdów sprowadzonych indywidualnie zza granicy.
					</p>

					<h6 class="text-xl font-medium">Co wyróżnia ofertę Interhome?</h6>

					<p class="p">
						Klienci zaufali Interhome dzięki wysokiej jakości świadczonych usług, doświadczeniu
						technicznemu i profesjonalizmowi personelu. Cenią sobie także szybkość i terminowość, a
						więc sprawne wykonywanie usług, minimalizowanie czasu przestoju pojazdów. Istotnym są
						również transparentne, uczciwe wyceny, brak ukrytych opłat oraz wyraźna informacja o
						wykonanych pracach. Nie bez znaczenia jest także rzetelność i uczciwość w diagnozowaniu
						problemów oraz kompleksowość usług, czyli możliwość  skorzystania z różnorodnych usług w
						jednym miejscu.
					</p>
				</div>

				<div class="grid gap-y-6">
					<div
						class="block overflow-hidden duration-700 animate-in fade-in-0 slide-in-from-top-48 h-96"
					>
						<Image
							class="object-cover object-center w-full h-full"
							loading="eager"
							meta={BackgroundImage2}
							alt="warsztat firmy Interhome"
						/>
					</div>

					<div
						class="block overflow-hidden duration-700 animate-in fade-in-0 slide-in-from-top-48 h-96"
					>
						<Image
							class="object-cover object-center w-full h-full"
							loading="eager"
							meta={BackgroundImage3}
							alt="warsztat firmy Interhome"
						/>
					</div>

					<div
						class="block overflow-hidden duration-700 animate-in fade-in-0 slide-in-from-top-48 h-96"
					>
						<Image
							class="object-cover object-center w-full h-full"
							loading="eager"
							meta={BackgroundImage4}
							alt="warsztat firmy Interhome"
						/>
					</div>
				</div>
			</div>

			<div
				class="max-h-[600px] row-span-2 w-[16rem] sm:w-[24rem] animate-in fade-in-0 slide-in-from-top-48 duration-700 overflow-hidden"
			>
				<Image
					class="object-cover object-center w-full h-full"
					loading="eager"
					meta={BackgroundImage5}
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

<style lang="postcss">
	.p {
		@apply text-sm sm:text-base;
	}

	.p-italic {
		@apply p italic;
	}
</style>
