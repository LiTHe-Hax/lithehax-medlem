<script lang="ts">
	import { base } from "$app/paths";

	import acas from "$lib/images/2024-2025/events/annual_meeting/acas.png";
	import goto10Foyer from "$lib/images/2024-2025/events/foo_cafe/goto_10_foyer.jpg";
	import cyberRoom from "$lib/images/2024-2025/events/liu_ctf/cyber_room.jpg";
	import studenthuset from "$lib/images/2024-2025/events/workshop/studenthuset.jpg";

	import sickLogo from "$lib/images/sponsors/sick_logo.png";
	import sectraLogo from "$lib/images/sponsors/sectra_logo.png";
	import sylogLogo from "$lib/images/sponsors/sylog_logo.png";
	import goto10Logo from "$lib/images/sponsors/goto_10_logo.png";
	import fooCafeLogo from "$lib/images/sponsors/foo_cafe_logo.svg";

	import EventSection from "$lib/components/sections/EventSection.svelte";
	import FileLink from "$lib/components/FileLink.svelte";
	import MainHeading from "$lib/components/MainHeading.svelte";
</script>

<svelte:head>
	<title>LiTHe Hax - Events</title>
</svelte:head>

<MainHeading isThin>Upcoming Events</MainHeading>

<EventSection
	title="Annual Meeting"
	date="28 May 2025"
	time="17:15"
	location="ACAS (Linköping University, Sweden)"
	mapLink="https://use.mazemap.com/?utm_medium=longurl#v=1&config=liu&campusid=742&zlevel=2&center=15.576810,58.402255&zoom=18&sharepoitype=poi&sharepoi=1000927810">
	<img src={acas} alt="ACAS at Linköping University" />
	<p>
		We will be holding our annual meeting soon, which you're very welcome to attend! During the
		meeting we'll talk about the last year of LiTHe Hax and we'll be voting on the next year of
		LiTHe Hax. One thing that'll be voted on is who will be included in the next board, so this is
		your chance to join and affect the future of LiTHe Hax.
	</p>
	<p>Coffee and fika will be provided to everyone who attend the meeting.</p>
	<p>
		<b>Agenda:</b>
		<FileLink link={`${base}/documents/2024-2025/events/annual_meeting/kallelse_arsmote.pdf`} />
	</p>

	<h3>Candidacy</h3>
	<p>
		Anyone can can run for the positions brought up during the meeting. You can oppose any of the
		current nominees, which means that you can nominate yourself or someone else for that position
		(without having been previously nominated). You can also submit an opposition by sending a mail
		to <a href="mailto:ordforande@lithehax.se">ordforande@lithehax.se</a>, where you explain which
		position you're interested in and why you are a suitable candidate.
	</p>
	<p>
		If you are running for a position in the board you will have to present yourself during the
		meeting and answer any potential questions. Below are some suggestions of what you may want to
		bring up when presenting yourself:
	</p>
	<ul>
		<li>Who you are</li>
		<li>Why you are running for the position</li>
		<li>Past experiences that may be of relevance</li>
	</ul>
	<p>
		<b>Current nominees:</b>
		<FileLink link={`${base}/documents/2024-2025/events/annual_meeting/nominations.pdf`} />
	</p>

	<h3>Motions</h3>
	<p>
		Anyone can send in motions. The easiest way to do this is by mailing the motion to <a
			href="mailto:ordforande@lithehax.se">ordforande@lithehax.se</a
		>. Motions must be sent in writing to the board no later than seven days before the meeting (21
		May 2025).
	</p>
	<p>
		<b>Current motions and propositions:</b>
		<FileLink
			link={`${base}/documents/2024-2025/events/annual_meeting/motions_and_propositions.pdf`} />
	</p>
</EventSection>

<MainHeading isThin>Previous Events</MainHeading>

<EventSection
	title="Foo Bar at Foo Café"
	date="24 Apr 2025"
	time="17:00-20:00"
	location="Goto 10 (Teknikringen 7, 583 30 Linköping)"
	mapLink="https://maps.app.goo.gl/LNrr7CWQWwaH3deJ9"
	sponsorLogos={[
		{ logo: goto10Logo, alt: "goto 10 logo" },
		{ logo: fooCafeLogo, alt: "foo cafe logo" }
	]}
	hasPassed>
	<img src={goto10Foyer} alt="Foo Bar at Foo Café" />
	<p>
		Foo Café and LiTHe Hax recently teamed up for a cybersecurity evening focused on Capture the
		Flag challenges. The event featured a brief introduction, a problem-solving lecture, and a
		chance to network over food and drinks with others passionate about cybersecurity.
	</p>
	<p>
		<b>Presentation:</b>
		<FileLink link={`${base}/documents/2024-2025/events/foo_cafe/goto_10_presentation.pptx`} />
	</p>
</EventSection>

<EventSection
	title="LiU CTF"
	date="8 Mar 2025"
	time="17:15-23:00"
	location="Brandväggen, Bakdörren and ISYtan (Linköping University, Sweden)"
	mapLink="https://use.mazemap.com/?utm_medium=longurl#v=1&config=liu&campusid=742&zlevel=2&center=15.576432,58.398370&zoom=18&sharepoitype=poi&sharepoi=1002771474"
	sponsorLogos={[
		{ logo: sickLogo, alt: "sick logo" },
		{ logo: sectraLogo, alt: "sectra logo" },
		{ logo: sylogLogo, alt: "sylog logo" }
	]}
	hasPassed>
	<img src={cyberRoom} alt="Cybersecurity Room" />
	<p>
		The LiTHe Hax LiU CTF was an exciting Capture the Flag competition held on March 8. We hosted
		this event to promote cybersecurity awareness within the student community, combining both
		relevance and fun.
	</p>
	<p>
		A total of 18 teams competed, each consisting of 2–5 participants. Free food was provided to all
		participants.
	</p>
	<p>
		<b>CTF platform:</b>
		<a href="https://ctf.lithehax.se">ctf.lithehax.se</a>
		<br />
		<b>CTF rules:</b>
		<FileLink link={`${base}/documents/2024-2025/events/liu_ctf/liu_ctf_rules.pdf`} />
	</p>
</EventSection>

<EventSection
	title="Workshop"
	date="27 Feb 2025"
	time="17:15-20:00"
	location="SH62 and SH63 (Linköping University, Sweden)"
	mapLink="https://use.mazemap.com/#v=1&config=liu&campusid=742&zlevel=6&center=15.577904,58.397057&zoom=18.9&sharepoitype=poi&sharepoi=1000927265"
	sponsorLogos={[
		{ logo: sickLogo, alt: "sick logo" },
		{ logo: sectraLogo, alt: "sectra logo" }
	]}
	hasPassed>
	<img src={studenthuset} alt="Studenthuset" />
	<p>
		We held a workshop in preparation for our CTF. During the workshop, we explained and showcased
		example challenges that resembled the actual CTF challenges.
	</p>
	<p>
		There were 80 available seats, and those who registered were provided free food, sponsored by
		the companies below.
	</p>
	<p>
		<b>Workshop tasks:</b>
		<FileLink link={`${base}/documents/2024-2025/events/workshop/challenges.zip`} />
		<br />
		<b>Workshop presentation:</b>
		<FileLink link={`${base}/documents/2024-2025/events/workshop/workshop_presentation.pptx`} />
	</p>
</EventSection>
