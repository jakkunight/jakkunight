<script>
    import Footer from "$lib/Footer.svelte";
    import "../app.css";
    import Navbar from "../lib/Navbar.svelte";
</script>
<div class="bg-black text-gray-400 font-sans min-h-screen w-screen m-0 box-border p-4" >
    <Navbar />
    <div class="min-h-screen w-full neon-cyan-100 p-1 m-0" >
        <slot/>
    </div>
    <!-- <Footer/> -->
</div>