<!-- <script lang="ts">
    type Props = { link: string };
    let { link }: Props = $props();

    function deriveLabel() {
        let splitLink = link.split("/");
        return splitLink[splitLink.length - 1];
    }

    const label = $derived(deriveLabel());
    const icon = "📄"; // TODO: switch to SVG?
</script>

<span>
    <a href={link}>
        <span class="icon">{icon}</span>
        <span class="label">{label}</span>
    </a>
</span>

<style>
    a {
        display: inline-flex;
        flex-direction: row;
        gap: 0.2ch;
        align-items: center;
        color: var(--link-btn-fg);
        text-decoration: none;
    }

    .label {
        padding: 0.2em;
        border-radius: 0.2rem;
        background-color: var(--link-btn-bg);
    }
</style> -->
