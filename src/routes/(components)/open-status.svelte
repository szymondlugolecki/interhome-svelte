<script lang="ts">
	import { cn } from '$lib/utils';

	export let open: boolean;
</script>

<div class="pb-3">
	<span
		class={cn(
			'relative inline-block text-xl italic font-semibold text-center before:block before:absolute before:-inset-1.5 before:-skew-y-3',
			open ? 'before:bg-green-500' : 'before:bg-red-500'
		)}
	>
		<span class="relative text-white">{open ? 'Otwarte' : 'Zamknięte'}</span>
	</span>
</div>
