import { useState } from 'react';
import { createMember } from '../api/member';

function NewMember() {
  // TODO: add feedback for becoming a member
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      'firstName': e.target.firstName.value,
      'lastName': e.target.lastName.value,
      'email': e.target.email.value,
      'isStudent': e.target.studentMembership.checked,
    };

    createMember(data).then(resp => {
      setSuccessMsg('Successfully applied to become a member!');
      setErrorMsg(null);
    }).catch(({ response: resp }) => {
      // TODO: improve error (e.g. highlight invalid fields)
      setSuccessMsg(null);
      setErrorMsg(`${resp.status} ${resp.statusText}`);
    });
  };

  return (
    <>
      <h1>Become a member</h1>
      <p>
        Join LiTHe Hax and become a member! As a member, you'll gain access to exclusive events, resources, and updates about our organization's activities. Once your membership is approved by our board, we will contact you with further details.
      </p>
      <form onSubmit={onSubmit}>
        <label htmlFor='firstName'>First name:</label>
        <input id='firstName' type='text' required />
        <label htmlFor='lastName'>Last name:</label>
        <input id='lastName' type='text' required />
        <label htmlFor='email'>Email:</label>
        <input id='email' type='email' required />
        <label htmlFor='studentMembership'>Student membership:</label>
        <input id='studentMembership' type='checkbox' defaultChecked />
        <button type='submit'>Become member</button>
      </form>
      {successMsg && <p>{successMsg}</p>}
      {errorMsg && <p>{errorMsg}</p>}
    </>
  );
}

export default NewMember;
