<script lang="ts">
	import MasonryGallery from '$routes/galeria/(components)/masonry-gallery.svelte';
	import inspectionStationImages from '$lib/images/inspection-station';
</script>

<h1 class="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
	Okręgowa Stacja Kontroli Pojazdów WCI 008
</h1>

<div>
	<span class="text-xl font-semibold tracking-tight scroll-m-20"
		>W Okręgowej Stacji Kontroli Pojazdów WCI 008 INTERHOME można wykonać następujące badania
		techniczne:</span
	>
	<ul class="ml-6 list-disc [&>li]:mt-1">
		<li>
			Okresowe badania techniczne wszystkich pojazdów samochodowych: samochody osobowe, samochody
			ciężarowe, autobusy, ciągniki siodłowe i balastowe, samochody specjalne i ciężarowe specjalne,
		</li>
		<li>Okresowe badania techniczne przyczep, naczep, ciągników rolniczych i motocykli,</li>
		<li>
			Pierwsze badania techniczne przeprowadzane przed pierwszą rejestracją wszystkich rodzajów i
			typów pojazdów rejestrowanych po raz pierwszy w Polsce,
		</li>
		<li>
			Dodatkowe badania techniczne wszystkich rodzajów i typów pojazdów:
			<ul class="pl-6 [&>li]:pt-1 list-[circle]">
				<li>pojazdów skierowanych do badań przez organ kontroli ruchu drogowego,</li>
				<li>
					pojazdów skierowanych do badań przez wydział komunikacji po zmianie stanu faktycznego
					wymagającego zmiany danych technicznych w dowodzie rejestracyjnym,
				</li>
				<li>pojazdów po wypadku, kolizji drogowej,</li>
				<li>pojazdów używanych jako taksówka (osobowa, bagażowa),</li>
				<li>pojazdów uprzywilejowanych,</li>
				<li>pojazdów przewożących materiały niebezpieczne,</li>
				<li>pojazdów dopuszczonych do przewozu międzynarodowego,</li>
				<li>pojazdów przystosowanych do nauki jazdy lub egzaminowania kierowców,</li>
				<li>pojazdów przystosowanych do ciągnięcia przyczep (pojazdy o DMC do 3,5 tony),</li>
				<li>wykonanie numeru nadwozia, podwozia, silnika, wykonanie tabliczki zastępczej.</li>
			</ul>
		</li>
	</ul>
</div>

<div class="flex flex-col w-full py-6 gap-y-6">
	<h2 class="text-2xl font-semibold tracking-tight scroll-m-20">Galeria</h2>

	<div class="w-full max-w-7xl">
		<MasonryGallery items={inspectionStationImages} />
	</div>
</div>
