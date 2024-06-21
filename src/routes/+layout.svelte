<script lang="ts">
	import '../app.postcss';
	import Header from '$routes/(components)/header.svelte';
	import Footer from '$routes/(components)/footer.svelte';

	// Import the Analytics package, and the SvelteKit dev variable.
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onNavigate } from '$app/navigation';

	import type { ObserverEventDetails } from 'svelte-inview';
	// import PromotionBanner from './(components)/promotion-banner.svelte';

	let isInView: boolean;
	const inViewChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	// Inject the Analytics functionality
	inject({ mode: dev ? 'development' : 'production' });

	let showPromotionBanner = false;

	const lazyLoadPromotionBanner = async () => {
		const { default: PromotionBanner } = await import('./(components)/promotion-banner.svelte');
		return PromotionBanner;
	};

	const lazyLoadScrollToTopArrow = async () => {
		const { default: ScrollToTop } = await import('$components/custom/Util/scroll-to-top.svelte');
		return ScrollToTop;
	};

	const timeout = setTimeout(() => {
		showPromotionBanner = true;
	}, 2000);

	onNavigate(() => {
		clearTimeout(timeout);
	});
</script>

<svelte:head>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
</svelte:head>

<div class="relative">
	{#await import('svelte-inview') then { inview }}
		<div
			class="absolute inset-0 h-screen -z-50"
			id="top"
			use:inview={{ rootMargin: '0px', unobserveOnEnter: false }}
			on:inview_change={inViewChange}
		/>
	{/await}

	<Header />
	<div class="min-h-screen">
		<slot />
	</div>
	{#await lazyLoadPromotionBanner() then PromotionBanner}
		<PromotionBanner bind:showPromotionBanner />
	{/await}
	<Footer />
	{#await lazyLoadScrollToTopArrow() then ScrollToTop}
		{#if !isInView && !showPromotionBanner}
			<ScrollToTop />
		{/if}
	{/await}
</div>
