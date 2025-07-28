<!-- <script lang="ts">
    import "$lib/styles/global.css"; // This stylesheet affects the entire site.
    import LayoutHeader from "$lib/components/LayoutHeader.svelte";

    interface LayoutProps {
        children: any;
        data: {
            canonicalHref: string;
        };
    }

    // In Runes mode, we extract our data using $props()
    let { children, data } = $props() as LayoutProps;
</script>

<svelte:head>
    <link rel="canonical" href="{data.canonicalHref}" />
    <meta property="og:url" content="{data.canonicalHref}">
</svelte:head>

<LayoutHeader />

<main>{@render children()}</main>

<style>
    main {
        width: 100vw;
    }
</style>
 -->
