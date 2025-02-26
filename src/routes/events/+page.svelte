<script lang="ts">
    import Section from "$lib/components/Section.svelte";
    import DocumentLink from "$lib/components/DocumentLink.svelte";
    import { base } from "$app/paths";
    import cyberRoom from "$lib/images/ctf/cyber-room.jpg";
    import sickLogo from "$lib/images/ctf/sick-logo.png";
    import sectraLogo from "$lib/images/ctf/sectra-logo.png";
    import sylogLogo from "$lib/images/ctf/sylog-logo.png";
    import studenthuset from "$lib/images/ctf/studenthuset.jpg";
</script>

<svelte:head>
    <title>LiTHe Hax - Events</title>
</svelte:head>

<Section isThin>
    <h1>Workshop</h1>
    <img src={studenthuset} alt="studenthuset" />
    <p>
        We will be holding a workshop in preparation for our upcoming CTF, which you can read more about in the section below.
        During the workshop we will explain and showcase example challenges, that will resemble the actual
        challenges you will tackle during the CTF.
    </p>
    <p>
        There are 80 available seats and the ones who register will be provided free food, which has been
        sponsored by the companies below.
    </p>
    <p>
        50 people have signed up for the event, and a check will be conducted at the door when handing out the food.
        If you are not registered, you are still welcome to attend, but food will only be available if there are
        leftovers after the presentation.
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

    <hr />
    <div class="sponsor-logos">
        <img src={sickLogo} alt="sick logo" />
        <img src={sectraLogo} alt="sectra logo" />
    </div>
</Section>

<Section isThin>
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
    <p><strong>Date:</strong> 17:15-22:00, March 8th, 2025</p>
    <p>
        <strong>Location:</strong>
        <a href="https://use.mazemap.com/?utm_medium=longurl#v=1&config=liu&campusid=742&zlevel=2&center=15.576432,58.398370&zoom=18&sharepoitype=poi&sharepoi=1002771474">
            Brandväggen, Bakdörren and ISYtan (Linköping University, Sweden)
        </a>
    </p>
    <p>
        <strong>Registration form:</strong>
        <a href="https://forms.gle/8xsviDonwtGkZUsh7">
            https://forms.gle/8xsviDonwtGkZUsh7
        </a>
    </p>

    <hr />
    <div class="sponsor-logos">
        <img src={sickLogo} alt="sick logo" />
        <img src={sectraLogo} alt="sectra logo" />
        <img src={sylogLogo} alt="sylog logo" />
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
