<script lang="ts">
import type { Player } from "./types/Player";
import {Item, Graphic, Meta, PrimaryText, SecondaryText, Text} from '@smui/list';
import { get } from "svelte/store";

    export let id:String;
    export let firstName:String;
    export let lastName:String;
    export let position:String;
    export let team:String;

    export let selectedItem: String;

    let logos = new Map<String,String>()
    logos.set("braves","Atlanta_Braves")
    logos.set("padres","SanDiego_Padres")
    logos.set("nationals","Washington_Nationals")
    logos.set("angels","LosAngeles_Angels")
    logos.set("tigers","Detroit_Tigers")

    type Color = {
        primary: String;
        secondary: String;
    }

    let colors = new Map<String,Color>()
    colors.set("braves", {primary:"#CE1141", secondary:"#13274F"} )
    colors.set("padres", {primary:"#2F241D", secondary:"#FFC425"} )
    colors.set("nationals", {primary:"#AB0003", secondary:"#14225A"} )
    colors.set("angels", {primary:"#003263", secondary:"#BA0021"} )
    colors.set("tigers", {primary:"#0C2340", secondary:"#FA4616"} )


    $: url = 'https://www.baseball-reference.com/players/'+lastName.substring(0,1).toLowerCase()+'/'+id+'.shtml'
    $: logo = 'https://www.capsinfo.com/images/MLB_Team_Logos/'+logos.get(team)+'.png'
    $: primaryColor = colors.get(team).primary
    $: secondaryColor = colors.get(team).secondary

    let openExternal = () => {
        window.open(url, '_blank')
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
        <Item selected={selectedItem && selectedItem === id}>
            <Graphic style="background-image: url(https://via.placeholder.com/40x40.png?text={firstName.substring(0,1)+lastName.substring(0,1)}); color:{colors.get(team).primary}" />
            <!-- <Graphic style="background-image: url({logo});" /> -->
            <Text>
                <PrimaryText>{firstName} {lastName}</PrimaryText>
                <SecondaryText>{position}</SecondaryText>
            </Text>
                <Graphic class="material-icons"  on:click={openExternal}>launch</Graphic>
        </Item>
    </div>
</div>
