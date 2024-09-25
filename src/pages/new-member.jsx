function NewMember() {
  const createMember = (e) => {
    e.preventDefault();
    const data = {
      'first_name': e.target.firstName.value,
      'last_name': e.target.lastName.value,
      'email': e.target.email.value,
      'is_student': e.target.studentMembership.checked,
    };
    alert('THIS HAS NOT BEEN REIMPLEMENTED YET\n\n' + JSON.stringify(data));
  };

  return (
    <>
      <h1>Become a member</h1>
      <p>
        Join LiTHe Hax and become a member! As a member, you'll gain access to exclusive events, resources, and updates about our organization's activities. Once your membership is approved by our board, we will contact you with further details.
      </p>
      <form onSubmit={createMember}>
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
    </>
  );
}

export default NewMember;
