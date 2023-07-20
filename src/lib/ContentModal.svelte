<script lang="ts" >
    import Heading from "./Heading.svelte";
    import Text from "./Text.svelte";
    //import hamburgerMenu from "$lib/assets/menu-hamburger.svg";
    export let heading:string = "";
    let visible = false;
    const openModal = () => {
        visible = true;
    };
    const closeModal = () => {
        visible = false;
    };
</script>
<div>
    <button on:click={openModal} class="rounded-lg p-2 border-double border-white border-2 flex justify-center items-center">
        <Text>Índice</Text>
    </button>
    {#if visible} 
        <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-full m-0 z-50 backdrop-blur-[500px] overflow-y-auto rounded-lg">
            <div class="z-50 bg-gray-700 sticky top-0 left-0 p-4 flex flex-row flex-nowrap justify-between items-center h-16 w-full">
                <Heading>
                    {heading}
                </Heading>
                <button on:click={closeModal} class="rounded-lg bg-red-500 text-white aspect-square h-full">
                    x
                </button>
            </div>
            <div class="z-50 p-4 rounded-lg flex flex-col">
                <slot />
            </div>
        </div>
    {/if}
</div>