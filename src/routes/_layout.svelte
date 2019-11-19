<script>
	import Nav from '../components/Nav.svelte';
	import { Icons } from "../components/Icons";

	export let segment;
</script>

<style>
	main {
		position: relative;
		height: 100vh;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Icons />

<Nav {segment}/>

<main>
	<slot></slot>
</main>