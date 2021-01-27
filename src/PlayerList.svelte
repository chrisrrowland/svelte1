<script lang="ts">
    import type { Player } from "./types/Player";
    import PlayerListItem from "./PlayerListItem.svelte";
    import List, {Item} from '@smui/list';
    export let players: Player[];

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
	}
</style>

{#if players.length<1}
    <div>No players loaded</div>
{:else}
<div class="list-container">
    <List twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>
        {#each players as player}
            <PlayerListItem onSelect={selectItem} {...player} selectedItem={selectedItem}/>
        {/each}
    </List>
</div>
{/if}
