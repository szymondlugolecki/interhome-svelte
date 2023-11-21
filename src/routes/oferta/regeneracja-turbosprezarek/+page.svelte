<script lang="ts">
	import MasonryGallery from '$routes/galeria/(components)/masonry-gallery.svelte';
	import turbochargersImages from '$lib/images/turbochargers';
</script>

<svelte:head>
	<title>Regenracja turbosprężarek • Interhome</title>
	<meta
		name="description"
		content="Kompleksowa regeneracja turbosprężarek do samochodów osobowych,
	ciężarowych, maszyn rolniczych oraz budowlanych."
	/>
</svelte:head>

<h1 class="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
	Regeneracja turbosprężarek
</h1>

<p class="leading-7">
	Nasza firma specjalizuje się w kompleksowej regeneracji turbosprężarek do samochodów osobowych,
	ciężarowych, maszyn rolniczych oraz budowlanych. Realizujemy naprawy nawet najpoważniejszych
	uszkodzeń, oferując znacząco tańsze rozwiązanie od zakupu nowego podzespołu.
</p>

<p class="leading-7">
	Dzięki nowoczesnemu parkowi maszynowemu, mamy możliwość regenerować różne typy turbosprężarek,
	które po procesie odnowy przechodzą testy na profesjonalnym analizatorze. Stosujemy wyłącznie
	wysokiej jakości części zamienne renomowanych dostawców, aby zapewnić długotrwałą i efektywną
	pracę urządzeń.
</p>

<div>
	<p class="leading-7">
		Zapewniamy klientom 12-miesięczną gwarancję bez limitu kilometrów, co świadczy o naszym
		przekonaniu co do najwyższej jakości świadczonych usług.
	</p>
	<p class="leading-7">
		Działamy sprawnie i terminowo, dbając zarówno o szybkość realizacji, jak i trwałość naszych
		napraw.
	</p>
	<p class="leading-7">
		Dla klientów z Ciechanowa i okolic zapewniamy bezpłatny odbiór i dostawę po naprawie.
	</p>
</div>
<p class="leading-7">
	Skontaktuj się z nami, aby uzyskać więcej informacji na temat naszych profesjonalnych usług
	regeneracji turbosprężarek.
</p>

<div class="flex flex-col w-full py-6 gap-y-6">
	<h2 class="text-2xl font-semibold tracking-tight scroll-m-20">Galeria</h2>

	<div class="w-full max-w-7xl">
		<MasonryGallery items={turbochargersImages} />
	</div>
</div>
