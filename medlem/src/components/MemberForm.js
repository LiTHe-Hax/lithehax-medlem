import React, { useState, useContext } from 'react';
import { MembershipContext } from '../context/MembershipContext';

const MemberForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addMember, status } = useContext(MembershipContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    addMember({ "first_name":firstName, "last_name":lastName, email });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>First name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
    </div>
      <div>
        <label>Last name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {status.message && <div style={{ color: status.color }}>{status.message}</div>}
      <button type="submit" disabled={isSubmitting}>Become Member</button>
    </form>
  );
};

export default MemberForm;
