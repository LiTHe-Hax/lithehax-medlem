import BoardMemberCard from '../components/board-member-card';
import DocumentLink from '../components/document-link';

import '../styles/pages/home.css';

function Home() {
  // TODO: should this stuff be put in some container? probably
  return (
    <section>
      <h1>About us</h1>
      <p>
        LiTHe Hax is an independent student association at Linköping University whose purpose is to promote and strengthen knowledge in ethical hacking and cybersecurity. The association is intended to participate in and organize hacking competitions. Anyone  can be a member and participate in LiTHe Hax's activities. The association was founded on March 29, 2024.
      </p>

      <h2>Contact</h2>
      <div className='board-members'>
        <BoardMemberCard
          fullName='Isak Horvath'
          hackerTag='Xecutive_1337'
          email='isak.horvath@d-sektionen.se'
          position='Chairman'
          imageSrc='/chairman.jpg'
        />
        <BoardMemberCard
          fullName='Lukas Wandel'
          hackerTag='DominoFives'
          position='Cashier'
          imageSrc='/cashier.jpg'
        />
        <BoardMemberCard
          fullName='Viktor Holta'
          hackerTag='Parslie'
          position='Secretary'
          imageSrc='/secretary.jpg'
        />
        <BoardMemberCard
          fullName='Adam Bohman'
          hackerTag='Whiibie'
          position='Accountant'
          imageSrc='/accountant.jpg'
        />
      </div>

      <h2>Organization details</h2>
      <p><b>Organization Number:</b> 802547-1767</p>
      <p><b>Adress:</b> LiTHe Hax, Kårallen, Universitetet, 581 83 Linköping</p>

      <h3>Documents</h3>
      <DocumentLink 
        link='/Kallelse-Arsmote.pdf'
        saveAs='Kallelse-Årsmöte'
        label='Kallelse-Årsmöte.pdf'
      />
      <DocumentLink
        link='/LiTHe-Hax-Stadgar-Reviderade.pdf'
        saveAs='LiTHe-Hax-Stadgar'
        label='LiTHe-Hax-Stadgar.pdf'
      />
      <DocumentLink
        link='/LiTHe-Hax-Konstituerande-Protokoll.pdf'
        saveAs='LiTHe-Hax-Konstituerande-Protokoll'
        label='LiTHe-Hax-Konstituerande-Protokoll.pdf'
      />
    </section>
  );
}

export default Home;
