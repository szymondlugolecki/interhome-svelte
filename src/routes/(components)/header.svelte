<script lang="ts">
	import { Popover, PopoverTrigger, PopoverContent } from '$lib/components/ui/popover';
	import Image from '$components/custom/Util/image.svelte';
	import Logo from '$assets/interhome.png?w=500&format=avif;webp;jpg&as=picture';
	// import Logotype from '$assets/interhome3.png?w=500&format=avif;webp;jpg&as=picture';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { Button } from '$components/ui/button';
	import { services } from '$lib/constants';

	import MobileHeader from './mobile-header.svelte';

	$: activeUrl = $page.url.pathname;
</script>

<header class="fixed top-0 z-40 w-full text-center bg-background">
	<nav
		class="relative flex items-center justify-between w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
	>
		<div class="flex">
			<a href="/">
				<!-- <div class="hidden sm:flex"> -->
				<Image meta={Logo} alt="interhome logo" sizes="180px" width="180px" height="53px" />
				<!-- </div> -->
				<!-- <div class="flex sm:hidden">
					<Image meta={Logotype} alt="interhome logo" sizes="32px" />
				</div> -->
			</a>
		</div>
		<div class="items-center justify-center hidden py-6 font-medium sm:flex gap-x-6">
			<a
				class={cn('hidden sm:inline transition-colors', activeUrl === '/' && 'text-blue-600')}
				href="/">Start</a
			>
			<Popover>
				<PopoverTrigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="link"
						class={cn(
							'transition-colors p-0 text-base font-medium text-inherit hover:text-blue-600',
							activeUrl.startsWith('/oferta') && 'text-blue-600'
						)}>Oferta</Button
					>
				</PopoverTrigger>
				<PopoverContent class="w-48">
					<div class="grid gap-y-5">
						{#each Object.entries(services) as [service, info]}
							<Button variant="link" href={info.url} class="whitespace-break-spaces"
								>{service === 'district-vehicle-inspection-station'
									? 'Okręgowa stacja kontroli pojazdów'
									: info.label}</Button
							>
						{/each}
					</div>
				</PopoverContent>
			</Popover>

			<!-- <a
				class={cn('transition-colors', activeUrl.startsWith('/oferta') && 'text-blue-600')}
				href="/oferta">Oferta</a
			> -->
			<a
				class={cn(
					'transition-colors hover:text-blue-600',
					activeUrl.startsWith('/praca') && 'text-blue-600'
				)}
				href="/praca">Praca</a
			>
			<a
				class={cn(
					'transition-colors hover:text-blue-600',
					activeUrl.startsWith('/o-nas') && 'text-blue-600'
				)}
				href="/o-nas">O nas</a
			>
			<a
				class={cn(
					'transition-colors hover:text-blue-600',
					activeUrl.startsWith('/kontakt') && 'text-blue-600'
				)}
				href="/kontakt">Kontakt</a
			>
			<a
				class={cn(
					'transition-colors hover:text-blue-600',
					activeUrl.startsWith('/galeria') && 'text-blue-600'
				)}
				href="/galeria">Galeria</a
			>
		</div>
		<div class="py-[1.5rem] sm:hidden">
			<MobileHeader />
		</div>
	</nav>
</header>
