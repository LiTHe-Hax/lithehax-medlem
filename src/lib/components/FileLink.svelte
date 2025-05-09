<script lang="ts">
	interface FileLinkProps {
		link: string;
	}

	let { link }: FileLinkProps = $props();

	function deriveLabel() {
		let splitLink = link.split("/");
		return splitLink[splitLink.length - 1];
	}

	function deriveIcon() {
		const splitLink = link.split(".");
		const fileExt = splitLink[splitLink.length - 1];

		switch (fileExt) {
			case "pdf":
			case "pptx":
				// Document
				return "📄";
			case "zip":
				// Archive
				return "📦";
			case "png":
				// Picture
				return "📷";
			case "mp4":
				// Video
				return "🎬";
			case "wav":
				// Audio
				return "🎵";
			default:
				// General file
				return "📎";
		}
	}

	const label = $derived.by(deriveLabel);
	const icon = $derived.by(deriveIcon);
</script>

<span>
	<a href={link}>
		<span class="icon">{icon}</span>
		<span class="label">{label}</span>
	</a>
</span>

<style lang="scss">
	@use "$lib/styles/colors.scss";
	@use "$lib/styles/mixins.scss";

	a {
		display: inline-flex;
		flex-direction: row;
		gap: 0.2ch;
		align-items: center;

		.label {
			@include mixins.transition(ease-out, 150ms, background-color);

			padding: 0.2rem;
			border-radius: 0.2rem;
			background-color: colors.$gray-2;
			color: colors.$fg;
		}

		&:hover .label {
			background-color: colors.$gray-3;
		}
	}
</style>
