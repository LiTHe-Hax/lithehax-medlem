<script lang="ts">
	import type { Snippet } from "svelte";

	interface SectionProps {
		children?: Snippet;
		isThin?: boolean;
	}

	let { children, isThin }: SectionProps = $props();
</script>

<section class={[isThin && "thin"]}>
	{#if children}
		{@render children()}
	{/if}
</section>

<style lang="scss">
	@use "$lib/styles/colors.scss";
	@use "$lib/styles/sizes.scss";

	section {
		border-radius: 0.5rem;
		background-color: colors.$bg-2;
		color: colors.$fg;

		@media screen and (max-width: sizes.$max-mobile-width) {
			margin: 1rem;
			padding: 1rem;
		}

		@media screen and (min-width: sizes.$min-desktop-width) {
			$margin: 3rem;

			margin: $margin;
			padding: 1.5rem;

			&.thin {
				box-sizing: border-box; // Needed for the fake margin to work correctly
				margin: $margin auto;
				max-width: min(39rem, calc(100% - $margin * 2)); // Fakes a horizontal margin
			}
		}

		// Ensures that there are no unnecessarily large gaps at top or bottom
		> :global(*) {
			&:first-child {
				margin-top: 0;
			}

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
