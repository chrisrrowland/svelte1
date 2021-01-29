<script lang="ts">
	import Tab from "@smui/tab"
	import TabBar from "@smui/tab-bar" 
	import AddMultipleSections from "./AddMultipleSections.svelte"
	import AddMultipleGroups from "./AddMultipleGroups.svelte"
	import Players from "./Players.svelte"
	import { Icon, Label } from "@smui/common"

	let selectedTab =  null
	let tabs = [
		{
			key: 0,
			icon: "post_add",
			label: "Add multiple sections",
			component:AddMultipleSections
		},
		{
			key: 1,
			icon: "group_add",
			label: "Add multiple groups",
			component: AddMultipleGroups
		},
		{
			key: 2,
			icon: "sports_baseball",
			label: "Players",
			component: Players
		}
	]

</script>


<main>
	<div class="michigan-theme">
		<TabBar tabs={tabs} let:tab key={tab=>tab.key} bind:active={selectedTab}>
		  <Tab {tab} on>
			<Icon class="material-icons">{tab.icon}</Icon>
			<Label>{tab.label}</Label>
		  </Tab>
		</TabBar>

	</div>
	{#if selectedTab}
		<svelte:component this={tabs[selectedTab.key].component}/>
	{/if}

	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color:darkgreen;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>