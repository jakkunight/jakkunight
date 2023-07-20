<script lang="ts" >
    import Heading from "./Heading.svelte";
    export let heading:string;
    let collapsed = true;
    const toogleButton = () => {
        collapsed = !collapsed;
    };
</script>
<div class="flex flex-row items-center justify-between w-full p-2">
    <Heading>
        {heading}
    </Heading>
    <button on:click={toogleButton} class="text-2xl rounded-lg bg-blue-500 text-white aspect-square h-8">
        {#if collapsed}
            +
        {:else}
            -
        {/if}
    </button>
</div>
{#if !collapsed}
    <slot />
{/if}