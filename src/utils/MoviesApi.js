import { baseMoviesApiURL } from './constants.js';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export default function getAllMovies() {
  return fetch(`${baseMoviesApiURL}/beatfilm-movies`, {
    method: 'GET',
    headers: headers,
  }).then(handleResponse);
}
