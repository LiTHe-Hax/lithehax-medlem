<script lang="ts">
    export let title: string;
    export let description: string;

    const effectiveTitle = title ? `LiTHe Hax - ${title}` : 'LiTHe Hax';
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
    <slot />
</svelte:head>