import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MembershipContext } from '../context/MembershipContext';

const MemberDetails = () => {
  const { id } = useParams();
  const { members } = useContext(MembershipContext);
  const member = members.find((m) => m.id === parseInt(id));

  if (!member) return <div>Member not found</div>;

  return (
    <div>
      <h2>{member.name}</h2>
      <p>Email: {member.email}</p>
      <p>Joined: {member.joinedDate}</p>
    </div>
  );
};

export default MemberDetails;
