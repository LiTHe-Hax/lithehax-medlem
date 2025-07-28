<!-- <script lang="ts">
    import type { Snippet } from "svelte";

    type Props = { children: Snippet, isThin?: boolean };
    let { children, isThin = false }: Props = $props();
</script>

<section class={isThin ? "thin" : ""}>
    {@render children()}
</section>

<style>
    /* Mobile styling */
    @media screen and (min-width: 0px) {
        section {
            margin: 1rem;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: var(--section-bg);
            color: var(--section-fg);
        }
    }

    /* Desktop styling */
    @media screen and (min-width: 768px) {
        section {
            margin: 3rem;
            padding: 1.5rem;
            border-radius: 0.5rem;
            background-color: var(--section-bg);
            color: var(--section-fg);
        }

        section.thin {
            margin: 3rem auto;
            max-width: min(36rem, calc(100% - 6rem)); /* Fakes a 3rem horizontal margin */
        }
    }

    /* Ensures that there are no unnecessarily large gaps at top or bottom */
    section > :global(:first-child) { margin-top: 0; }
    section > :global(:last-child) { margin-bottom: 0; }

    section > :global(:is(h1, h2, h3, h4, h5, h6)) {
        color: var(--heading-fg);
    }
</style> -->
