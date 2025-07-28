<!-- <script lang="ts">
    import { base } from "$app/paths";

    import ContactCard from "$lib/components/ContactCard.svelte";
    import DocumentLink from "$lib/components/DocumentLink.svelte";
    import Section from "$lib/components/Section.svelte";
    import PageHead from "$lib/components/PageHead.svelte";

    import chairmanImg from "$lib/images/contacts/tyson_h.jpg";
    import webmasterImg from "$lib/images/contacts/viktor_h.jpg";
    import secretaryImg from "$lib/images/contacts/david_s.png";
    import accountantImg from "$lib/images/contacts/adam_b.jpg";
    import member1Img from "$lib/images/contacts/wilmer_s.jpg";
    import member2Img from "$lib/images/contacts/tove_h.jpg";
    import member3Img from "$lib/images/contacts/anton_o.jpg";
    import member4Img from "$lib/images/contacts/william_m.jpg";
    import member5Img from "$lib/images/contacts/tom_e.jpg";
    import maskotImg from "$lib/images/contacts/torbjorn_h.png";
</script>

<PageHead
    title=""
    description="LiTHe Hax is an independent student association at Linköping University focused on ethical hacking and cybersecurity."
/>

<Section>
    <h1>About us</h1>
    <p>
        LiTHe Hax is an independent student association at Linköping University whose
        purpose is to promote and strengthen knowledge in ethical hacking and cybersecurity.
        The association is intended to participate in and organize hacking competitions.
        Anyone can be a member and participate in LiTHe Hax's activities. The association
        was founded on March 29, 2024.
    </p>
    <div class="social-medias">
        <a href="https://discord.gg/UykWT8W899">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61567434623373">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
        </a>
        <a href="https://www.instagram.com/lithehax?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
    </div>

    <h2>Contact</h2>
    <div class="contact-grid">
        <ContactCard
            fullName="Tyson Horvath"
            hackerTag="tavro"
            position="Chairman"
            email="ordforande@lithehax.se"
            image={chairmanImg} />
        <ContactCard
            fullName="David Smith"
            hackerTag="smittydata"
            position="Secretary"
            email="sekreterare@lithehax.se"
            image={secretaryImg} />
        <ContactCard
            fullName="Tom Englund"
            hackerTag="naturell"
            position="Board member"
            email="tom.englund@lithehax.se"
            image={member5Img} />
        <ContactCard
            fullName="Viktor Holta"
            hackerTag="Parslie"
            position="Webmaster"
            email="webmaster@lithehax.se"
            image={webmasterImg} />
        <ContactCard
            fullName="Adam Bohman"
            hackerTag="Whiibie"
            position="Accountant"
            email="revisor@lithehax.se"
            image={accountantImg} />
        <ContactCard
            fullName="Wilmer Segerstedt"
            hackerTag="airless"
            position="Logistics"
            email="wilmer.segerstedt@lithehax.se"
            image={member1Img} />
        <ContactCard
            fullName="Tove Haernfelt"
            hackerTag="thetov"
            position="Event manager"
            email="tove.haernfelt@lithehax.se"
            image={member2Img} />
        <ContactCard
            fullName="Anton Oom"
            hackerTag="oomega"
            position="Relations"
            email="anton.oom@lithehax.se"
            image={member3Img} />
        <ContactCard
            fullName="William Minidis"
            hackerTag="windis"
            position="Cashier"
            email="kassor@lithehax.se"
            image={member4Img} />
        <ContactCard
            fullName="Torbjörn Hackström"
            hackerTag="hacktor"
            position="Maskot"
            email="maskot@lithehax.se"
            image={maskotImg} />
    </div>

    <h2>Organization details</h2>
    <p><b>Organization Number:</b> 802547-1767</p>
    <p><b>Adress:</b> LiTHe Hax, Kårallen, Universitetet, 581 83 Linköping</p>

    <h3>Documents</h3>
    <div class="document-list">
        <DocumentLink link={`${base}/documents/Kallelse_Årsmöte.pdf`} />
        <DocumentLink link={`${base}/documents/LiTHe_Hax_Stadgar_Uppdaterad.pdf`} />
        <DocumentLink link={`${base}/documents/LiTHe_Hax_Konstituerande_Protokoll.pdf`} />
    </div>
</Section>

<style>
    /* Mobile styling */
    @media screen and (min-width: 0px) {
        .contact-grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    /* Desktop styling */
    @media screen and (min-width: 768px) {
        .contact-grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
        }
    }

    .document-list {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .social-medias {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    .social-medias svg {
        height: 2rem;
    }
</style>
 -->
