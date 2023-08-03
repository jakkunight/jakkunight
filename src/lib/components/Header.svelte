<script lang="ts">
	import { BASE_URL } from "$lib/constants";
    import Title from "$lib/components/Title.svelte";
    import Button from "./Button.svelte";
    import Display from "./Display.svelte";
</script>
<Display>
	<a href={BASE_URL + "/"} >
		<Title>
			Jakku Night
		</Title>
	</a>
	<a href={BASE_URL + "/the-console-logs"} >
		<Button>The Console Logs</Button>
	</a>
	<a href={BASE_URL + "/algoritmia"} >
		<Button>Algoritmia</Button>
	</a>
	<a href={BASE_URL + "/boku-no-manga-academia"} >
		<Button>Boku no Manga Academia</Button>
	</a>
	<a href={BASE_URL + "/into-the-games"} >
		<Button>Into the GAMES</Button>
	</a>
</Display>