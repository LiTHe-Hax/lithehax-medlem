<script lang="ts">
	import type { Snippet } from "svelte";

	interface MainHeadingProps {
		children: Snippet;
		isThin?: boolean;
	}

	let { children, isThin }: MainHeadingProps = $props();
</script>

<h1 class={[isThin && "thin"]}>{@render children()}</h1>

<style lang="scss">
	@use "$lib/styles/sizes.scss";

	h1 {
		$distance-from-next-section: 1rem;

		margin: 0 auto;
		font-size: 1.75rem;

		@media screen and (max-width: sizes.$max-mobile-width) {
			margin-top: sizes.$mobile-section-spacing;
			margin-bottom: calc($distance-from-next-section - sizes.$mobile-section-spacing);
		}

		@media screen and (min-width: sizes.$min-desktop-width) {
			margin-top: sizes.$desktop-section-spacing;
			margin-bottom: calc($distance-from-next-section - sizes.$desktop-section-spacing);

			&.thin {
				max-width: sizes.$thin-section-max-width;
			}
		}
	}
</style>
