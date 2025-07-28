<!-- <script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import cyberRoom from "$lib/images/ctf/cyber-room.jpg";
  import sickLogo from "$lib/images/ctf/sick-logo.png";
  import sectraLogo from "$lib/images/ctf/sectra-logo.png";
  import sylogLogo from "$lib/images/ctf/sylog-logo.png";
  import DocumentLink from "$lib/components/DocumentLink.svelte";
  import { base } from "$app/paths";
  import studenthuset from "$lib/images/workshop/studenthuset.jpg";
  import foobar from "$lib/images/foocafe/foobar.jpg";
  import gototenLogo from "$lib/images/foocafe/goto10-logo.png";
  import foocafeLogo from "$lib/images/foocafe/foocafe-logo.svg";
  import acas from "$lib/images/annual-meeting/acas.png";
  import PageHead from "$lib/components/PageHead.svelte";
</script>

<PageHead
  title="Events"
  description="LiTHe Hax events including Annual Meeting, CTF competition, workshops, and networking opportunities at Linköping University, GOTO10, Foocafe and more"
/>

<h2 class="section-header">Upcoming Events</h2>

<Section isThin>
  <p>There are currently no upcoming events...</p>
</Section>

<h2 class="section-header">Previous Events</h2>

<Section isThin>
  <div class="past-event">
    <h1>Annual Meeting</h1>
    <img src={acas} alt="ACAS at Linköping University" />
    <p>
      We will be holding our annual meeting soon, which you're very welcome to
      attend! During the meeting we'll talk about the last year of LiTHe Hax and
      we'll be voting on the next year of LiTHe Hax. One thing that'll be voted on
      is who will be included in the next board, so this is your chance to join
      and affect the future of LiTHe Hax.
    </p>
    <p>Coffee and fika will be provided to everyone who attend the meeting.</p>
    <p><strong>Date & Time:</strong> 28 May 2025, 17:15</p>
    <p>
      <strong>Location:</strong>
      <a
        href="https://use.mazemap.com/?utm_medium=longurl#v=1&config=liu&campusid=742&zlevel=2&center=15.576810,58.402255&zoom=18&sharepoitype=poi&sharepoi=1000927810"
      >
        ACAS (Linköping University, Sweden)
      </a>
    </p>
    <p>
      <strong>Agenda:</strong>
      <DocumentLink link={`${base}/documents/Kallelse_Årsmöte.pdf`} />
    </p>

    <h3>Candidacy</h3>
    <p>
      Anyone can can run for the positions brought up during the meeting. You can
      oppose any of the current nominees, which means that you can nominate
      yourself or someone else for that position (without having been previously
      nominated). You can also submit an opposition by sending a mail to <a
        href="mailto:ordforande@lithehax.se">ordforande@lithehax.se</a
      >, where you explain which position you're interested in and why you are a
      suitable candidate.
    </p>
    <p>
      If you are running for a position in the board you will have to present
      yourself during the meeting and answer any potential questions. Below are
      some suggestions of what you may want to bring up when presenting yourself:
    </p>
    <ul>
      <li>Who you are</li>
      <li>Why you are running for the position</li>
      <li>Past experiences that may be of relevance</li>
    </ul>
    <p>
      <strong>Current nominees:</strong>
      <DocumentLink
        link={`${base}/documents/2024-2025/events/annual_meeting/nominations.pdf`}
      />
    </p>

    <h3>Motions</h3>

    <p>
      Anyone can send in motions. The easiest way to do this is by mailing the
      motion to <a href="mailto:ordforande@lithehax.se">ordforande@lithehax.se</a
      >. Motions must be sent in writing to the board no later than seven days
      before the meeting (21 May 2025).
    </p>
    <p>
      <strong>Current motions and propositions:</strong>
      <DocumentLink
        link={`${base}/documents/2024-2025/events/annual_meeting/motions_and_propositions.pdf`}
      />
    </p>
  </div>
</Section>

<Section isThin>
  <div class="past-event">
    <h1>Foo Bar at Foo Café</h1>

    <img src={foobar} alt="Foo Bar at Foo Café" />
    <p>
      Foo Café and LiTHe Hax recently teamed up for a cybersecurity evening
      focused on Capture the Flag challenges. The event featured a brief
      introduction, a problem-solving lecture, and a chance to network over food
      and drinks with others passionate about cybersecurity.
    </p>
    <p><strong>Date & Time:</strong> 24 Apr 2025, 17:00-20:00</p>
    <p>
      <strong>Location:</strong>
      <a href="https://maps.app.goo.gl/LNrr7CWQWwaH3deJ9">
        Goto 10 Linköping (Teknikringen 7, 583 30 Linköping)
      </a>
    </p>
    <p>
      <strong>Presentation:</strong>
      <DocumentLink link={`${base}/documents/GOTO10 Presentation.pptx`} />
    </p>

    <hr />
    <div class="sponsor-logos">
      <img src={gototenLogo} alt="Goto 10 logo" />
      <img src={foocafeLogo} alt="Goto 10 logo" />
    </div>
  </div>
</Section>

<Section isThin>
  <div class="past-event">
    <h1>LiU CTF</h1>

    <img src={cyberRoom} alt="Cybersecurity Room" />
    <p>
      The LiTHe Hax LiU CTF was an exciting Capture the Flag competition held on
      March 8. We hosted this event to promote cybersecurity awareness within
      the student community, combining both relevance and fun.
    </p>
    <p>
      A total of 18 teams competed, each consisting of 2–5 participants. Free
      food was provided to all participants.
    </p>
    <p><strong>Date & Time:</strong> 8 Mar 2025, 17:15-23:00</p>
    <p>
      <strong>Location:</strong>
      <a
        href="https://use.mazemap.com/?utm_medium=longurl#v=1&config=liu&campusid=742&zlevel=2&center=15.576432,58.398370&zoom=18&sharepoitype=poi&sharepoi=1002771474"
      >
        Brandväggen, Bakdörren and ISYtan (Linköping University, Sweden)
      </a>
    </p>
    <p>
      <strong>CTF Platform:</strong>
      <a href="https://ctf.lithehax.se"> ctf.lithehax.se </a>
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
    <img src={studenthuset} alt="Studenthuset" />
    <p>
      We held a workshop in preparation for our CTF. During the workshop, we
      explained and showcased example challenges that resembled the actual CTF
      challenges.
    </p>
    <p>
      There were 80 available seats, and those who registered were provided free
      food, sponsored by the companies below.
    </p>
    <p><strong>Date & Time:</strong> 27 Feb 2025, 17:15-20:00</p>
    <p>
      <strong>Location:</strong>
      <a
        href="https://use.mazemap.com/#v=1&config=liu&campusid=742&zlevel=6&center=15.577904,58.397057&zoom=18.9&sharepoitype=poi&sharepoi=1000927265"
      >
        SH62 and SH63 (Linköping University, Sweden)
      </a>
    </p>
    <p>
      <strong>Workshop tasks:</strong>
      <DocumentLink class="workshop" link={`${base}/documents/workshop.zip`} />
    </p>
    <p>
      <strong>Workshop presentation:</strong>
      <DocumentLink
        class="workshop"
        link={`${base}/documents/Workshop Presentation.pptx`}
      />
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
      margin-left: calc(
        50% - min(18rem, 50% - 3rem) - 1.25rem
      ); /* This feels very hacky */
      max-width: min(36rem, calc(100% - 6rem));
    }
  }
</style>
 -->
