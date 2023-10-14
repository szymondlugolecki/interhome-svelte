<script lang="ts">
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const options = [
		{
			title:
				'Auta nowo zarejestrowane muszą być wyposażone w tachograf inteligenty drugiej generacji',
			time: '21.08.2023'
		},
		{
			title:
				'Stare tachografy analogowe i cyfrowe muszą zostać wymienione w pojazdach świadczących usługi w transporcie międzynarodowym na tachografy inteligentne drugiej generacji',
			time: '31.12.2024'
		},
		{
			title:
				'Inteligentne tachografy drugiej generacji powinny być zamontowane w pojazdach, które posiadają tachograf inteligentny pierwszej generacji',
			time: '18.08.2025'
		},
		{
			title:
				'Obowiązek montaży tachografów inteligentnych drugiej generacji w pojazdach 2.5 - 3.5t, które działają w transporcie międzynarodowym',
			time: '01.06.2026'
		}
	];
</script>

<h1 class="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
	Legalizacja tachografów
</h1>
<p class="leading-7">
	Od ponad dwudziestu lat firma INTERHOME COMPANY prowadzi serwis tachografów. Priorytetem dla nas
	jest świadczenie usług rzetelnie i na najwyższym poziomie. <br />Wykonujemy usługi w zakresie:
</p>

<ul class="ml-6 list-disc [&>li]:mt-1">
	<li>naprawa, kalibracja i legalizacja tachografów analogowych</li>
	<li>instalacja, kalibracja tachografów cyfrowych i inteligentnych</li>
	<li>naprawy instalacji</li>
</ul>

<p class="leading-7">
	Nasz serwis tachografów przy <bold class="font-medium">ul. Mazowieckiej 6 w Ciechanowie</bold> dysponuje
	dużą halą napraw wraz z kanałem i parkingiem.
</p>

<div class="flex flex-col py-4 gap-y-4">
	<h2 class="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20">
		Usługi
	</h2>

	<ul class="ml-6 list-disc [&>li]:mt-1">
		<li>Tachografy cyfrowe</li>
		<li>Tachografy inteligentne</li>
		<li>Montaż, wymiana tachografów</li>
		<li>Odczyt danych z karty kierowcy i tachografu</li>
		<li>Tachografy analogowe</li>
	</ul>
</div>

<p class="leading-7">
	Mając na uwadze wdrażanie pakietu mobilności w branży transportowej, który rzuca nowe światło na
	dotychczasowe przepisy odnoszące się między innymi do czasu jazdy i odpoczynków kierowców, sposobu
	delegowania kierowców, sprawiedliwej konkurencji oraz tachografów, przeszkoliliśmy naszą kadrę
	oraz wyposażyliśmy warsztat w przyrządy mające możliwość instalacji i kalibracji tachografów nowej
	generacji..
</p>

<div class="flex flex-col w-full py-6 gap-y-6">
	<h3 class="text-2xl font-semibold tracking-tight scroll-m-20">Najważniejsze daty</h3>

	<div class="flex justify-center w-full">
		<div class="w-full max-w-full overflow-auto xs:max-w-none">
			<Timeline style="padding-left: 0px; padding-right: 0px;" position="alternate">
				{#each options as option}
					<TimelineItem>
						<TimelineOppositeContent slot="opposite-content">
							<p>{option.time}</p>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<h3>{option.title}</h3>
						</TimelineContent>
					</TimelineItem>
				{/each}
			</Timeline>
		</div>
	</div>
</div>
