<script lang="ts">
	import { base } from "$app/paths";

	import "$lib/styles/global.scss";
	import headerLogo from "$lib/images/logos/header_logo.svg";

	let { children } = $props();

	let navIsOpen = $state(false);

	function toggleNav() {
		navIsOpen = !navIsOpen;
	}
</script>

{#snippet navButtons()}
	<a href={`${base}/`} onclick={toggleNav}>Home</a>
	<a href={`${base}/new-member`} onclick={toggleNav}>Member</a>
	<a href={`${base}/events`} onclick={toggleNav}>Events</a>
{/snippet}

{#snippet hamburgerSvg()}
	<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path
			d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
	</svg>
{/snippet}

<!-- There are two different header elements for mobile and desktop so that there's no weird
 transition when switching between them. -->

<header class="mobile">
	<button onclick={toggleNav}>{@render hamburgerSvg()}</button>
	<img src={headerLogo} alt="LiTHe Hax logo" />
	<button style:visibility="hidden">{@render hamburgerSvg()}</button>
	<div class={["nav-backdrop", navIsOpen && "open"]} onclick={toggleNav} role="none"></div>
	<nav class={[navIsOpen && "open"]}>{@render navButtons()}</nav>
</header>

<header class="desktop">
	<img src={headerLogo} alt="LiTHe Hax logo" />
	<nav>{@render navButtons()}</nav>
</header>

<main>
	{@render children()}
</main>

<style lang="scss">
	@use "$lib/styles/colors.scss";
	@use "$lib/styles/sizes.scss";
	@use "$lib/styles/mixins.scss";

	header.mobile {
		$header-height: 3rem;

		display: grid;
		grid-template-columns: max-content 1fr max-content;
		position: sticky;
		top: 0;
		/* z-index is needed since the transforms and relative positions
           of certain elements in <main> mess with the stacking */
		z-index: 1;
		width: 100lvw;
		background-color: colors.$green-1;
		color: colors.$green-2;

		@media screen and (min-width: sizes.$min-desktop-width) {
			display: none;
		}

		img {
			margin: 0.5rem 0;
			width: 100%;
			height: 3rem;
		}

		button {
			@include mixins.transition(ease-out, 150ms, fill);

			display: flex;
			align-items: center;
			padding: 1rem;
			border: 0;
			background-color: transparent;
			fill: colors.$green-2;

			&:hover {
				fill: colors.$green-3;
			}

			svg {
				height: 2rem;
			}
		}

		.nav-backdrop {
			@include mixins.transition(ease-out, 150ms, opacity, visibility);

			position: fixed;
			top: 4rem;
			left: 0;
			bottom: 0;
			right: 0;
			background-color: rgba(0, 0, 0, 0.5);
			opacity: 0;
			visibility: hidden;

			&.open {
				opacity: 1;
				visibility: visible;
			}
		}

		nav {
			@include mixins.transition(ease-out, 150ms, transform);

			display: flex;
			flex-direction: column;
			position: fixed;
			top: 4rem;
			bottom: 0;
			min-width: 13rem; /* To not look ridiculously small */
			background-color: colors.$bg-1;
			transform: translateX(-100%);

			&.open {
				transform: translateX(0%);
			}

			a {
				@include mixins.transition(ease-out, 150ms, color);

				padding: 1rem;
				border-bottom: 3px solid rgba(0, 0, 0, 0.5);
				color: colors.$green-2;
				line-height: 1;
				font-weight: bold;
				text-decoration: none;

				&:hover {
					color: colors.$green-3;
				}
			}
		}
	}

	header.desktop {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 2rem;
		width: 100lvw;
		background-color: colors.$green-1;

		@media screen and (max-width: sizes.$max-mobile-width) {
			display: none;
		}

		img {
			margin-bottom: 1.5rem;
			width: 100%;
			height: 4rem;
		}

		nav {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			justify-content: center;

			a {
				@include mixins.transition(ease-out, 150ms, background-color, color, transform);

				padding: 0.5rem 1rem;
				border: 0.15rem solid colors.$green-2;
				border-radius: 0.5rem;
				background-color: colors.$green-2;
				color: colors.$green-1;
				line-height: 1;
				font-weight: bold;
				text-decoration: none;
				transform: scale(1);

				&:hover {
					background-color: colors.$green-1;
					color: colors.$green-2;
					transform: scale(1.1);
				}
			}
		}
	}

	main {
		box-sizing: border-box;
		width: 100lvw;

		@media screen and (max-width: sizes.$max-mobile-width) {
			padding: 1rem;
		}

		@media screen and (min-width: sizes.$min-desktop-width) {
			padding: 3rem;
		}

		@include mixins.remove-child-top-bottom-margins();
	}
</style>
