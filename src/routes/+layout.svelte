<script>
    import Footer from "$lib/Footer.svelte";
import "../app.css";
    import Header from "../lib/Header.svelte";
</script>
<div class="bg-black text-gray-400 font-sans min-h-screen w-screen m-0 box-border p-0" >
    <Header/>
    <div class="min-h-screen w-full" >
        <slot/>
    </div>
    <Footer/>
</div>