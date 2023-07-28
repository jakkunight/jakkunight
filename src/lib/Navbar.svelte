<script lang="ts" >
    import GlowButton from "./GlowButton.svelte";
    import Heading from "./Heading.svelte";
    //import Text from "./Text.svelte";
	import TopicLink from "./TopicLink.svelte";

	let visible = false;

	function toggleMenu(event:Event){
		visible = !visible;
	}
</script>
<menu>
	<button
		on:click={toggleMenu} 
		class="neon-cyan-100 hover:neon-cyan-200 w-full h-auto flex justify-center bg-cyan-600 rounded-lg" >
		<Heading>
			Menú
		</Heading>
	</button>
	{#if visible}
		<section class="fixed p-4 top-0 left-0 bottom-0 right-0 w-full min-h-screen h-full backdrop-blur-xl overflow-y-auto" >
			<button
				on:click={toggleMenu} 
				class="neon-cyan-100 hover:neon-cyan-200 w-full h-auto flex justify-center bg-cyan-600 rounded-t-lg" >
				<Heading>
					Menú
				</Heading>
			</button>
			<nav class={
				`m-0 p-1 w-full h-auto
				flex flex-col md:flex-row flex-nowrap justify-center items-center
				neon-cyan-100  rounded-b-lg
				transition duration-300`
			} >
				<GlowButton>
					<TopicLink link="/the-console-logs"  fn={toggleMenu} >
						The Console Logs
					</TopicLink>
				</GlowButton>
				<GlowButton>
					<TopicLink link="/algoritmia"  fn={toggleMenu} >
						Algoritmia
					</TopicLink>
				</GlowButton>
				<GlowButton>
					<TopicLink link="/boku-no-manga-academia"  fn={toggleMenu} >
						Boku no Manga Academia
					</TopicLink>	
				</GlowButton>
				<GlowButton>
					<TopicLink link="/into-the-games"  fn={toggleMenu} >
						¡Into the GAMES!
					</TopicLink>
				</GlowButton>
			</nav>
		</section>
	{/if}
</menu>