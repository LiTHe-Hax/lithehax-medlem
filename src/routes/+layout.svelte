<script lang="ts">
	import { resolve } from "$app/paths";
	import type { LayoutProps } from "./$types";
	import "$lib/styles/global.scss"; // This stylesheet affects the entire site
	import headerLogo from "$lib/images/logos/header_logo.svg";

	const { children, data }: LayoutProps = $props();

	let shouldShowNav = $state(false);
	const toggleNav = () => (shouldShowNav = !shouldShowNav);
	const closeNav = () => (shouldShowNav = false);

	type NavEntry = { href: string; label: string };
	const navEntries: NavEntry[] = [
		{ href: resolve("/"), label: "Home" },
		{ href: resolve("/new-member"), label: "Member" },
		{ href: resolve("/events"), label: "Events" },
	];
</script>

<svelte:head>
	<link rel="canonical" href={data.canonicalHref} />
	<meta property="og:url" content={data.canonicalHref} />
</svelte:head>

<header class="mobile">
	<button onclick={toggleNav}></button>
	<img src={headerLogo} alt="LiTHe Hax logo" />
	<button style:visibility="hidden"></button>
	<div class={["nav-backdrop", shouldShowNav && "open"]} onclick={closeNav} role="none"></div>
	<nav class={[shouldShowNav && "open"]}>
		{#each navEntries as navEntry (navEntry.label)}
			<a href={navEntry.href} onclick={closeNav}>{navEntry.label}</a>
		{/each}
	</nav>
</header>

<header class="desktop">
	<img src={headerLogo} alt="LiTHe Hax logo" />
	<nav>
		{#each navEntries as navEntry (navEntry.label)}
			<a href={navEntry.href}>{navEntry.label}</a>
		{/each}
	</nav>
</header>

<main>
	{@render children()}
</main>

<style lang="scss">
	@use "$lib/styles/color.scss";
	@use "$lib/styles/size.scss";

	header {
		background: color.$green-1;

		&.mobile {
			$header-height: 4rem;

			display: grid;
			grid-template-columns: max-content 1fr max-content;
			position: sticky;
			top: 0;
			z-index: 1; // Needed since some elements in <main> mess with the stacking

			@media screen and (min-width: size.$min-desktop-width) {
				display: none;
			}

			button {
				border: 0;
				padding: 0;
				width: $header-height;
				height: $header-height;
				background: transparent;
				color: color.$green-2;
				font-family: fa-solid;
				font-size: 2rem;
			}

			img {
				padding: 0.5rem 0;
				width: 100%;
				height: $header-height;
				box-sizing: border-box;
			}

			.nav-backdrop {
				position: fixed;
				top: $header-height;
				left: 0;
				bottom: 0;
				right: 0;
				background: rgba(0, 0, 0, 0.5);
				opacity: 0;
				visibility: hidden;
				transition:
					opacity 150ms ease-out,
					visibility 150ms ease-out;

				&.open {
					opacity: 1;
					visibility: visible;
				}
			}

			nav {
				position: fixed;
				top: $header-height;
				left: 0;
				bottom: 0;
				min-width: 13rem; // To not look ridiculously small
				background: color.$black-1;
				transform: translateX(-100%);
				transition: transform 150ms ease-out;

				&.open {
					transform: translateX(0%);
				}

				a {
					display: block;
					border-bottom: 0.2rem solid rgba(0, 0, 0, 0.5);
					padding: 1rem;
					color: color.$green-2;
					font-weight: bold;
					line-height: 1;
					text-decoration: none;
				}
			}
		}

		&.desktop {
			padding: 2rem;

			@media screen and (max-width: size.$max-mobile-width) {
				display: none;
			}

			img {
				display: block; // Removes extra space below image
				margin-bottom: 1.5rem;
				width: 100%;
				height: 4rem;
			}

			nav {
				display: flex;
				flex-direction: row;
				justify-content: center;
				gap: 1rem;

				a {
					border: 0.15rem solid color.$green-2;
					padding: 0.5rem 1rem;
					border-radius: 0.5rem;
					background: color.$green-2;
					color: color.$green-1;
					line-height: 1;
					font-weight: bold;
					text-decoration: none;
					transform: scale(1);
					transition:
						background 150ms ease-out,
						color 150ms ease-out,
						transform 150ms ease-out;

					&:hover {
						background: color.$green-1;
						color: color.$green-2;
						transform: scale(1.1);
					}
				}
			}
		}
	}
</style>
