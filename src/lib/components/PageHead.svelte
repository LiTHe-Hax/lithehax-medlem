<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children?: Snippet<[]>;
        title: string;
        description: string;
    };

    const { children, title, description }: Props = $props();
    const effectiveTitle = $derived(title ? `LiTHe Hax - ${title}` : 'LiTHe Hax');
</script>

<svelte:head>
    <title>{effectiveTitle}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={effectiveTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="{__BASE_URL__}/favicon.png">
    <meta property="og:image:alt" content="LiTHe Hax">
    <meta property="og:site_name" content="LiTHe Hax">
    <meta property="og:type" content="website">
    {#if children}
        {@render children()}
    {/if}
</svelte:head>