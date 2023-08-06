<script lang="ts">
	import { onMount } from "svelte";
	export let href:string|undefined = "";
	export let delay = 0;
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
	const show = () => {
		if(i >= 100){
			clearInterval(pid);
		}
		container.style.left = `${50 - i / 2}%`;
		element.style.width = `${i}%`;
		if(
			text[Math.round(text.length / 100 * i)] !== element.innerText[element.innerText.length - 1] &&
			text[Math.round(text.length / 100 * i)] !== undefined
		){
			currentText += text[Math.round(text.length / 100 * i)];
			element.innerText = currentText;
		}
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
<span class="flex flex-row flex-nowrap w-fit h-auto justify-center items-center">
	<span id={href} bind:this={container} class="relative font-bold text-neon-cyan-300" >
		<span>
			{decorators.begin}
		</span>
		<span bind:this={element} class="text-clip overflow-hidden w-0">
			<slot/>
		</span>
		<span>
			{decorators.end}
		</span>
	</span>
</span>
