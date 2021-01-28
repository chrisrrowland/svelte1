<script lang="ts">

    import Card, {Content, Media, PrimaryAction} from "@smui/card"
    import Team from "./util/teams"

    export let bpid: string;
    export let firstName:string;
    export let lastName:string;
    export let position:string;
    export let team:Team;

    $: headshotUrl = "https://legacy.baseballprospectus.com/card/images/headshot_"+bpid+".jpg"

</script>

<style>
    .card-container {
		text-align: center;
        margin: auto;
        width: 50%;
		/* margin-left: 25%;
		margin-right: 25%; */
        /* width: 500px; */
		background-color: #EEEEEE;
        /* align-content: center; */
        justify-content: center;
        align-items: center;
	}

</style>

<div class="card-container">
    <Card >
        <div style="padding: 1rem;">
          <h2 class="mdc-typography--headline6" style="margin: 0;">{firstName} {lastName}</h2>
          <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">{team.name}</h3>
        </div>
        <PrimaryAction on:click={() => console.log('click')}>
          <Media style="height:135px; background-image: url({headshotUrl}); background-repeat: no-repeat; background-position: center; background-size:90px  135px" aspectRatio="16x9" component="img" src="require(https://legacy.baseballprospectus.com/card/images/headshot_31483.jpg)"></Media>
          <Content class="mdc-typography--body2">
            Hi, I'm {firstName} {lastName}.  I play {position} for the {team.name}.
          </Content>
        </PrimaryAction>
      </Card>
</div>