<script lang="ts">
	import { cn } from '$lib/utils';

	export let stars = 5;
	export let review: string;
	export let name: string;

	let className: string | null | undefined = null;
	export { className as class };
</script>

<div class={cn('flex flex-col items-start gap-y-3', className)}>
	<span class="select-none">{'⭐'.repeat(stars)}</span>
	<figure class="flex flex-col text-left gap-y-3">
		<blockquote class="text-[17px] italic leading-7">
			<p>
				“{review}“
			</p>
		</blockquote>
		<figcaption class="font-semibold">{name}</figcaption>
	</figure>
</div>
