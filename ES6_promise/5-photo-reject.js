// This script writes and exports a function named uploadPhoto.
export default function uploadPhoto(fileName) {
  return Promise.reject(Error(`${fileName} cannot be processed`));
}
