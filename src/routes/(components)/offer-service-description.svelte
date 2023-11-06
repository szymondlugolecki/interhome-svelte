<script lang="ts">
	import { cn } from '$lib/utils';
	import type { services } from '$lib/constants';

	export let service: keyof typeof services;
</script>

{#if service === 'district-vehicle-inspection-station'}
	W Okręgowej Stacji Kontroli Pojazdów INTERHOME można wykonać następujące badania techniczne:

	<ul class="pl-6 list-disc [&>li]:pt-2">
		<li>
			okresowe badania techniczne wszystkich pojazdów samochodowych: samochody osobowe, samochody
			ciężarowe, autobusy, ciągniki siodłowe i balastowe, samochody specjalne i ciężarowe specjalne,
		</li>
		<li>okresowe badania techniczne przyczep, naczep, ciągników rolniczych i motocykli,</li>
		<li>
			pierwsze badania techniczne przeprowadzane przed pierwszą rejestracją wszystkich rodzajów i
			typów pojazdów rejestrowanych po raz pierwszy w Polsce,
		</li>
		<li>dodatkowe badania techniczne wszystkich rodzajów i typów pojazdów.</li>
	</ul>
{:else if service === 'vehicle-mechanics'}
	Świadczymy kompleksowe usługi w zakresie napraw samochodów wszystkich typów i marek, zarówno
	osobowych, dostawczych jak i ciężarowych. Naszą dewizą jest fachowość i rzetelność w podejściu do
	klienta. Wykwalifikowany zespół pracowników i odpowiednio wyposażony warsztat stanowią podstawę
	usług świadczonych na najwyższym poziomie. Nasza wieloletnia praktyka związana z naprawami
	pojazdów czyni nas fachowcami w branży motoryzacyjnej.
{:else if service === 'tachographs-legalization'}
	Od ponad dwudziestu lat firma INTERHOME COMPANY prowadzi serwis tachografów. Priorytetem dla nas
	jest świadczenie usług rzetelnie i na najwyższym poziomie. Oferowane przez nas usługi:

	<ul class="pl-6 list-disc [&>li]:pt-2">
		<li>naprawa, kalibracja i legalizacja tachografów analogowych,</li>
		<li>instalacja, kalibracja tachografów cyfrowych i inteligentnych,</li>
		<li>naprawa instalacji.</li>
	</ul>
{:else if service === 'turbocharger-regeneration'}
	Oferujemy profesjonalną regenerację turbosprężarek dla maszyn budowlanych, rolniczych i samochodów
	ciężarowych. Nasze doświadczone zespoły ekspertów skutecznie naprawią nawet poważne uszkodzenia,
	oferując znacznie tańszą alternatywę niż zakup nowego podzespołu. Przyjmujemy turbosprężarki z
	Ciechanowa i okolic, zapewniając bezpłatny odbiór i dostawę po naprawie. Nasza regeneracja
	obejmuje montaż, regulację parametrów oraz oferuje 24-miesięczną gwarancję bez limitu kilometrów.
{/if}
