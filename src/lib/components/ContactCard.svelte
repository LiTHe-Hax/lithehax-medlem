<script lang="ts">
	import placeholderImage from "$lib/images/contacts/placeholder.png";

	interface ContactCardProps {
		fullName: string;
		hackerTag: string;
		position: string;
		email?: string;
		image?: string;
	}

	let { fullName, hackerTag, position, email, image }: ContactCardProps = $props();
</script>

<div class="contact-card">
	<img src={image ? image : placeholderImage} alt={fullName} />

	<div class="info">
		<div class="names">
			<span>{fullName}</span>
			<span>@{hackerTag}</span>
		</div>
		<span class="position">{position}</span>
		{#if email}
			<a class="email" href={`mailto:${email}`}>{email}</a>
		{:else}
			<span class="email">(mail coming soon)</span>
		{/if}
	</div>
</div>

<style lang="scss">
	@use "$lib/styles/colors.scss";

	@mixin ellipsized-text {
		overflow: hidden;
		text-overflow: ellipsis;
		text-wrap: nowrap;
	}

	.contact-card {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;

		img {
			border-radius: 50%;
			width: 8rem;
			height: 8rem;
		}

		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			min-width: 0; // Makes info box only take up remaining space when small

			.names {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				column-gap: 0.5ch;
				color: colors.$green-2;
				font-size: 1.175em;
				font-weight: bold;

				span {
					@include ellipsized-text;
				}
			}

			.position {
				@include ellipsized-text;

				margin-bottom: 1em;
			}

			.email {
				@include ellipsized-text;
			}
		}
	}
</style>
