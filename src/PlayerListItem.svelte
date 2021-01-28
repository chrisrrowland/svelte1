<script lang="ts">
import type { Player } from "./types/Player";
import {Item, Graphic, Meta, PrimaryText, SecondaryText, Text} from '@smui/list';
import { get } from "svelte/store";
import type { LogosInterface } from "./util/logos"
import { CapsInfoLogoHelper } from "./util/cilogohelper"
import Team from "./util/teams"
import Colors from "./util/colors"
import { BaseballReferenceHelper } from "./util/brhelper";
import type { PlayerPageInterface } from "./util/playerpage"

    export let player:Player;

    export let selectedItem:string;

    export let onSelect: Function;

    const playerPageHelper:PlayerPageInterface = new BaseballReferenceHelper() 
    $: url = playerPageHelper.getPlayerPage( player )

    const logHelper:LogosInterface = new CapsInfoLogoHelper();
    $: logo = logHelper.getLogoUrl(player.team)

    $: primaryColor = Colors.getPrimary(player.team)
    $: secondaryColor = Colors.getSecondary(player.team)
    

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
        <Item selected={selectedItem && selectedItem === player.id} on:SMUI:action={() => onSelect(player.id)} >
            <Graphic style="background-image: url(https://via.placeholder.com/40x40.png?text={player.firstName.substring(0,1)+player.lastName.substring(0,1)}); color:{Colors.getPrimary(player.team)}" />
            <Text>
                <PrimaryText>{player.firstName} {player.lastName}</PrimaryText>
                <SecondaryText>{player.position}</SecondaryText>
            </Text>
                <Graphic class="material-icons"  on:click={openExternal}>launch</Graphic>
        </Item>
    </div>
</div>
