<script lang="ts">
	import type { PlayersInterface } from "./util/playersource"
	import { StaticPlayersSource } from "./util/playerssourcestatic"

	import { Player } from "./types/Player"
	import PlayerCard from "./PlayerCard.svelte";
	import PlayerList from "./PlayerList.svelte";
	export let h1: string;
	
	const playersSource:PlayersInterface = new StaticPlayersSource()
	let players: Player[] = null;
	playersSource.getPlayers()
	.then(result=>{
		players = result;
	})


	let selectedPlayer: Player = null;

	let handleSelection = (id:string) => {
		selectedPlayer = players.filter(p=>p.id===id)[0];
	}

	// $: stats = "https://widgets.sports-reference.com/wg.fcgi?css=1&site=br&url=%2Fplayers%2Fa%2F"+{selectedId}+".shtml&div=div_batting_standard"
</script>


<main>
	<h1>{h1}</h1>
	<p>This is some baseball junk</p>

	<PlayerList {players} onSelect={handleSelection}/>

	{#if selectedPlayer}
		<PlayerCard player={selectedPlayer}></PlayerCard>
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