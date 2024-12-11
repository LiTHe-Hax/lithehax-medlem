<script lang="ts">
    type Props = { href: string, label: string };
    let { href, label }: Props = $props();
</script>

<a href={href}>{label}</a>

<style>
    a {
        padding: 0.5rem 1rem;
        border: 0.15rem solid var(--header-fg);
        border-radius: 0.5rem;
        background-color: var(--header-fg);
        color: var(--header-bg);
        line-height: 1;
        font-weight: bold;
        text-decoration: none;
        transition: all 150ms ease-out;
    }

    a:hover {
        background-color: var(--header-bg);
        color: var(--header-fg);
        transform: scale(1.1);
    }
</style>