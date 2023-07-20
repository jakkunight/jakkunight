<script>
    import Heading from "./Heading.svelte";
    import SocialLink from "./SocialLink.svelte";
    import github from "$lib/assets/github.svg";
    import discord from "$lib/assets/discord.svg";
    import youtube from "$lib/assets/youtube.svg";
    import twitch from "$lib/assets/twitch.svg";
</script>
<div class="flex flex-col flex-nowrap w-full h-max bg-blue-950 p-4 items-center justify-center text-center">
    <Heading>
        ¡Seguime en mis redes!
    </Heading>
    <div class="flex flex-nowrap flex-row w-full h-24 bg-blue-950 p-4 items-center justify-evenly">
        <SocialLink link={"https://github.com/jakkunight"} media={github} />
        <SocialLink link={"https://discord.gg/8ZvqWatGYY"} media={discord} />
        <SocialLink link={"https://m.youtube.com/channel/UCj9oLC2AaoHRqZffjXhOTLA"} media={youtube} />
        <SocialLink link={"https://twitch.tv/jakku_night"} media={twitch} />
    </div>
</div>