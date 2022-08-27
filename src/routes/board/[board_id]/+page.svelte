<script lang="ts">
	import { page } from '$app/stores';
	console.log($page.params);
</script>

<main>
	<p>Board id {$page.params.board_id}</p> 
</main>