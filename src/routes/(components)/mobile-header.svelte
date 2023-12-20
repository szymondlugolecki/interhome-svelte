<script lang="ts">
	import { createPopover, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { Menu, X } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import { page } from '$app/stores';

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createPopover({
		forceVisible: true
	});

	$: activeUrl = $page.url.pathname;
</script>

<button type="button" class="trigger" use:melt={$trigger} aria-label="Otwórz menu">
	<Menu class="" />
	<span class="sr-only">Otwórz menu</span>
</button>

{#if $open}
	<div use:melt={$content} transition:fade={{ duration: 100 }} class="content">
		<div use:melt={$arrow} />
		<div class="flex flex-col items-start sm:hidden gap-y-3">
			<a class={cn('transition-colors', activeUrl === '/' && 'text-blue-600')} href="/">Start</a>
			<a
				class={cn('transition-colors', activeUrl.startsWith('/oferta') && 'text-blue-600')}
				href="/#oferta">Oferta</a
			>
			<a
				class={cn('transition-colors', activeUrl.startsWith('/praca') && 'text-blue-600')}
				href="/praca">Praca</a
			>
			<a
				class={cn('transition-colors', activeUrl.startsWith('/o-nas') && 'text-blue-600')}
				href="/o-nas">O nas</a
			>
			<a
				class={cn('transition-colors', activeUrl.startsWith('/kontakt') && 'text-blue-600')}
				href="/kontakt">Kontakt</a
			>
			<a
				class={cn('transition-colors', activeUrl.startsWith('/galeria') && 'text-blue-600')}
				href="/galeria">Galeria</a
			>
		</div>
	</div>
{/if}

<style lang="postcss">
	.trigger {
		@apply inline-flex h-9 w-9 items-center justify-center rounded-full p-0;
		@apply text-sm font-medium transition-colors hover:bg-background/50;
		@apply focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2;
	}

	.content {
		@apply z-50 w-44 rounded-[4px] bg-background p-5 shadow-sm;
	}
</style>
