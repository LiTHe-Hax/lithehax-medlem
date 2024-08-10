import React, { createContext, useState } from 'react';

export const MembershipContext = createContext();

export const MembershipProvider = ({ children }) => {
  const [members, setMembers] = useState([
    { id: 1, name: 'Tyson Horvath', email: 'isakhorvath@gmail.com', joinedDate: '2024-08-10' },
    { id: 2, name: 'Viktor Holta', email: 'hiktorvolta@gmail.com', joinedDate: '2024-08-10' },
  ]);

  const addMember = (member) => {
    const newMember = { ...member, id: Date.now(), joinedDate: new Date().toISOString().split('T')[0] };
    setMembers([...members, newMember]);
  };

  return (
    <MembershipContext.Provider value={{ members, addMember }}>
      {children}
    </MembershipContext.Provider>
  );
};