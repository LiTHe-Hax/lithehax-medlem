<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = { children: Snippet };
	const { children }: Props = $props();
</script>

<article>
	{@render children()}
</article>

<style lang="scss">
	@use "$lib/styles/color.scss";
	@use "$lib/styles/size.scss";

	article {
		border-radius: 0.5rem;
		background: color.$black-2;
		color: color.$white;

		@media screen and (max-width: size.$max-mobile-width) {
			padding: 1rem;
		}

		@media screen and (min-width: size.$min-desktop-width) {
			padding: 1.5rem;
		}

		// Ensures that there are no unnecessarily large gaps at top
		> :global(:first-child) {
			margin-top: 0;
		}

		// Ensures that there are no unnecessarily large gaps at bottom
		> :global(:last-child) {
			margin-bottom: 0;
		}
	}
</style>
