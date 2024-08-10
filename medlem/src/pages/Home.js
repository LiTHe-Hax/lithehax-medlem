/**
 * General information and content related to the organization.
 */

import React from "react";

const Home = () => {
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <p>
        LiTHe Hax is an independent student association at Linköping University
        whose purpose is to promote and strengthen knowledge in ethical hacking
        and cybersecurity. The association is intended to participate in and
        organize hacking competitions. Anyone can be a member and participate in
        LiTHe Hax's activities. The association was founded on March 29, 2024.
      </p>
      <h2>Contact</h2>
      <div className="board-members">
        <div className="board-member">
          <img
            src="/chairman.jpg"
            className="profile-img"
            alt="Isak Horvath"
          />
          <div className="member-info">
            <h3>Isak Horvath @xecutive_1337</h3>
            <p>Chairman</p>
            <a href="mailto:isak.horvath@d-sektionen.se">isak.horvath@d-sektionen.se</a>
          </div>
        </div>
        <div className="board-member">
          <img
            src="/placeholder.png"
            className="profile-img"
            alt="Lukas Wandel"
          />
          <div className="member-info">
            <h3>Lukas Wandel</h3>
            <p>Cashier</p>
            <a href="#">(mail comming soon)</a>
          </div>
        </div>
        <div className="board-member">
          <img
            src="/secretary.jpg"
            className="profile-img"
            alt="Viktor Holta"
          />
          <div className="member-info">
            <h3>Viktor Holta @xXhackermanXx</h3>
            <p>Secretary</p>
            <a href="#">(mail comming soon)</a>
          </div>
        </div>
        <div className="board-member">
          <img
            src="/accountant.jpg"
            className="profile-img"
            alt="Adam Bohman"
          />
          <div className="member-info">
            <h3>Adam Bohman @Whiibie</h3>
            <p>Accountant</p>
            <a href="#">(mail comming soon)</a>
          </div>
        </div>
      </div>
      <h2>Organization Details</h2>
      <p>
        <b>Organization Number:</b> 802547-1767
      </p>
      <p>
        <b>Adress:</b> LiTHe Hax, Kårallen, Universitetet, 581 83 Linköping
      </p>
      <h3>Documents</h3>
      <ul>
        <li>
          <p>
            <a href="/LiTHe-Hax-Stadgar-Reviderade.pdf" download="LiTHe-Hax-Stadgar">
              <i className="link">LiTHe-Hax-Stadgar.pdf</i>
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href="/LiTHe-Hax-Konstituerande-Protokoll.pdf" download="Konstituerande-Protokoll">
              <i className="link">LiTHe-Hax-Konstituerande-Protokoll.pdf</i>
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
