<script lang="ts">
	import { onMount } from "svelte";
	export let href:string|undefined = "";
	export let delay = 10;
	let element:HTMLElement;
	let container:HTMLElement;
	let text = "";
	let currentText = "";
	let i = 0;
	let pid = 0;
	let decorators = {
		begin: "『 ",
		end: " 』"
	}
	const charMap = (index = 0, length = 1):number => (Math.trunc(length / 100 * index) % length);
	const show = () => {
		if(i >= 99){
			clearInterval(pid);
		}
		container.style.left = `${50 - i / 2}%`;
		element.style.width = `${i}%`;
		if(
			i > 0 &&
			charMap(Math.trunc(50 - (i / 2)), text.length) !== charMap(Math.trunc(50 - (i + 1) / 2), text.length) &&
			charMap(Math.trunc(50 + (i / 2)), text.length) !== charMap(Math.trunc(50 - (i - 1) / 2), text.length)
		){
			console.log("text:", text);
			console.log("current:", currentText);
			console.log("index:", i);
			console.log("map:", Math.trunc(50 - (i / 2)), text.length);
			
			currentText = text[charMap(Math.trunc(50 - i / 2), text.length)] + currentText + text[charMap(Math.trunc(50 + i / 2), text.length)];
		}
		if(i === 0){
			currentText = text[charMap(50, text.length)];
		}
		if(i === 99){
			currentText = text;
		}
		element.innerText = currentText;
		i++;
	};
	const display = () => {
		pid = setInterval(show, delay);
	};
	onMount(() => {
		text = element.innerText;
		element.innerText = "";
		display();
	});
</script>
<span class="flex w-fit h-auto justify-center items-center">
	<span id={href} bind:this={container} class="relative font-bold text-neon-cyan-300" >
		<span>
			{decorators.begin}
		</span>
		<span bind:this={element} class="text-clip overflow-clips w-0">
			<slot/>
		</span>
		<span>
			{decorators.end}
		</span>
	</span>
</span>
