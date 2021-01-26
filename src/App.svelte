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
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<PlayerList {players} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
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