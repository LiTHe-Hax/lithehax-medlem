<!-- <script lang="ts">
    import type { Snippet } from "svelte";

    type Props = { disabled?: boolean, children?: Snippet };
    let { disabled = false, children }: Props = $props();
</script>

<button type="submit" disabled={disabled}>
    {#if children !== undefined}
        {@render children()}
    {/if}
</button>

<style>
    button {
        padding: 0.5rem;
        border: 0;
        border-radius: 0.25rem;
        background-color: var(--button-bg);
        color: var(--button-fg);
        box-shadow: 0 2px 4px 0 var(--button-shadow);
        font-size: 1em;
        font-weight: bold;
        transform: scaley(1);
        transition: all 150ms ease-out;
    }

    button:hover {
        background-color: var(--button-hover-bg);
        color: var(--button-hover-fg);
        transform: scaley(1.1);
    }
</style> -->
