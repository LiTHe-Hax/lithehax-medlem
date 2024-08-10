/**
 * Page for requesting membership.
 */

import React from 'react';
import MemberForm from '../components/MemberForm';

const NewMember = () => {
  return (
    <div className="member-section">
      <h1>Become Member</h1>
      <p>Join LiTHe Hax and become a member! As a member, you'll gain access to exclusive events, resources, and updates about our organization's activities. Once your membership is approved by our board, we will contact you with further details.</p>
      <MemberForm />
    </div>
  );
};

export default NewMember;
