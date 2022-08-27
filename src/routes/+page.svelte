<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.d)
</script>

<main>
	<p>This is a root page.</p>

	<a href="/settings">Settings</a>
	<br>
	<a href="/board">Board</a>

	<div class="long-box">aa</div>
</main>

<style>
	.long-box {
		height: 1000px;
		background-color: lightgreen;
	}
</style>
