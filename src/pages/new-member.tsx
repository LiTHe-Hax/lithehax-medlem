import React, { useState } from 'react';
import { createMember } from '../api/member';
import DropdownInput from '../components/dropdown-input';

import '../styles/pages/new-member.css';

interface CreateMemberFormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement,
  lastName: HTMLInputElement,
  email: HTMLInputElement,
  isStudent: HTMLInputElement,
}

interface CreateMemberFormElement extends HTMLFormElement {
  readonly elements: CreateMemberFormElements,
}

function NewMember() {
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<CreateMemberFormElement>) => {
    e.preventDefault();

    if (e.currentTarget.elements.isStudent.value === '') {
      // TODO: improve error (e.g. highlight invalid fields)
      setErrorMsg('Please set your membership type');
      return;
    }

    const data = {
      'firstName': e.currentTarget.elements.firstName.value,
      'lastName': e.currentTarget.elements.lastName.value,
      'email': e.currentTarget.elements.email.value,
      'isStudent': e.currentTarget.elements.isStudent.value === 'true',
    };

    // TODO: disable submission if already sending
    createMember(data).then(resp => {
      setSuccessMsg('Successfully applied to become a member!');
      setErrorMsg(null);
      // TODO: reset form
    }).catch(({ response: resp }) => {
      // TODO: improve error (e.g. highlight invalid fields)
      // TODO: if cannot reach server, no resp is given, so this needs to be changed
      setSuccessMsg(null);
      setErrorMsg(`${resp.status} ${resp.statusText}`);
    });
  };

  return (
    <section className='thin'>
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
            placeholder='Please select a membership type'
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
