<script lang="ts">
    import Section from "$lib/components/Section.svelte";
    import DocumentLink from "$lib/components/DocumentLink.svelte";
    import { base } from "$app/paths";
    import sickLogo from "$lib/images/ctf/sick-logo.png";
    import sectraLogo from "$lib/images/ctf/sectra-logo.png";
    import studenthuset from "$lib/images/ctf/studenthuset.jpg";
</script>

<svelte:head>
    <title>LiTHe Hax - Past Events</title>
</svelte:head>

<Section isThin>
    <h1>Workshop</h1>
    <img src={studenthuset} alt="studenthuset" />
    <p>
        We held a workshop in preparation for our CTF. During the workshop, we explained and showcased example challenges that resembled the actual CTF challenges.
    </p> 
    <p> 
        There were 80 available seats, and those who registered were provided free food, sponsored by the companies below.
    </p>
    <p><strong>Date:</strong> 17:15-20:00, February 27th, 2025</p>
    <p>
        <strong>Location:</strong>
        <a href="https://use.mazemap.com/#v=1&config=liu&campusid=742&zlevel=6&center=15.577904,58.397057&zoom=18.9&sharepoitype=poi&sharepoi=1000927265">
            SH62 and SH63 (Linköping University, Sweden)
        </a>
    </p>
    <p>
        <strong>Workshop tasks:</strong>
        <DocumentLink class="workshop" link={`${base}/documents/workshop.zip`} />
    </p>
    <p>
        <strong>Workshop presentation:</strong>
        <DocumentLink class="workshop" link={`${base}/documents/Workshop Presentation.pptx`} />
    </p>

    <hr />
    <div class="sponsor-logos">
        <img src={sickLogo} alt="sick logo" />
        <img src={sectraLogo} alt="sectra logo" />
    </div>
</Section>

<style>
    img {
        max-width: 100%;
        height: auto;
    }

    .sponsor-logos {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin: 1rem 0;
    }

    .sponsor-logos img {
        height: 2rem;
    }
</style>
