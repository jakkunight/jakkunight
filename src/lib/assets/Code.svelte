<script lang="ts">
	export let code: string;
	export let lang: string;
	export let filename: string = "code";
</script>

<div>
	<h3>File: {'"' + filename + '"'}</h3>
	<pre>
		<code class="language-{lang}"></code>
	</pre>
</div>
