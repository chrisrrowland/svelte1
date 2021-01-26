<script lang="ts">
import type { Player } from "./types/Player";
import {Item, Graphic, Meta, PrimaryText, SecondaryText, Text} from '@smui/list';

    export let id:String;
    export let firstName:String;
    export let lastName:String;
    export let position:String;
    export let team:String;

    export let selectedItem: String;

    let logos = {
		"braves":"Atlanta_Braves",
		"padres":"SanDiego_Padres",
		"nationals":"Washington_Nationals",
		"angels":"LosAngeles_Angels",
		"tigers":"Detroit_Tigers"
	}

    $: url = 'https://www.baseball-reference.com/players/'+lastName.substring(0,1).toLowerCase()+'/'+id+'.shtml'
    $: logo = 'https://www.capsinfo.com/images/MLB_Team_Logos/'+logos[team]+'.png'

    let openExternal = () => {
        window.open(url, '_blank')
    }
</script>

<style>
    mdc-list-item {
        background-color:"#00FF00"
    }

	li {
		text-align: left;
		padding: .5em;
        margin-top: 1px;
        margin-bottom: 1px;
		/* max-width: 240px; */
        background-color:#FF0000;
    }
</style>

<Item selected={selectedItem && selectedItem === id}>
    <Graphic style="background-image: url(https://via.placeholder.com/40x40.png?text={firstName.substring(0,1)+lastName.substring(0,1)});" />
    <!-- <Graphic style="background-image: url({logo});" /> -->
    <Text>
        <PrimaryText>{firstName} {lastName}</PrimaryText>
        <SecondaryText>{position}</SecondaryText>
        </Text>
        <!-- <a href={url} target="_new"> -->
            <!-- <Meta class="material-icons">info</Meta> -->
            <Graphic class="material-icons"  on:click={openExternal}>launch</Graphic>
        <!-- </a> -->
</Item>
