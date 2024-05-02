// This script appends three handlers to the function handleResponseFromAPI(promise).
export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return ({ status: 200, body: 'success' });
    })
    .catch(() => {
      console.log('Got a response from the API');
      return (new Error());
    });
}
