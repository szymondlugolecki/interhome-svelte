<script lang="ts">
	import '../app.postcss';
	import Header from '$routes/(components)/header.svelte';
	import Footer from '$routes/(components)/footer.svelte';
	import ScrollToTop from '$components/custom/Util/scroll-to-top.svelte';

	// Import the Analytics package, and the SvelteKit dev variable.
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';

	let isInView: boolean;
	const inViewChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	// Inject the Analytics functionality
	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
</svelte:head>

<div class="relative">
	<div
		class="absolute inset-0 h-screen -z-50"
		id="top"
		use:inview={{ rootMargin: '0px', unobserveOnEnter: false }}
		on:inview_change={inViewChange}
	/>
	<Header />
	<div class="min-h-screen">
		<slot />
	</div>
	<Footer />
	{#if !isInView}
		<ScrollToTop />
	{/if}
</div>
