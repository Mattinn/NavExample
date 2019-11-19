<script>
	import Icon from "./Icons/index.js";
  export let segment
  let current = segment;
  let expanded = false;
  $: if(current !== 'menu') { expanded = false; }
</script>

<style>
	nav {
		float: left;
    height: 100vh;
    width: 60px;
    display: flex;
    flex-direction: column;
    background-color: gray;
    font-size: 16px;
	}
	a {
    display: flex;
    align-items: center;
    height: 20px;
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
	button {
		background-color: transparent;
		width: 100%;
		max-width: 60px;
		cursor: pointer;
		outline: none;
		border: none;
	}
  li, button {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
		color: white;
  }
  .menu {
    display: flex;
  }
  .expanded {
    width: 240px;
  }
  .expanded li {
    justify-content: left;
    padding-left: 20px;
  }
  .expanded a {
    width: 100%;
  }
	p {
    padding-left: 20px;
  }
	.selected {
		background-color: rgb(255,62,0);
	}
</style>

<nav class:expanded>
	<div class="menu">
		<ul>
			<button class="toggle" id="nav" on:click="{() => expanded = !expanded}"><Icon name="menu" size=20/></button>
			<li class:selected={segment === undefined || segment === "home" ? "current" : ""}>
				<a href="." id="home" on:click="{() => current = 'home'}">
					<Icon name="home" size=20/>
					{#if expanded}<p>Home</p>{/if}
				</a>
			</li>
			<li class:selected={segment === "about"}>
				<a href="about" id="about" on:click="{() => current = 'about'}">
					<Icon name="about" size=20/>
					{#if expanded}<p>About</p>{/if}
				</a>
			</li>
			<li class:selected={segment === "blog"}>
				<a href="blog" id="blog" on:click="{() => current = 'blog'}">
					<Icon name="blog" size=20/>
					{#if expanded}<p>Blog</p>{/if}
				</a>
			</li>
		</ul>
	</div>
</nav>
