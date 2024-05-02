// This script use the prototype function handleProfileSignup() to collectively resolve all
// promises and log body firstName lastName to the console.

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((resp) => {
      const { body } = resp[0];
      const { firstName, lastName } = resp[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
