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
				class={cn('transition-colors', activeUrl.startsWith('/o-nas') && 'text-blue-600')}
				href="/o-nas">O nas</a
			>
			<a class="transition-colors" href="/#kontakt">Kontakt</a>
			<a class="transition-colors" href="/galeria">Galeria</a>
		</div>
	</div>
{/if}

<style lang="postcss">
	.input {
		@apply flex h-8 w-full rounded-md border border-blue-800 bg-transparent px-2.5 text-sm;
		@apply ring-offset-blue-300 focus-visible:ring;
		@apply focus-visible:ring-blue-400 focus-visible:ring-offset-1;
		@apply flex-1 items-center justify-center;
		@apply px-2.5 text-sm leading-none text-blue-700;
	}

	.trigger {
		@apply inline-flex h-9 w-9 items-center justify-center rounded-full p-0;
		@apply text-sm font-medium transition-colors hover:bg-background/50;
		@apply focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2;
	}

	.content {
		@apply z-50 w-44 rounded-[4px] bg-background p-5 shadow-sm;
	}
</style>
