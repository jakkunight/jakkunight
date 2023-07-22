<script lang="ts" >
    export let link:string = "";
    export let topic:string = "";
    import { BASE_URL } from "./constants";
</script>
<div class="w-full text-white text-xl justify-evenly m-4">
    <a href={BASE_URL + link} >
        <h3>
            {#if !topic}
                <slot/>
            {:else}
                {topic}
            {/if}
        </h3>
    </a>
</div>