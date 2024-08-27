import React, { createContext, useState } from 'react';

export const MembershipContext = createContext();

export const MembershipProvider = ({ children }) => {
  const [status, setStatus] = useState({})
  const addMember = (member) => {
    const newMember = { ...member };
    const url = (process.env.NODE_ENV === 'development')
      ? "http://localhost:8000/members/"
      : "https://lithehax-medlem-9abc9f434ec7.herokuapp.com/members/";
    console.log(newMember)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMember),
    }).then(res => {
      if (res.status === 200) {
        setStatus({ message: "Member request sent successfully!", color: "green" })
      }
      else if (res.status === 409) {
        setStatus({ message: `Membership request with email ${newMember.email} already exists!`, color: "red" })
      }
    }).catch(err => {
      setStatus({ message: `Error: ${err.message}`, color: "red" });
    })
  };

  return (
    <MembershipContext.Provider value={{ addMember, status }}>
      {children}
    </MembershipContext.Provider>
  );
};