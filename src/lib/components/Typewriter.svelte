<script lang="ts">
    import { onMount } from "svelte";
	//export let loop = true;
	//let interval = 20000;
	export let delay = 65;
	let element:HTMLElement;
	let typeWriter:number = 0;
	let text:string = "I'm a developer!";
	let typedChars:string = "";
	let i = 0;
	const typeChar = () => {
		if(i >= text.length - 1){
			clearInterval(typeWriter);
		}
		if(i % 2 != 1){
			typedChars += text[i];
			element.innerText = typedChars + "█";
		}else{
			typedChars += text[i];
			element.innerText = typedChars;
		}
		if(i == text.length - 1){
			element.innerText = text;
		}
		i++;
	};
	const typer = () => {
		typeWriter = setInterval(typeChar, delay);
	};
	onMount(() => {
		text = element.innerText;
		typer();
	});
</script>
<p bind:this={element} on:load={typer} >
	<slot/>
</p>