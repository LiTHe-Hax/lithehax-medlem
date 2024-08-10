import React, { useState, useContext } from 'react';
import { MembershipContext } from '../context/MembershipContext';
import { useNavigate } from 'react-router-dom';

const MemberForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { addMember } = useContext(MembershipContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember({ name, email });
    navigate('/members');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Become Member</button>
    </form>
  );
};

export default MemberForm;
