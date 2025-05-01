<script lang="ts">
    import Section from "$lib/components/Section.svelte";
    import cyberRoom from "$lib/images/ctf/cyber-room.jpg";
    import sickLogo from "$lib/images/ctf/sick-logo.png";
    import sectraLogo from "$lib/images/ctf/sectra-logo.png";
    import sylogLogo from "$lib/images/ctf/sylog-logo.png";
    import DocumentLink from "$lib/components/DocumentLink.svelte";
    import { base } from "$app/paths";
    import studenthuset from "$lib/images/ctf/studenthuset.jpg";
</script>

<svelte:head>
    <title>LiTHe Hax - Events</title>
</svelte:head>

<h2 class="section-header">Upcoming Events</h2>

<h2 class="section-header">Previous Events</h2>

<Section isThin>
    <div class="past-event">
        <h1>LiU CTF</h1>

        <img src={cyberRoom} alt="Cybersecurity Room" />
        <p>
            The LiTHe Hax LiU CTF was an exciting Capture the Flag competition held on March 8. We hosted this event to
            promote cybersecurity awareness within the student community, combining both relevance and fun.
        </p>
        <p>
            A total of 18 teams competed, each consisting of 2–5 participants. Free food was provided to all participants.
        </p>
        <p><strong>Time & Date:</strong> 17:15-23:00, March 8th, 2025</p>
        <p>
            <strong>Location:</strong>
            <a href="https://use.mazemap.com/?utm_medium=longurl#v=1&config=liu&campusid=742&zlevel=2&center=15.576432,58.398370&zoom=18&sharepoitype=poi&sharepoi=1002771474">
                Brandväggen, Bakdörren and ISYtan (Linköping University, Sweden)
            </a>
        </p>
        <p>
            <strong>CTF Platform:</strong>
            <a href="https://ctf.lithehax.se">
                ctf.lithehax.se
            </a>
        </p>
        <p>
            <strong>CTF rules:</strong>
            <DocumentLink class="workshop" link={`${base}/documents/rules.pdf`} />
        </p>

        <hr />
        <div class="sponsor-logos">
            <img src={sickLogo} alt="sick logo" />
            <img src={sectraLogo} alt="sectra logo" />
            <img src={sylogLogo} alt="sylog logo" />
        </div>
    </div>
</Section>


<Section isThin>
    <div class="past-event">
        <h1>Workshop</h1>
        <img src={studenthuset} alt="studenthuset" />
        <p>
            We held a workshop in preparation for our CTF. During the workshop, we explained and showcased example challenges that resembled the actual CTF challenges.
        </p> 
        <p> 
            There were 80 available seats, and those who registered were provided free food, sponsored by the companies below.
        </p>
        <p><strong>Time & Date:</strong> 17:15-20:00, February 27th, 2025</p>
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

    .past-event {
        opacity: 0.5;
    }

    .past-event img {
        filter: saturate(50%);
    }

    .past-event h1 {
        margin-top: 0;
        color: var(--header-fg);
    }

    /* Mobile styling */
    @media screen and (min-width: 0px) {
        .section-header {
            font-size: 1.75rem;
            color: var(--heading-fg);
            margin: 1rem 1.25rem;
            max-width: min(36rem, calc(100% - 6rem));
        }
    }

    /* Desktop styling */
    @media screen and (min-width: 768px) {
        .section-header {
            font-size: 1.75rem;
            color: var(--heading-fg);
            margin-top: 3rem;
            margin-bottom: -2rem;
            margin-left: calc(50% - min(18rem, 50% - 3rem) - 1.25rem); /* This feels very hacky */
            max-width: min(36rem, calc(100% - 6rem));
        }
    }

    </style>
