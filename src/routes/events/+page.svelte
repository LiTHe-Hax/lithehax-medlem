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

<Section isThin>
    <h1>Placeholder event</h1>

    <img src={cyberRoom} alt="Cybersecurity Room" />
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae odio tortor. Ut molestie sit amet
        dolor sed tincidunt. Vivamus at porttitor massa. Donec a malesuada elit. Aenean nunc dui, commodo quis 
        elementum quis, pulvinar sed neque. Mauris in tellus finibus, eleifend risus finibus, pulvinar sem. 
        Ut aliquam felis metus, ullamcorper elementum leo vehicula vestibulum.
    </p>
    <p>
        Aliquam scelerisque leo eget quam pharetra, sed fermentum neque commodo. Etiam nec mauris hendrerit, ornare 
        ex quis, aliquam mauris. Suspendisse vel sapien mauris.
    </p>
    <p>
        Sed ultrices scelerisque massa vel molestie. Aenean vitae magna tristique, ultrices urna id, placerat sapien. 
        Vivamus at hendrerit urna.
    </p>
</Section>



<Section isThin>
    <div class="past-event">
        <h1>LiU CTF</h1>

        <img src={cyberRoom} alt="Cybersecurity Room" />
        <p>
            The LiTHe Hax CTF Event is an exciting competition taking place on March 8, bringing cybersecurity enthusiasts
            together to test their skills and tackle challenging Capture the Flag tasks. We host this event to encourage
            cybersecurity awareness within the student community, as it is both highly relevant and incredibly fun!
        </p>
        <p>
            A total of 30 teams will be able to compete. Each team can consist of 2-5 participants, of which one must be
            a member in LiTHe Hax. Free food will be provided to each participant.
        </p>
        <p>
            All non-student participants have to bring their own laptops, but it's recommended that
            every participant brings their own, since we may not be able to provide Kali Linux images on site.
        </p>
        <p><strong>Date:</strong> 17:15-23:00, March 8th, 2025 (Food will be served 16:15)</p>
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
        opacity: 0.2;
    }

    .past-event img {
        filter: saturate(20%);
    }

    .past-event h1 {
        margin-top: 0;
        color: var(--header-fg);
    }

</style>
