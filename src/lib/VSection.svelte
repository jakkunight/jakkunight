<script lang="ts" >
	import HLeftSeparator from "$lib/assets/separator-h-left.svg";
	import VLeftSeparator from "$lib/assets/separator-v-left.svg";
	import HRightSeparator from "$lib/assets/separator-h-right.svg";
	import VRightSeparator from "$lib/assets/separator-v-right.svg";
	import HMainBG from "$lib/assets/main-horizontal.svg";
	import VMainBG from "$lib/assets/main-vertical.svg";
</script>
<section class="md:bg-[{HMainBG}]" >
	<div class="md:bg-[{HLeftSeparator}]" ></div>
	<slot/>
	<div class="md:bg-[{HRightSeparator}]" ></div>
</section>