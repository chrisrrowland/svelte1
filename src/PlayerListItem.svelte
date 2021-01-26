<script lang="ts">
import type { Player } from "./types/Player";

    export let id:String;
    export let firstName:String;
    export let lastName:String;
    export let position:String;

    $: url = 'https://www.baseball-reference.com/players/'+lastName.substring(0,1).toLowerCase()+'/'+id+'.shtml'
</script>

<style>
	li {
		text-align: left;
		padding: .5em;
        margin-top: 1px;
        margin-bottom: 1px;
		/* max-width: 240px; */
        background-color:#EEEEEE;
    }
</style>
<a href={url} target="_new">
    <li>{position} - {firstName} {lastName} </li>
</a>