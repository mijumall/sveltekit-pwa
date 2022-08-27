<script lang="ts">
	import { fade } from 'svelte/transition'

</script>

<main in:fade={{duration: 500}} out:fade={{duration: 100}}>
	<slot></slot>
</main>
