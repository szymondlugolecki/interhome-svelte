<script lang="ts">
	import Image from '$components/custom/Util/image.svelte';
	import Logo from '$assets/interhome.png?w=750&format=avif;webp;jpg&as=picture';
</script>

<svelte:head>
	<title>Praca • Interhome</title>
	<meta name="description" content="Dołącz do naszego zespołu." />
</svelte:head>

<div class="flex justify-center w-full min-h-screen pt-24 pb-12">
	<div class="flex flex-col items-start max-w-2xl px-8 sm:px-12 lg:max-w-7xl gap-y-4">
		<div class="flex flex-col items-center w-full pb-3">
			<Image meta={Logo} alt="interhome logo" sizes="500px" width="500px" height="147px" />
			<h1 class="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">Oferty pracy</h1>
		</div>

		<!-- Ogłoszenie dla mechanika -->
		<section>
			<h2 class="mt-8 mb-4 text-2xl font-bold">Mechanik</h2>
			<h3 class="w-full text-lg font-medium text-left">Obowiązki</h3>
			<ul class="ml-6 list-disc">
				<li>weryfikacja stanu technicznego pojazdu</li>
				<li>okresowa obsługa techniczna pojazdów</li>
				<li>diagnozowanie przyczyny usterki i określanie zakresu naprawy</li>
				<li>przeprowadzanie napraw mechanicznych zgodnie z technologią naprawy</li>
				<li>współpraca z innymi pracownikami serwisu</li>
				<li>obsługa urządzeń warsztatowych oraz specjalistycznych narzędzi</li>
			</ul>
			<h3 class="w-full mt-4 text-lg font-medium text-left">Oczekiwania</h3>
			<ul class="ml-6 list-disc">
				<li>znajomość zagadnień eksploatacji pojazdów</li>
				<li>doświadczenie w samodzielnych naprawach samochodów osobowych i ciężarowych</li>
				<li>punktualność, dyspozycyjność</li>
				<li>dbałość o powierzone narzędzia i mienie</li>
				<li>
					rzetelność w wykonywaniu powierzonych obowiązków oraz odpowiedzialność za swoją pracę
				</li>
				<li>prawo jazdy kategorii B</li>
				<li>pozytywne nastawienie do pracy</li>
			</ul>
			<h3 class="w-full mt-4 text-lg font-medium text-left">Oferujemy</h3>
			<ul class="ml-6 list-disc">
				<li>umowę o pracę</li>
				<li>rozwój zawodowy</li>
				<li>
					atrakcyjne wynagrodzenie adekwatne do posiadanych umiejętności i zaangażowania w pracę
				</li>
			</ul>
		</section>

		<!-- Ogłoszenie dla serwisanta turbosprężarek -->
		<section>
			<h2 class="mt-8 mb-4 text-2xl font-bold">Serwisant turbosprężarek</h2>
			<p class="mb-4">
				Motoryzacja jest Twoją pasją? Jesteś osobą ambitną i chcesz się rozwijać? Stań się częścią
				zespołu <strong>INTERHOME</strong>!
			</p>
			<p class="mb-4">
				Szukamy ludzi otwartych, niebojących się nowych wyzwań. W zamian gwarantujemy pracę na pełny
				etat w firmie specjalizującej się w branży motoryzacyjnej, ze stabilną pozycją na rynku.
			</p>
			<p class="mb-4">
				Firma <strong>INTERHOME COMPANY LTD</strong> w Ciechanowie zatrudni pracownika na stanowisko
				<em>serwisant turbosprężarek</em>. Poszukujemy osoby z umiejętnościami
				manualnymi/technicznymi do wsparcia działu regeneracji turbosprężarek.
			</p>
			<p class="mb-4">
				Nie masz doświadczenia? Nic straconego! Poznaj świat mechaniki pojazdowej z <strong
					>INTERHOME</strong
				>! Gwarantujemy przyuczenie do wykonywanych prac!
			</p>
			<h3 class="w-full mt-4 text-lg font-medium text-left">Oferujemy</h3>
			<ul class="ml-6 list-disc">
				<li>Atrakcyjne wynagrodzenie adekwatne do posiadanych umiejętności</li>
				<li>Stabilne zatrudnienie w oparciu o umowę o pracę na pełen etat</li>
				<li>Praca od poniedziałku do piątku</li>
				<li>Ubezpieczenie grupowe</li>
			</ul>
		</section>

		<p class="mt-8 text-xl font-semibold">Więcej szczegółów u doradcy</p>
		<div>
			<p class="text-xl font-semibold">Skontaktuj się z nami:</p>
			<p>
				E-mail: <a href="mailto:magdalena.gozdziewska@interhome.com.pl"
					>magdalena.gozdziewska@interhome.com.pl</a
				>
			</p>
			<p>Tel: 23 672 14 39</p>
			<p>Adres: ul. Mazowiecka 6, 06-400 Ciechanów</p>
		</div>
		<p class="mt-4">
			Zainteresowanych prosimy o składanie CV osobiście w siedzibie firmy lub na podany adres
			e-mail.
		</p>
		<p class="mt-2">Zadzwoń i dowiedz się czy czekamy właśnie na Ciebie!</p>
		<p class="mt-4 text-sm">Prosimy o załączenie aktualnej klauzuli RODO.</p>
	</div>
</div>
