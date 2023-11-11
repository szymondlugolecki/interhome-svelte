<script lang="ts">
	export let title: string;
	export let phones: string[];
</script>

<div>
	<dt class="font-medium">{title}</dt>
	<dd>
		{#each phones as phone}
			<a class="block" href="tel:+48 {phone}">{phone}</a>
		{/each}
	</dd>
</div>
