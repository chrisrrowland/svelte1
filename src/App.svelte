<script lang="ts">
	import { Atlanta_Braves , Detroit_Tigers, LosAngeles_Angels, SanDiego_Padres, Washington_Nationals} from "./util/teams"

	import PlayerCard from "./PlayerCard.svelte";
	import PlayerList from "./PlayerList.svelte";
	export let h1: string;
	
	


	let players = [
		{id:'acunaro01', bpid:'105454', firstName:'Ronald', lastName:'Acuna', position:'OF', team:Atlanta_Braves},
		{id:'tatisfe02', bpid:'108651', firstName:'Fernando', lastName:'Tatis', position:'SS', team:SanDiego_Padres},
		{id:'sotoju01',  bpid:'107182', firstName:'Juan', lastName:'Soto', position:'OF', team:Washington_Nationals},
		{id:'troutmi01', bpid:'59432', firstName:'Mike', lastName:'Trout', position:'OF', team:LosAngeles_Angels},
		{id:'cabremi01', bpid:'31483', firstName:'Miguel', lastName:'Cabrera', position:'DH', team:Detroit_Tigers},
		{id:'ohtansh01', bpid:'111306', firstName:'Shohei', lastName:'Ohtani', position:'P/DH', team:LosAngeles_Angels}
		
	]

	let selectedId: string = null;

	let handleSelection = (id) => {
		selectedId = id;
	}

	$: bpid = selectedId ? players.filter(p=>p.id===selectedId)[0].bpid : null;
	// $: stats = "https://widgets.sports-reference.com/wg.fcgi?css=1&site=br&url=%2Fplayers%2Fa%2F"+{selectedId}+".shtml&div=div_batting_standard"
</script>


<main>
	<h1>{h1}</h1>
	<p>This is some baseball junk</p>

	<PlayerList {players} onSelect={handleSelection}/>

	{#if selectedId}
		<PlayerCard {...players.filter(p=>p.id===selectedId)[0]} bpid={bpid}></PlayerCard>
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