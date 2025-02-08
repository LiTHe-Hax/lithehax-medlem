<script lang="ts">
    import { base } from "$app/paths";
    import "$lib/styles/global.css"; // This stylesheet affects the entire site.
    import NavButton from "$lib/components/NavButton.svelte";
    import logo from "$lib/images/header-logo.svg";
</script>

<header>
    <img class="logo" src={logo} alt="logo" />
    <nav>
        <NavButton href={`${base}/`} label="Home" />
        <NavButton href={`${base}/new-member`} label="Member" />
        <NavButton href={`${base}/events`} label="Events" />
    </nav>
</header>

<main>
    <slot />
</main>

<style>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 2rem;
        width: 100vw;
        background-color: var(--header-bg);
        color: var(--header-fg);
    }

    .logo {
        height: 4rem;
        max-width: 100%;
        margin-bottom: 1.5rem;
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
