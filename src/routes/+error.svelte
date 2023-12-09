<script>
	import { page } from '$app/stores';

	const httpStatusList = {
		400: 'Nieprawidłowe żądanie',
		401: 'Nieautoryzowany dostęp',
		404: 'Nie znaleziono podstrony. Zapraszamy na stronę główną.',
		500: 'Wewnętrzny błąd serwera'
	};

	$: statusMessage =
		// @ts-ignore
		$page.status in httpStatusList ? httpStatusList[$page.status] : $page.error.message;
</script>

<div class="flex flex-col items-center justify-center pt-24">
	<h1 class="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
		Błąd {$page.status}
	</h1>

	<p class="leading-7 [&:not(:first-child)]:mt-6 font-medium">
		{statusMessage}
	</p>
</div>
