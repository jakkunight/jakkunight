<script lang="ts">
	import "../app.css";
	import profile from "$lib/assets/jakku-tree.png";

</script>
<header class="bg-black p-4 text-gray-300 sm:flex gap-4">
	<div class="flex gap-4 items-center justify-center sm:justify-normal m-4" >
		<div class="aspect-square h-16 rounded-full overflow-clip" >
			<img src={profile} alt="profile" class="w-full h-auto relative bottom-[4px]" />
		</div>
		<h3 class="text-white text-xl font-semibold">
			Jakku Night
		</h3>
	</div>
	<nav class="flex flex-1 sm:flex-row flex-col justify-between sm:items-center gap-4">
		<div class="w-full h-full flex sm:justify-center items-center" >
			<a href="/" class="hover:text-neon-blue-100">Inicio</a>
		</div>
		<div class="w-full h-full flex sm:justify-center items-center" >
			<a href="the-console-logs" class="hover:text-neon-blue-100">Blog personal: The Console Logs</a>
		</div>
		<div class="w-full h-full flex sm:justify-center items-center" >
			<a href="cursos" class="hover:text-neon-blue-100">Cursos</a>
		</div>
	</nav>
</header>
<div class="w-full h-full flex flex-1 flex-grow flex-col">
	<slot/>
</div>
<footer class="bg-black p-4 text-gray-300 flex flex-col justify-center items-center gap-4">
	<h2 class="text-white text-2xl font-bold">
		¡Mis Redes Sociales!
	</h2>
	<ul class="flex flex-1 justify-center items-center flex-col sm:flex-row gap-4" >
		<li class="w-full h-full flex justify-center items-center" >
			<a href="https://github.com/jakkunight">
				GitHub
			</a>
		</li>
		<li class="w-full h-full flex justify-center items-center" >
			<a href="https://www.youtube.com/channel/UCj9oLC2AaoHRqZffjXhOTLA">
				YouTube
			</a>
		</li>
		<li class="w-full h-full flex justify-center items-center" >
			<a href="https://twitch.tv/jakku_night">
				Twitch
			</a>
		</li>
		<li class="w-full h-full flex justify-center items-center" >
			<a href="https://discord.gg/aKRSkfcWRA">
				Discord
			</a>
		</li>
	</ul>
</footer>