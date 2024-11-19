import request from "./request";

interface Member {
  firstName: string,
  lastName: string,
  email: string,
  isStudent: boolean,
}

function createMember({ firstName, lastName, email, isStudent }: Member) {
  const data = {
    'first_name': firstName,
    'last_name': lastName,
    'email': email,
    'is_student': isStudent
  };
  return request('members/', 'post', data);
}

export { createMember };
