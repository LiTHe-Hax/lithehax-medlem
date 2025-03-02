<script lang="ts">
    import "$lib/styles/global.css"; // This stylesheet affects the entire site.
    import LayoutHeader from "$lib/components/LayoutHeader.svelte";

    let { children } = $props();
</script>

<LayoutHeader />

<main>{@render children()}</main>

<style>
    main {
        width: 100vw;
    }
</style>
