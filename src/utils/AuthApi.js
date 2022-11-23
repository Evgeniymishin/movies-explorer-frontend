import { baseApiURL } from './constants.js';

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

export const register = (data) => {
  return fetch(`${baseApiURL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(data),
  }).then(handleResponse);
};

export const login = (data) => {
  return fetch(`${baseApiURL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(data),
  }).then(handleResponse);
};
