<script lang="ts">

    import { Player } from "./types/Player"
    import BaseballProspectusHelper from "./util/bphelper"
    import type { HeadshotInterface } from "./util/headshot"
    import Card, {Content, Media, PrimaryAction} from "@smui/card"

    export let player:Player;

    const headshotHelper:HeadshotInterface = new BaseballProspectusHelper()

    $: headshotUrl = headshotHelper.getHeadshotUrl(player.bpid)

</script>

<style>
    .card-container {
		  text-align: center;
      margin: auto;
      width: 50%;
		  background-color: #EEEEEE;
      justify-content: center;
      align-items: center;
	}

</style>

<div class="card-container">
    <Card >
        <div style="padding: 1rem;">
          <h2 class="mdc-typography--headline6" style="margin: 0;">{player.firstName} {player.lastName}</h2>
          <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">{player.team.name}</h3>
        </div>
        <PrimaryAction on:click={() => console.log('click')}>
          <Media style="height:135px; background-image: url({headshotUrl}); background-repeat: no-repeat; background-position: center; background-size:90px  135px" aspectRatio="16x9" component="img" src="require(https://legacy.baseballprospectus.com/card/images/headshot_31483.jpg)"></Media>
          <Content class="mdc-typography--body2">
            Hi, I'm {player.firstName} {player.lastName}.  I play {player.position} for the {player.team.name}.
          </Content>
        </PrimaryAction>
      </Card>
</div>