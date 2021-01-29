<script lang="ts">
	import PlayerCard from "./PlayerCard.svelte";
    import PlayerList from "./PlayerList.svelte";
    import { Player } from "./types/Player"
    import type { PlayersInterface } from "./util/playersource"
	import { StaticPlayersSource } from "./util/playerssourcestatic"

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

<p>This is some baseball junk</p>

<PlayerList {players} onSelect={handleSelection}/>

{#if selectedPlayer}
    <PlayerCard player={selectedPlayer}></PlayerCard>
{/if}