import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/new-member">New Member</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
