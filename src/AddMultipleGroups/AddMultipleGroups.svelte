<script lang="ts">

	import Tab from "@smui/tab"
	import TabBar from "@smui/tab-bar" 
	import { Icon, Label } from "@smui/common"

	import Select from "./Select.svelte";
	import Upload from "./Upload.svelte";
	import Validation from "./Validation.svelte"
	

	
	let tabs = [
		{
			key: 0,
			icon: "circle",
			label: "Select",
			component:Select
		},
		{
			key: 1,
			icon: "circle",
			label: "Validation",
			component: Validation
		},
		{
			key: 2,
			icon: "circle",
			label: "Upload",
			component: Upload
		}
	]
	let selectedTab =  tabs[0]
</script>

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

