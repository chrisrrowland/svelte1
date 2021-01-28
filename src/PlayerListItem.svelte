<script lang="ts">
import type { Player } from "./types/Player";
import {Item, Graphic, Meta, PrimaryText, SecondaryText, Text} from '@smui/list';
import { get } from "svelte/store";
import { Logos } from "./util/logos"
import Team from "./util/teams"
import Colors from "./util/colors"

    export let id:string;
    export let firstName:string;
    export let lastName:string;
    export let position:string;
    export let team:Team;
    export let selectedItem:string;

    export let onSelect: Function;

    $: url = 'https://www.baseball-reference.com/players/'+lastName.substring(0,1).toLowerCase()+'/'+id+'.shtml'
    // $: logo = 'https://www.capsinfo.com/images/MLB_Team_Logos/'+logos.get(team)+'.png'
    $: logo = Logos.getLogoUrl(team)
    $: primaryColor = Colors.getPrimary(team)
    $: secondaryColor = Colors.getSecondary(team)
    

    let openExternal = () => {
        window.open(url, '_blank')
    }

    let handleSelection = (id) => {
        selectedItem = id;
        onSelect(id);
    }
</script>

<style>
	.outer-container {
		text-align: left;
		padding: .5em;
        margin-top: 1px;
        margin-bottom: 1px;
        background-color: var(--secondary-color);
        border-style: solid;
        border-width: 2px;
        border-color: var(--primary-color);
        padding: 4px;
    }

    .inner-container{ 
        background-color: white;
    }
</style>
<div class="outer-container" style="--primary-color: {primaryColor}; --secondary-color: {secondaryColor};">
    <div class="inner-container" style="background-image: url({logo}); background-repeat: no-repeat; background-position: right; background-size:75px  75px">
        <Item selected={selectedItem && selectedItem === id} on:SMUI:action={() => onSelect(id)} >
            <Graphic style="background-image: url(https://via.placeholder.com/40x40.png?text={firstName.substring(0,1)+lastName.substring(0,1)}); color:{Colors.getPrimary(team)}" />
            <Text>
                <PrimaryText>{firstName} {lastName}</PrimaryText>
                <SecondaryText>{position}</SecondaryText>
            </Text>
                <Graphic class="material-icons"  on:click={openExternal}>launch</Graphic>
        </Item>
    </div>
</div>
