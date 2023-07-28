<script>
    import SelfCard from "./SelfCard.svelte";
    import CollapsedMenu from "./CollapsedMenu.svelte";
    import TopicLink from "./TopicLink.svelte";
    import ContentModal from "./ContentModal.svelte";
    import Navbar from "./Navbar.svelte";
</script>
<div class="h-18 w-full bg-blue-950 flex flex-row justify-between items-center sticky top-0 flex-nowrap space-x-4 p-4" >
    
    <!-- <ContentModal heading="Menú" >
        <CollapsedMenu heading={"The Console Logs"} >
            <TopicLink link="/the-console-logs/maitei" >
                ¡Maiteĩ!
            </TopicLink>
            <TopicLink link="/the-console-logs/nos-pasamos-a-svelte" >
                ¡Nos pasamos a Svelte!
            </TopicLink>
        </CollapsedMenu>
    </ContentModal> -->
    <Navbar />
</div>