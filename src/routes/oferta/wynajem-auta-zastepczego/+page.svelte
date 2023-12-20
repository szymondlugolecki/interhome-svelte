<script lang="ts">
	import Image from '$components/custom/Util/image.svelte';
	import CarRentalImage from '$assets/services/wynajem-auta-zastepczego/main.jpeg?w=750&format=avif;webp;jpg&as=picture';
	// import PdfViewer from 'svelte-pdf';
</script>

<svelte:head>
	<title>Wypożyczenie auta zastępczego • Interhome</title>
	<meta
		name="description"
		content="Wypożyczamy samochody zastępcze na czas naprawy lub przeglądu Twojego pojazdu."
	/>
</svelte:head>

<h1 class="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
	Wynajem auta zastępczego
</h1>

<div class="flex flex-col gap-y-3">
	<p class="leading-7">
		Oferujemy wynajem auta zastępczego już od 100zł netto za dobę. Więcej szczegółów u doradcy w
		serwisie.
	</p>

	<div>
		<p class="leading-7">Zapraszamy ul. Mazowiecka 6, Ciechanów</p>
		<a class="leading-7" href="tel:+48236721439">tel. 23-672-14-39</a>
	</div>
</div>

<div class="max-w-xl overflow-hidden">
	<Image
		class="object-cover object-center w-full h-full"
		loading="eager"
		meta={CarRentalImage}
		alt="przykładowy samochód zastępczy"
	/>
</div>

<!-- <PdfViewer url="../najem.pdf" data={null} showButtons={[]} showBorder={false} /> -->

<!-- <div id="topBtn">xD</div> -->
