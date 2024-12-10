<script lang="ts">
    import DocumentLink from "$lib/components/DocumentLink.svelte";
import Section from "$lib/components/Section.svelte";
</script>

<Section>
    <h1>About us</h1>
    <p>
        LiTHe Hax is an independent student association at Linköping University whose
        purpose is to promote and strengthen knowledge in ethical hacking and cybersecurity.
        The association is intended to participate in and organize hacking competitions.
        Anyone can be a member and participate in LiTHe Hax's activities. The association
        was founded on March 29, 2024.
    </p>

    <h2>Contact</h2>
    <!-- TODO: add contact cards -->

    <h2>Organization details</h2>
    <p><b>Organization Number:</b> 802547-1767</p>
    <p><b>Adress:</b> LiTHe Hax, Kårallen, Universitetet, 581 83 Linköping</p>

    <h3>Documents</h3>
    <div class="document-list">
        <DocumentLink link="/documents/Kallelse-Årsmote.pdf" />
        <DocumentLink link="/documents/LiTHe-Hax-Stadgar-Reviderade.pdf" />
        <DocumentLink link="/documents/LiTHe-Hax-Konstituerande-Protokoll.pdf" />
    </div>
</Section>

<style>
    .document-list {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }
</style>