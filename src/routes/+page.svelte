<script lang="ts">
    import { base } from "$app/paths";

    import ContactCard from "$lib/components/ContactCard.svelte";
    import DocumentLink from "$lib/components/DocumentLink.svelte";
    import Section from "$lib/components/Section.svelte";

    import chairmanImg from "$lib/images/contacts/tyson_h.jpg";
    import cashierImg from "$lib/images/contacts/lukas_w.jpg";
    import secretaryImg from "$lib/images/contacts/viktor_h.jpg";
    import accountantImg from "$lib/images/contacts/adam_b.jpg";
    import member1Img from "$lib/images/contacts/wilmer_s.jpg";
    import member2Img from "$lib/images/contacts/tove_h.jpg";
    import member3Img from "$lib/images/contacts/anton_o.jpg";
    import member4Img from "$lib/images/contacts/william_m.jpg";
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
    <div class="contact-grid">
        <ContactCard
            fullName="Isak/Tyson Horvath"
            hackerTag="Tavro"
            position="Chairman"
            email="ordforande@lithehax.se"
            image={chairmanImg} />
        <ContactCard
            fullName="Lukas Wandel"
            hackerTag="DominoFives"
            position="Cashier"
            email="kassor@lithehax.se"
            image={cashierImg} />
        <ContactCard
            fullName="Viktor Holta"
            hackerTag="Parslie"
            position="Secretary"
            email="sekreterare@lithehax.se"
            image={secretaryImg} />
        <ContactCard
            fullName="Adam Bohman"
            hackerTag="Whiibie"
            position="Accountant"
            email="revisor@lithehax.se"
            image={accountantImg} />
        <ContactCard
            fullName="Wilmer Segerstedt"
            hackerTag="airless"
            position="Board member"
            email="ledamot1@lithehax.se"
            image={member1Img} />
        <ContactCard
            fullName="Tove Haernfelt"
            hackerTag="thetov"
            position="Board member"
            email="ledamot2@lithehax.se"
            image={member2Img} />
        <ContactCard
            fullName="Anton Oom"
            hackerTag="oomega"
            position="Board member"
            email="ledamot3@lithehax.se"
            image={member3Img} />
        <ContactCard
            fullName="William Minidis"
            hackerTag="windis"
            position="Board member"
            email="ledamot4@lithehax.se"
            image={member4Img} />
    </div>

    <h2>Organization details</h2>
    <p><b>Organization Number:</b> 802547-1767</p>
    <p><b>Adress:</b> LiTHe Hax, Kårallen, Universitetet, 581 83 Linköping</p>

    <h3>Documents</h3>
    <div class="document-list">
        <DocumentLink link={`${base}/documents/Kallelse-Årsmote.pdf`} />
        <DocumentLink link={`${base}/documents/LiTHe-Hax-Stadgar-Reviderade.pdf`} />
        <DocumentLink link={`${base}/documents/LiTHe-Hax-Konstituerande-Protokoll.pdf`} />
    </div>
</Section>

<style>
    .contact-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    }

    .document-list {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }
</style>