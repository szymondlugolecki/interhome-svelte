<script lang="ts">
	import Image from '$components/custom/Util/image.svelte';
	import Logo from '$assets/interhome.png?w=750&format=avif;webp;jpg&as=picture';
</script>

<svelte:head>
	<title>Praca • Interhome</title>
	<meta name="description" content="Dołącz do naszego zespołu." />
</svelte:head>

<div class="flex justify-center w-full min-h-screen pt-24 pb-12">
	<div class="max-w-2xl px-8 sm:px-12 lg:max-w-7xl flex flex-col items-start gap-y-4">
		<div class="w-full flex flex-col items-center pb-3">
			<Image meta={Logo} alt="interhome logo" sizes="500px" width="500px" height="147px" />
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				Praca dla mechanika
			</h1>
		</div>
		<h2 class="text-lg font-medium text-left w-full">Obowiązki</h2>
		<ul class="ml-6 list-disc">
			<li>weryfikacja stanu technicznego pojazdu</li>
			<li>okresowa obsługa techniczna pojazdów</li>
			<li>diagnozowanie przyczyny usterki i określanie zakresu naprawy</li>
			<li>przeprowadzanie napraw mechanicznych zgodnie z technologią naprawy</li>
			<li>współpraca z innymi pracownikami serwisu</li>
			<li>obsługa urządzeń warsztatowych oraz specjalistycznych narzędzi</li>
		</ul>

		<h3 class="text-lg font-medium text-left w-full">Oczekiwania</h3>
		<ul class="ml-6 list-disc">
			<li>znajomość zagadnień eksploatacji pojazdów</li>
			<li>doświadczenie w samodzielnych naprawach samochodów osobowych i ciężarowych</li>
			<li>punktualność, dyspozycyjność</li>
			<li>dbałość o powierzone narzędzia i mienie</li>
			<li>rzetelność w wykonywaniu powierzonych obowiązków oraz odpowiedzialność za swoją pracę</li>

			<li>prawo jazdy kategorii B</li>
			<li>pozytywne nastawienie do pracy</li>
		</ul>

		<h4 class="text-lg font-medium text-left w-full">Oferujemy</h4>
		<ul class="ml-6 list-disc">
			<li>umowę o pracę</li>
			<li>rozwój zawodowy</li>
			<li>
				atrakcyjne wynagrodzenie adekwatne do posiadanych umiejętności i zaangażowania w pracę
			</li>
		</ul>

		<p class="text-xl font-semibold">Więcej szczegółów u doradcy</p>
		<div>
			<p class="text-xl font-semibold">Skontaktuj się z nami:</p>
			<a href="mailto:office@interhome.com.pl">office@interhome.com.pl</a>
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
