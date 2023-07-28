<script lang="ts" >
	export let fn = (event:Event) => {};
</script>
<button
	on:click={fn}
	class={
		`m-1 p-2 
		rounded-lg neon-cyan-100 hover:neon-cyan-200 hover:bg-cyan-500
		`
	}
>
	<slot/>
</button>