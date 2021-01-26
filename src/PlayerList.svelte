<script lang="ts">
    import type { Player } from "./types/Player";
    import PlayerListItem from "./PlayerListItem.svelte";
    // import { Item, List } from "@smui/list"
    export let players: Player[];

    let selectionIndex = null
    let selectedId = null
</script>

<style>
    ul {
		/* width: 800px; */
		/* text-align: left; */
		margin-left: 25%;
		margin-right: 25%;
		background-color: #DDDDDD;
	}
</style>

{#if players.length<1}
    <div>No players loaded</div>
{:else}
<div>
    <ul>
        {#each players as player}
            <PlayerListItem  {...player}/>
        {/each}
    </ul>
</div>
{/if}
