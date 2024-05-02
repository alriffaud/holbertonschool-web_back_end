// This script returns a Promise using this prototype function getResponseFromAPI().
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      resolve();
    } else {
      reject();
    }
  });
}
