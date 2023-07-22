<script lang="ts" >
    import { BASE_URL } from "./constants";
    export let src:any = null;
    export let alt:string = "";
</script>
<img src={BASE_URL + src} alt={alt} class="w-full h-auto" />