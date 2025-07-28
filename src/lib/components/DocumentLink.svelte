<script lang="ts">
	type Props = { href: string };
	const { href }: Props = $props();

	function deriveLabel() {
		const splitHref = href.split("/");
		return splitHref[splitHref.length - 1];
	}

	function deriveIcon() {
		const splitHref = href.split(".");
		const extension = splitHref[splitHref.length - 1];
		switch (extension) {
			case "pdf":
				return "";
			case "pptx":
				return "";
			case "7z":
			case "zip":
				return "";
			default:
				return "";
		}
	}

	const label = $derived.by(deriveLabel);
	const icon = $derived.by(deriveIcon);
</script>

<a {href}>{icon} {label}</a>

<style lang="scss">
	@use "$lib/styles/color.scss";

	a {
		display: inline-block;
		padding: 0.3rem;
		border-radius: 0.2rem;
		background: color.$gray-3;
		color: color.$white;
		text-decoration: none;
		line-height: 1;
		word-break: break-all;

		transition: background 150ms ease-out;

		&:hover {
			background: color.$gray-4;
		}
	}
</style>
