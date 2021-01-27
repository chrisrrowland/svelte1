<script lang="ts">
	import PlayerList from "./PlayerList.svelte";

	export let name: String;
	
	


	let players = [
		{id:'acunaro01',firstName:'Ronald', lastName:'Acuna', position:'OF', team:'braves'},
		{id:'tatisfe02', firstName:'Fernando', lastName:'Tatis', position:'SS', team:'padres'},
		{id:'sotoju01', firstName:'Juan', lastName:'Soto', position:'OF', team:'nationals'},
		{id:'troutmi01', firstName:'Mike', lastName:'Trout', position:'OF', team:'angels'},
		{id:'cabremi01', firstName:'Miguel', lastName:'Cabrera', position:'DH', team:'tigers'}
	]

	let selectedId: String = null;

	let handleSelection = (id) => {
		selectedId = id;
	}

	$: stats = "https://widgets.sports-reference.com/wg.fcgi?css=1&site=br&url=%2Fplayers%2Fa%2F"+{selectedId}+".shtml&div=div_batting_standard"
</script>


<main>
	<h1>Hello {name}!</h1>
	<p>This is some baseball junk</p>

	<PlayerList {players} onSelect={handleSelection}/>

	{#if selectedId}
		Selected Id: {selectedId}
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color:darkgreen;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>