<script lang="ts">
    import "$lib/styles/global.css"; // This stylesheet affects the entire site.
    import NavButton from "$lib/components/NavButton.svelte";
</script>

<header>
    <span class="title">LiTHe Hax</span>
    <nav>
        <NavButton href="/" label="Home" />
        <NavButton href="/new-member" label="Member" />
    </nav>
</header>

<main>
    <slot />
</main>

<style>
    header {
        box-sizing: border-box;
        padding: 2rem;
        width: 100vw;
        background-color: var(--header-bg);
        color: var(--header-fg);
    }

    .title {
        display: block; /* Makes centering work. */
        margin-bottom: 1rem;
        text-align: center;
        font-size: 4em;
        font-weight: bold;
        line-height: 1; /* Makes space above title consistent with space below nav */
    }

    nav {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
    }

    main {
        width: 100vw;
    }
</style>