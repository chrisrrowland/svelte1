import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		h1: 'Play ball'
	}
});

export default app;