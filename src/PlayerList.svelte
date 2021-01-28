<script lang="ts">
    import type { Player } from "./types/Player";
    import PlayerListItem from "./PlayerListItem.svelte";
    import List, {Item} from '@smui/list';
    export let players: Player[];
    import { Stretch } from 'svelte-loading-spinners'

    export let onSelect: Function;

    let selectionIndex = null
    let selectedId = null
    let selectedItem = null

    let selectItem = (id) => {
        selectedItem = id
        onSelect(id)
    }

</script>

<style>
    .list-container {
		text-align: left;
		margin-left: 25%;
		margin-right: 25%;
		background-color: #EEEEEE;
        padding-left:8px;
        padding-right:8px;
	}
</style>

{#if !players || players.length<1}
    <Stretch size="72" color="#006400" unit="px" duration="0.5s"></Stretch>
{:else}
<div class="list-container">
    <List twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>
        {#each players as player}
            <PlayerListItem onSelect={selectItem} {player} selectedItem={selectedItem}/>
        {/each}
    </List>
</div>
{/if}
