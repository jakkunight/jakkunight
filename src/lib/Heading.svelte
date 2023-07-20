<script lang="ts" >
    export let heading:string = "";
</script>
<h1 class="text-2xl text-white font-bold m-4">
    {#if heading}
        {heading}
    {:else}
        <slot />
    {/if}
</h1>