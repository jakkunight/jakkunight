<script lang="ts" >
    export let fn = (event:Event) => {};
    export let link:string = "";
    export let topic:string|HTMLElement|any = "";
    import { BASE_URL } from "./constants";
    const className = {
        default: "text-white text-lg m-1 p-1"
    }
</script>
<div class={className.default}>
    <a href={BASE_URL + link} on:click={fn} >
        {#if !topic}
            <slot/>
        {:else}
            {topic}
        {/if}
    </a>
</div>