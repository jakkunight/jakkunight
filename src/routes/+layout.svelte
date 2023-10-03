<script lang="ts">
	import "../app.css";
</script>
<header class="bg-black p-4 text-gray-300">
	<nav class="flex flex-1 justify-between items-center gap-4">
		<div class="w-full h-full flex justify-center items-center" >
			<a href="/" class="hover:text-neon-neutral-500">Inicio</a>
		</div>
		<div class="w-full h-full flex justify-center items-center" >
			<a href="the-console-logs" class="hover:text-neon-neutral-500">Blog personal: The Console Logs</a>
		</div>
		<div class="w-full h-full flex justify-center items-center" >
			<a href="cursos" class="hover:text-neon-neutral-500">Cursos</a>
		</div>
	</nav>
</header>
<slot/>
<footer class="bg-black p-4 text-gray-300 flex flex-col justify-center items-center gap-4">
	<h2 class="text-white text-2xl font-bold">
		¡Mis Redes Sociales!
	</h2>
	<ul class="flex flex-1 justify-between items-center flex-row space-x-4" >
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