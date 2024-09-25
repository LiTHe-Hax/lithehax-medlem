import request from "./request";

function createMember({ firstName, lastName, email, isStudent }) {
  const data = {
    'first_name': firstName,
    'last_name': lastName,
    'email': email,
    'is_student': isStudent
  };
  return request('members/', 'post', data);
}

export { createMember };
