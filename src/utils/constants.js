const baseMoviesApiURL = 'https://api.nomoreparties.co';
const baseApiURL =
  'https://api.evgeniymishin.moviesexplorer.nomorepartiesxyz.ru';
const youTubeSearchLink = 'https://www.youtube.com/results?search_query=';
const REGISTRATION_ERROR = 'При регистрации пользователя произошла ошибка.';
const LOGIN_ERROR = 'Вы ввели неправильный логин или пароль.';
const UPDATE_PROFILE_SUCCESS = 'Профиль успешно обновлен.';
const UPDATE_PROFILE_ERROR = 'При обновлении профиля произошла ошибка.';
const GET_USER_INFO_ERROR = 'Имя пользователя не получено:';
const GET_MOVIES_ERROR = 'Ошибка загрузки каталога фильмов:';
const GET_SAVED_MOVIES_ERROR = 'Сохраненные фильмы не удалось получить:';
const MIN_IN_HOURS = 60;
const NAVIGATE_TIMEOUT_TIME = 3000;
const LAPTOP_SIZE = 1280;
const LAPTOP_COLUMN_MOVIE = 3;
const LAPTOP_MOVIES_IN_PAGE = 12;
const TABLE_SIZE = 768;
const TABLE_COLUMN_MOVIE = 2;
const TABLE_MOVIES_IN_PAGE = 8;
const PHONE_SIZE = 320;
const PHONE_COLUMN_MOVIE = 1;
const PHONE_MOVIES_IN_PAGE = 5;

export {
  baseMoviesApiURL,
  baseApiURL,
  youTubeSearchLink,
  REGISTRATION_ERROR,
  LOGIN_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  GET_USER_INFO_ERROR,
  GET_MOVIES_ERROR,
  GET_SAVED_MOVIES_ERROR,
  MIN_IN_HOURS,
  NAVIGATE_TIMEOUT_TIME,
  LAPTOP_SIZE,
  LAPTOP_COLUMN_MOVIE,
  LAPTOP_MOVIES_IN_PAGE,
  TABLE_SIZE,
  TABLE_COLUMN_MOVIE,
  TABLE_MOVIES_IN_PAGE,
  PHONE_SIZE,
  PHONE_COLUMN_MOVIE,
  PHONE_MOVIES_IN_PAGE,
};
