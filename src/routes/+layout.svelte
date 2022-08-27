<script lang="ts">
	import { afterUpdate } from 'svelte'
	import Page from '$lib/Page.svelte';

	let thisLayout: Element
	afterUpdate(() => {
		thisLayout.scrollTo(0, 0);
	})
</script>

<Page>
	<main class="scaffold flex-column" bind:this={thisLayout}>
		<div>
			<h1>Welcome to SvelteKit</h1>
			<slot></slot>
		</div>
	</main>
</Page>

<style lang="scss">
	:global {
		.scaffold {
			position: fixed;
			width: 100%;
			height: 100%;
			overflow: scroll;
			top: 0;
			left: 0;
			padding: 10px;

			background-color: #e0e0e0;

			font-family: sans-serif;
			font-size: 22px;

			a {
				text-decoration-line: none;
			}
		}

		.flex-column {
			display: flex;
			flex-direction: column;
			justify-content: start;
			align-items: center;
		}
	}

</style>