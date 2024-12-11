<script lang="ts">
    type Props = {
        fullName: string,
        hackerTag: string,
        position: string,
        email?: string,
        image?: string,
    };
    let { fullName, hackerTag, position, email, image }: Props = $props();

    import placeholderImg from "$lib/images/contacts/placeholder.png";
</script>

<div class="contact-card">
    <img src={image !== undefined ? image : placeholderImg} alt={fullName} />
    <div class="info">
        <span class="name">{fullName} @{hackerTag}</span>
        <span class="position">{position}</span>
        {#if email !== undefined}
            <a class="email" href={`mailto:${email}`}>{email}</a>
        {:else}
            <span class="email">(mail coming soon)</span>
        {/if}
    </div>
</div>

<style>
    .contact-card {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .name {
        color: var(--heading-fg);
        font-size: 1.175em;
        font-weight: bold;
    }

    .position {
        margin-bottom: 1em;
    }

    .email {
        /* Clamps the boundaries of the link */
        align-self: flex-start;
    }

    /* Email link is also styled by the global stylesheet */
</style>