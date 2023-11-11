<script lang="ts">
	export let title: string;
	export let phones: string[];
</script>

<div>
	<dt class="text-base font-medium">{title}</dt>
	<dd>
		{#each phones as phone}
			<a class="block text-sm" href="tel:+48 {phone}">{phone}</a>
		{/each}
	</dd>
</div>
