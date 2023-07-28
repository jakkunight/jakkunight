<script lang="ts" >
	import HBottomSeparator from "$lib/assets/separator-h-bottom.svg";
	import VBottomSeparator from "$lib/assets/separator-v-bottom.svg";
	import HTopSeparator from "$lib/assets/separator-h-top.svg";
	import VTopSeparator from "$lib/assets/separator-v-top.svg";
	import HMainBG from "$lib/assets/main-horizontal.svg";
	import VMainBG from "$lib/assets/main-vertical.svg";
</script>
<section class="w-full h-auto bg-[{HMainBG}]" >
	<img src={HTopSeparator} alt="alt" />
	<slot/>
	<img src={HBottomSeparator} alt="alt" />
</section>
