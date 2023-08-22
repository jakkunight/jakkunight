<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>
<div class="max-w-screen min-h-screen m-0 p-4 bg-black flex flex-col justify-center items-center gap-4 text-cyan-500 font-primary text-sm overflow-y-auto overscroll-auto" >
    <Header/>
    <section class="w-full xl:w-[1080px] md:w-[720px] h-auto flex flex-col gap-4 border-double border-cyan-500 border-4 p-4 neon-cyan-100" >
        <slot/>
    </section>
    <Footer/>
</div>