import { useState } from 'react';
import { createMember } from '../api/member';
import DropdownInput from '../components/dropdown-input';

import '../styles/pages/new-member.css';

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
      'isStudent': e.target.isStudent.value !== '' ? e.target.isStudent.value === 'true' : null,
    };

    // TODO: disable submission if already sending
    createMember(data).then(resp => {
      setSuccessMsg('Successfully applied to become a member!');
      setErrorMsg(null);
    }).catch(({ response: resp }) => {
      // TODO: improve error (e.g. highlight invalid fields)
      // TODO: if cannot reach server, no resp is given, so this needs to be changed
      setSuccessMsg(null);
      setErrorMsg(`${resp.status} ${resp.statusText}`);
    });
  };

  return (
    <section>
      <h1>Become a member</h1>
      <p>
        Join LiTHe Hax and become a member! As a member, you'll gain access to exclusive events, resources, and updates about our organization's activities. Once your membership is approved by our board, we will contact you with further details.
      </p>
      <form className='new-member-form' onSubmit={onSubmit}>
        <div className='field-row'>
          <div className='field'>
            <label htmlFor='firstName'>First name:</label>
            <input id='firstName' type='text' required />
          </div>

          <div className='field'>
            <label htmlFor='lastName'>Last name:</label>
            <input id='lastName' type='text' required />
          </div>
        </div>

        <div className='field'>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' required />
        </div>

        <div className='field'>
          <label htmlFor='isStudent'>Membership type:</label>
          <DropdownInput
            id='isStudent'
            placeholder='Select type of membership'
            options={[
              { label: 'Student', value: true },
              { label: 'Non-student', value: false },
            ]}
          />
        </div>

        <button type='submit'>Become member</button>
      </form>
      {successMsg && <p>{successMsg}</p>}
      {errorMsg && <p>{errorMsg}</p>}
    </section>
  );
}

export default NewMember;
