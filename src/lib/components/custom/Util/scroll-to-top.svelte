<script lang="ts">
	import { ArrowUp } from 'radix-icons-svelte';
	import { fade } from 'svelte/transition';
</script>

<a
	transition:fade={{
		duration: 300,
		delay: 0
	}}
	class="fixed inline-flex items-center justify-center text-sm rounded-full shadow bg-primary bottom-4 right-4 square-14 text-primary-foreground hover:bg-primary/90"
	href="#top"
>
	<ArrowUp size={24} />
</a>

<!-- inline-flex items-center justify-center text-sm font-medium whitespace-nowrap transition-colors
focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 fixed
rounded-full bg-primary bottom-4 right-4 square-14 -->
