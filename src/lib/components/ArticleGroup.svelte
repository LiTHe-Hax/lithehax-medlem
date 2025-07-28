<script lang="ts">
	import type { Snippet } from "svelte";

	type Layout = "normal" | "thin";
	type Props = { children: Snippet; layout?: Layout };
	const { children, layout = "normal" }: Props = $props();
</script>

<section class={layout}>
	{@render children()}
</section>

<!--
	/* Mobile styling */
	@media screen and (min-width: 0px) {
		section {
			margin: 1rem;
		}
	}

	/* Desktop styling */
	@media screen and (min-width: 768px) {
		section {
			margin: 3rem;
		}

		section.thin {
			margin: 3rem auto;
			max-width: min(36rem, calc(100% - 6rem)); /* Fakes a 3rem horizontal margin */
		}
	}
-->

<style lang="scss">
	@use "$lib/styles/size.scss";

	$outer-mobile-gap: 1rem;
	$inner-mobile-gap: 1rem;

	$outer-desktop-gap: 3rem;
	$inner-desktop-gap: 1rem;

	section {
		&.normal {
			display: flex;
			flex-direction: column;

			@media screen and (max-width: size.$max-mobile-width) {
				gap: $inner-mobile-gap;
				margin: $outer-mobile-gap;
			}

			@media screen and (min-width: size.$min-desktop-width) {
				gap: $inner-desktop-gap;
				margin: $outer-desktop-gap;
			}
		}

		&.thin {
			display: flex;
			flex-direction: column;

			@media screen and (max-width: size.$max-mobile-width) {
				// Same as the normal layout, since mobile screens are thin already
				gap: $inner-mobile-gap;
				margin: $outer-mobile-gap;
			}

			@media screen and (min-width: size.$min-desktop-width) {
				gap: $inner-desktop-gap;
				margin: $outer-desktop-gap auto;
				// Padding imitates a horizontal margin
				padding: 0 $outer-desktop-gap;
				// Calc counteracts width removed by padding
				max-width: calc(36rem + $outer-desktop-gap * 2);
				box-sizing: border-box;
			}
		}
	}
</style>
