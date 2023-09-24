<script lang="ts">
	import '../app.postcss';
	import Header from '$routes/(components)/header.svelte';
	import Footer from '$routes/(components)/footer.svelte';
	import ScrollToTop from '$components/custom/Util/scroll-to-top.svelte';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';

	let isInView: boolean;
	const inViewChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="relative">
	<div
		class="absolute inset-0 h-screen -z-50"
		id="top"
		use:inview={{ rootMargin: '0px', unobserveOnEnter: false }}
		on:inview_change={inViewChange}
	/>
	<Header />
	<slot />
	<Footer />
	{#if !isInView}
		<ScrollToTop />
	{/if}
</div>
