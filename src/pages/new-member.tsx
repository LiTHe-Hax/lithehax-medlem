import React, { useState } from 'react';
import { createMember } from '../api/member';
import DropdownInput from '../components/dropdown-input';
import { AxiosError } from 'axios';

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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isStudentError, setIsStudentError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<CreateMemberFormElement>) => {
    e.preventDefault();

    if (e.currentTarget.elements.isStudent.value === '') {
      setIsStudentError('Please set your membership type');
      return;
    }

    setSuccessMsg(null);
    setFirstNameError(null);
    setLastNameError(null);
    setEmailError(null);
    setIsStudentError(null);
    setIsSubmitting(true);

    const data = {
      'firstName': e.currentTarget.elements.firstName.value,
      'lastName': e.currentTarget.elements.lastName.value,
      'email': e.currentTarget.elements.email.value,
      'isStudent': e.currentTarget.elements.isStudent.value === 'true',
    };

    createMember(data).then((resp) => {
      setSuccessMsg('Successfully applied for a membership');
      setIsSubmitting(false);
    }).catch((err: AxiosError) => {
      let data = err.response?.data as {};
      if ('first_name' in data) {
        let main_error = (data.first_name as string[])[0];
        setFirstNameError(main_error);
      }
      if ('last_name' in data) {
        let main_error = (data.last_name as string[])[0];
        setLastNameError(main_error);
      }
      if ('email' in data) {
        let main_error = (data.email as string[])[0];
        setEmailError(main_error);
      }
      if ('is_student' in data) {
        let main_error = (data.is_student as string[])[0];
        setIsStudentError(main_error);
      }
      setIsSubmitting(false);
    });
  };

  // TODO: show user that it is submitting
  // TODO: display error messages as tooltips
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
            <input
              className={firstNameError !== null ? 'error' : undefined}
              id='firstName'
              type='text'
              required
            />
          </div>

          <div className='field'>
            <label htmlFor='lastName'>Last name:</label>
            <input
              className={lastNameError !== null ? 'error' : undefined} id='lastName'
              type='text'
              required
            />
          </div>
        </div>

        <div className='field'>
          <label htmlFor='email'>Email:</label>
          <input
            className={emailError !== null ? 'error' : undefined}
            id='email'
            type='email'
            required
          />
        </div>

        <div className='field'>
          <label htmlFor='isStudent'>Membership type:</label>
          <DropdownInput
            className={isStudentError !== null ? 'error' : undefined}
            id='isStudent'
            placeholder='Please select a membership type'
            options={[
              { label: 'Student', value: true },
              { label: 'Non-student', value: false },
            ]}
          />
        </div>

        <button type='submit' disabled={isSubmitting}>Become member</button>
      </form>

      {successMsg && <p>{successMsg}</p>}
    </section>
  );
}

export default NewMember;
