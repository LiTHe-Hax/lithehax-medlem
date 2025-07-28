<!-- <script lang="ts">
    import logo from "$lib/images/header-logo.svg";
    import { base } from "$app/paths";

    let navIsOpen = $state(false);

    function toggleNav() {
        navIsOpen = !navIsOpen;
    }
</script>

{#snippet hamburgerSvg()}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
{/snippet}

<header class="mobile">
    <button onclick={toggleNav}>{@render hamburgerSvg()}</button>
    <img src={logo} alt="logo" />
    <button style="visibility: hidden;">{@render hamburgerSvg()}</button>

    <div class={"nav-backdrop " + (navIsOpen ? "open" : "closed")}
        onclick={toggleNav} role="none"></div>
    <nav class={navIsOpen ? "open" : "closed"}>
        <a href={`${base}/`} onclick={toggleNav}>Home</a>
        <a href={`${base}/new-member`} onclick={toggleNav}>Member</a>
        <a href={`${base}/events`} onclick={toggleNav}>Events</a>
    </nav>
</header>

<header class="desktop">
    <img src={logo} alt="logo" />
    <nav>
        <a href={`${base}/`}>Home</a>
        <a href={`${base}/new-member`}>Member</a>
        <a href={`${base}/events`}>Events</a>
    </nav>
</header>

<style>
    /* Mobile styling */
    @media screen and (min-width: 0px) {
        .mobile { display: grid; }
        .desktop { display: none; }
    }

    .mobile {
        /* Display included in media query */
        grid-template-columns: max-content 1fr max-content;
        grid-template-areas: "left" "logo" "right";
        position: sticky;
        top: 0;
        /* z-index is needed since the transforms and relative positions
           of certain elements in <main> mess with the stacking */
        z-index: 1;
        width: 100vw;
        background-color: var(--header-bg);
        color: var(--header-fg);
    }

    .mobile img {
        margin: 0.5rem 0;
        width: 100%;
        height: 3rem;
        justify-self: center;
        align-self: center;
    }

    .mobile button {
        display: flex;
        align-items: center;
        border: 0;
        padding: 1rem;
        background-color: transparent;
    }

    .mobile button svg {
        height: 2rem;
        fill: var(--header-fg);
    }

    .mobile .nav-backdrop {
        position: fixed;
        top: 4rem;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 150ms, visibility 150ms ease;
    }

    .mobile .nav-backdrop.open {
        opacity: 1;
        visibility: visible;
    }

    .mobile .nav-backdrop.closed {
        opacity: 0;
        visibility: hidden;
    }

    .mobile nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 4rem;
        bottom: 0;
        min-width: 13rem; /* To not look ridiculously small */
        background-color: var(--bg);
        transition: transform 150ms ease;
    }

    .mobile nav.open {
        transform: translateX(0%);
    }

    .mobile nav.closed {
        transform: translateX(-100%);
    }

    .mobile nav a {
        border-bottom: 3px solid rgba(0, 0, 0, 0.35);
        padding: 1rem;
        color: var(--header-fg);
        line-height: 1;
        font-weight: bold;
        text-decoration: none;
    }

    /* Desktop styling */
    @media screen and (min-width: 768px) {
        .mobile { display: none; }
        .desktop { display: flex; }
    }

    .desktop {
        /* Display included in media query */
        flex-direction: column;
        box-sizing: border-box;
        padding: 2rem;
        width: 100vw;
        background-color: var(--header-bg);
        color: var(--header-fg);
    }

    .desktop img {
        margin-bottom: 1.5rem;
        max-width: 100%;
        height: 4rem;
    }

    .desktop nav {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
    }

    .desktop nav a {
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

    .desktop nav a:hover {
        background-color: var(--header-bg);
        color: var(--header-fg);
        transform: scale(1.1);
    }
</style>
 -->
