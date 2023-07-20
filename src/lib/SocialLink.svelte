<script lang="ts" >
    export let link:string = "";
    export let media:any = null;
</script>
<div class="bg-gradient-to-tl from-sky-500 to-blue-800 aspect-square rounded-full h-16 w-min overflow-hidden border-4 border-double border-white">
    <a href={link}>
        <img src={media} alt="media" />
    </a>
</div>