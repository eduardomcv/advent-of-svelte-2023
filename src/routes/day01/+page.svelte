<script lang="ts">
	export let data;

	let name = '';
	let isNice = false;
	let found: boolean | null = null;

	function reset() {
		found = null;
	}

	function searchRecords() {
		const record = data.records?.find((record) => record.name === name);
		found = record !== undefined;
		if (found) {
			isNice = record!.tally >= 0;
		}
	}
</script>

<h1>Day 01</h1>
<form on:submit={searchRecords}>
	<input type="text" on:keydown={reset} bind:value={name} />
</form>

{#if found !== null}
	{#if !found}
		<p>Couldn't find elf with name: {name}</p>
	{:else if isNice}
		<p>Nice :)</p>
	{:else}
		<p>Not nice :(</p>
	{/if}
{/if}
