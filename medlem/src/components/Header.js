import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>LiTHe Hax</h1>
      <nav>
        <Link to="/" className="button">Home</Link>
        <Link to="/new-member" className="button">Member</Link>
      </nav>
    </header>
  );
};

export default Header;
