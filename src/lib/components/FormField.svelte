<!-- <script lang="ts">
    import type { Snippet } from "svelte";

    type InputType = "text" | "email" | "select" | "submit";
    type Props = {
        name: string,
        label: string,
        type: InputType,
        required?: boolean,
        error?: string,
        children?: Snippet,
    };
    let { name, label, type, required = false, error, children }: Props = $props();
</script>

<div class={`field${error !== undefined ? " error": ""}`}>
    <label for={name}>{label}</label>

    <div class="input-container">
        {#if type === "text"}
            <input id={name} name={name} type="text" required={required} />
        {:else if type === "email"}
            <input id={name} name={name} type="email" required={required} />
        {:else if type === "select"}
            <select id={name} name={name} required={required}>
                {#if children !== undefined}
                    {@render children()}
                {/if}
            </select>
        {:else}
            <span>UNSUPPORTED INPUT FIELD</span>
        {/if}

        {#if error !== undefined}
            <div class="error-tooltip">
                <span>{error}</span>
            </div>
        {/if}
    </div>
</div>

<style>
    .field {
        display: inline-flex;
        flex-direction: column;
    }

    label {
        align-self: flex-start;
        color: var(--input-label-fg);
    }

    input, select {
        box-sizing: border-box;
        width: 100%;
        padding: 0.5rem;
        border: 1px solid var(--input-border);
        border-radius: 0.25rem;
        background-color: var(--input-bg);
        color: var(--input-fg);
        box-shadow: inset 0 1px 3px 1px var(--input-shadow);
    }

    .error input,
    .error select {
        border-color: var(--error-color);
    }

    .input-container {
        position: relative;
    }

    .error-tooltip {
        position: absolute;
        bottom: calc(100% + 8px);
        right: 0;
        padding: 0.2rem 0.4rem;
        border: 1px solid var(--error-color);
        border-radius: 0.25rem;
        background-color: var(--section-bg);
        color: var(--section-fg);
        opacity: 0;
        visibility: hidden;
        transition: all 100ms ease-out;
    }

    .input-container:hover .error-tooltip {
        opacity: 1;
        visibility: visible;
    }

    input:focus ~ .error-tooltip {
        opacity: 1;
        visibility: visible;
    }

    .error-tooltip::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 25%;
        border: 8px solid var(--section-bg);
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }

    .error-tooltip::before {
        content: "";
        position: absolute;
        top: calc(100% + 1px);
        left: 25%;
        border: 8px solid var(--error-color);
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
</style> -->
