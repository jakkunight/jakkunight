<script lang="ts" >
    export let link:string = "";
    export let topic:string = "";
</script>
<div class="w-full text-white text-xl justify-evenly m-4">
    <a href={link} >
        <h3>
            {#if !topic}
                <slot/>
            {:else}
                {topic}
            {/if}
        </h3>
    </a>
</div>