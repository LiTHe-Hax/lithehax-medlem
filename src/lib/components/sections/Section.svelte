<script lang="ts">
	import type { Snippet } from "svelte";

	interface SectionProps {
		children?: Snippet;
		isThin?: boolean;
		isTranslucent?: boolean;
	}

	let { children, isThin, isTranslucent }: SectionProps = $props();
</script>

<section class={[isThin && "thin", isTranslucent && "translucent"]}>
	{#if children}
		{@render children()}
	{/if}
</section>

<style lang="scss">
	@use "$lib/styles/colors.scss";
	@use "$lib/styles/sizes.scss";
	@use "$lib/styles/mixins.scss";

	section {
		border-radius: 0.5rem;
		background-color: colors.$bg-2;
		color: colors.$fg;

		@media screen and (max-width: sizes.$max-mobile-width) {
			margin: sizes.$mobile-section-spacing 0;
			padding: 1rem;
		}

		@media screen and (min-width: sizes.$min-desktop-width) {
			margin: sizes.$desktop-section-spacing auto;
			padding: 1.5rem;

			&.thin {
				box-sizing: border-box; // Makes the specified max-width the actual max width
				max-width: sizes.$thin-section-max-width;
			}
		}

		&.translucent {
			> :global(*) {
				@include mixins.transition(ease-out, 150ms, opacity);
				opacity: 0.5;
			}

			&:hover > :global(*) {
				opacity: 1;
			}

			> :global(img) {
				@include mixins.transition(ease-out, 150ms, opacity, filter);
				filter: saturate(50%);
			}

			&:hover > :global(*) {
				filter: saturate(100%);
			}
		}

		@include mixins.remove-child-top-bottom-margins();
	}
</style>
