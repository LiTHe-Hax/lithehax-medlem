<script lang="ts">
	import type { Snippet } from "svelte";

	import Section from "./Section.svelte";

	type SponsorLogo = {
		logo: string;
		alt: string;
	};

	interface EventSectionProps {
		children: Snippet;
		hasPassed?: boolean;
		title: string;
		date?: string;
		time?: string;
		location?: string;
		mapLink?: string;
		sponsorLogos?: SponsorLogo[];
	}

	let {
		children,
		hasPassed,
		title,
		date,
		time,
		location,
		mapLink,
		sponsorLogos
	}: EventSectionProps = $props();
</script>

{#snippet dateSvg()}
	<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path
			d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
	</svg>
{/snippet}

{#snippet timeSvg()}
	<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path
			d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
	</svg>
{/snippet}

{#snippet locationSvg()}
	<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path
			d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
	</svg>
{/snippet}

<Section isThin isTranslucent={hasPassed}>
	<h2 class="title">{title}</h2>
	<div class="subtitle">
		<span>
			{@render dateSvg()}
			{#if date}
				{date}
			{:else}
				(to be announced)
			{/if}
		</span>
		<span>
			{@render timeSvg()}
			{#if time}
				{time}
			{:else}
				(to be announced)
			{/if}
		</span>
		<span>
			{@render locationSvg()}
			{#if location}
				{#if mapLink}
					<a href={mapLink}>{location}</a>
				{:else}
					{location}
				{/if}
			{:else}
				(to be announced)
			{/if}
		</span>
	</div>
	{@render children()}
	{#if sponsorLogos}
		<hr />
		<div class="sponsor-logos">
			{#each sponsorLogos as { logo, alt }, idx (idx)}
				<img src={logo} {alt} />
			{/each}
		</div>
	{/if}
</Section>

<style lang="scss">
	@use "$lib/styles/colors.scss";

	.title {
		margin-bottom: 0;
	}

	.subtitle {
		$subtitle-font-size: 0.9em;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 0.7em;

		// Margin is equal to common default for <h2> elements
		margin-bottom: calc(1.5em / $subtitle-font-size * 0.75em);
		color: colors.$green-2;
		fill: colors.$green-2;
		font-size: $subtitle-font-size;

		span {
			// Using inline-flex to center SVG because vertical-align sucks at centering
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			column-gap: 0.2rem;

			svg {
				height: 1em;
			}
		}
	}

	.sponsor-logos {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		margin-top: 1rem;

		img {
			height: 2rem;
		}
	}
</style>
