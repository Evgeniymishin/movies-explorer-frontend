import {
  baseMoviesApiURL,
  baseApiURL,
  youTubeSearchLink,
} from './constants.js';

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

export const getApiUserInfo = () => {
  return fetch(`${baseApiURL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: headers,
  }).then(handleResponse);
};

export const patchUserInfo = (user) => {
  return fetch(`${baseApiURL}/users/me`, {
    method: 'PATCH',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify({
      name: user.name,
      email: user.email,
    }),
  }).then(handleResponse);
};

export const getSavedMovies = () => {
  return fetch(`${baseApiURL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: headers,
  }).then(handleResponse);
};

export const saveMovies = (movie) => {
  console.log(movie.image.url);
  return fetch(`${baseApiURL}/movies`, {
    method: 'POST',
    headers: headers,
    sameSite: 'none',
    secure: true,
    credentials: 'include',
    body: JSON.stringify({
      country: movie.country ?? 'Unknown',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${baseMoviesApiURL}${movie.image.url}`,
      trailerLink: movie.trailerLink
        ? movie.trailerLink
        : `${youTubeSearchLink}${movie.nameRU}`,
      thumbnail: `${baseMoviesApiURL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN ?? 'Unknown',
    }),
  }).then(handleResponse);
};

export const deleteMovie = (movie) => {
  return fetch(`${baseApiURL}/movies/${movie._id}`, {
    method: 'DELETE',
    headers: headers,
    credentials: 'include',
  }).then(handleResponse);
};
