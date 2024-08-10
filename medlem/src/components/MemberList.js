import React, { useContext } from 'react';
import { MembershipContext } from '../context/MembershipContext';
import { Link } from 'react-router-dom';

const MemberList = () => {
  const { members } = useContext(MembershipContext);

  return (
    <div>
      <h2>Member List</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <Link to={`/members/${member.id}`}>{member.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
