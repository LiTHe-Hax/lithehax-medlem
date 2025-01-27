<script lang="ts">
    import Section from "$lib/components/Section.svelte";
    import cyberRoom from "$lib/images/ctf/cyber-room.jpg"
</script>

<svelte:head>
    <title>LiTHe Hax CTF</title>
</svelte:head>

<Section isThin>
    <h1>LiTHe Hax CTF — March 8th</h1>
    <p>
        The LiTHe Hax CTF Event is an exciting competition taking place on March 8, bringing cybersecurity enthusiasts
        together to test their skills and tackle challenging Capture the Flag tasks. We host this event to encourage
        cybersecurity awareness within the student community, as it is both highly relevant and incredibly fun!

    </p>
    <p>
        Sign up details will be available soon. Stay tuned for updates!
    </p>
    <p><strong>Date:</strong> March 8th, 2025</p>
    <p>
        <strong>Location:</strong>
        <a href="https://link.mazemap.com/0PapbQ2Z">
            Linköping University, Sweden
        </a>
    </p>
    <img src={cyberRoom} alt="Cybersecurity Room" />
</Section>

<style>
    img {
        max-width: 100%;
        height: auto;
    }
</style>
