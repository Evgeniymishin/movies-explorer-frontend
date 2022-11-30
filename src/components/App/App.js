import './App.css';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import getAllMovies from '../../utils/MoviesApi';
import { register, login, logout } from '../../utils/AuthApi';
import {
  getApiUserInfo,
  patchUserInfo,
  getSavedMovies,
  saveMovies,
  deleteMovie,
} from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  REGISTRATION_ERROR,
  LOGIN_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  GET_USER_INFO_ERROR,
  GET_MOVIES_ERROR,
  GET_SAVED_MOVIES_ERROR,
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
} from '../../utils/constants';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isBurgerOpen, setisBurgerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentMovieLength, setCurrentMovieLength] = useState(0);
  const [moviesInColumn, setMoviesInColumn] = useState(0);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [size, setSize] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorLogMsg, setErrorLogMsg] = useState('');
  const [errorRegMsg, setErrorRegMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  function closeBurger() {
    setisBurgerOpen(false);
  }

  function handleClickBurgerButton() {
    setisBurgerOpen(true);
  }

  const resizeHandler = () => {
    setSize(window.innerWidth);
  };

  const handleClickMore = () => {
    setCurrentMovieLength(currentMovieLength + moviesInColumn);
  };

  const handleRegister = ({ name, password, email }) => {
    register({ name, password, email })
      .then((res) => {
        if (res) {
          setErrorRegMsg('');
          handleLogin({ password, email });
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setErrorRegMsg(REGISTRATION_ERROR);
      });
  };

  const handleLogin = ({ password, email }) => {
    login({ password, email })
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setErrorLogMsg('');
          setCurrentUser({ password, email });
          localStorage.setItem('isShortFilm', false);
          setTimeout(() => navigate('/movies'), NAVIGATE_TIMEOUT_TIME);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setErrorLogMsg(LOGIN_ERROR);
      });
  };

  const handleSaveMovie = (movie) => {
    const isLike = savedMovies.some((i) => i.movieId === movie.id);

    if (!isLike) {
      saveMovies(movie).then((res) => {
        setSavedMovies([...savedMovies, res]);
      });
    } else {
      const resMovie = savedMovies.find((i) => i.movieId === movie.id);
      handleDeleteMovie(resMovie);
    }
  };

  const handleDeleteMovie = (movie) => {
    deleteMovie(movie).then(() => {
      setFilteredSavedMovies(
        filteredSavedMovies.filter((i) => i._id !== movie._id)
      );
      setSavedMovies(savedMovies.filter((i) => i._id !== movie._id));
    });
  };

  const userUpdateHandle = ({ name, email }) => {
    patchUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setSuccessMsg(UPDATE_PROFILE_SUCCESS);
        setErrorMsg('');
      })
      .catch((err) => {
        setErrorMsg(UPDATE_PROFILE_ERROR);
        setSuccessMsg('');
      });
  };

  const signOutHandle = () => {
    logout()
      .then((res) => {
        localStorage.clear();
        setCurrentUser({});
        setisBurgerOpen(false);
        setIsLoading(false);
        setAllMovies([]);
        setFilteredMovies([]);
        setSavedMovies([]);
        setFilteredSavedMovies([]);
        setIsLoggedIn(false);
        setErrorMsg('');
        setErrorLogMsg('');
        setErrorRegMsg('');
        setSuccessMsg('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function tokenCheck() {
    getApiUserInfo()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        signOutHandle();
        console.log(err);
      });
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getApiUserInfo()
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(`${GET_USER_INFO_ERROR} ${err}`));
    }
  }, [isLoggedIn, currentUser.name, currentUser.email]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (isLoggedIn) {
      getAllMovies()
        .then((res) => {
          localStorage.setItem('allMovies', JSON.stringify(res));
          const movies = JSON.parse(localStorage.getItem('allMovies'));
          setAllMovies(movies);
          if (localStorage.getItem('filteredMovies') !== null) {
            setFilteredMovies(
              JSON.parse(localStorage.getItem('filteredMovies'))
            );
          }
        })
        .catch((err) => {
          console.log(`${GET_MOVIES_ERROR} ${err}`);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setIsLoading(true);
    if (isLoggedIn) {
      getSavedMovies()
        .then((res) => {
          localStorage.setItem(
            'savedMovies',
            JSON.stringify(res.filter((i) => i.owner === currentUser._id))
          );
          const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
          setSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.log(`${GET_SAVED_MOVIES_ERROR} ${err}`);
        })
        .finally(() => setIsLoading(false));
    }
  }, [currentUser._id, isLoggedIn]);

  useEffect(() => {
    if (size >= LAPTOP_SIZE) {
      setMoviesInColumn(LAPTOP_COLUMN_MOVIE);
      setCurrentMovieLength(LAPTOP_MOVIES_IN_PAGE);
    } else if (size >= TABLE_SIZE && size < LAPTOP_SIZE) {
      setMoviesInColumn(TABLE_COLUMN_MOVIE);
      setCurrentMovieLength(TABLE_MOVIES_IN_PAGE);
    } else if (size >= PHONE_SIZE && size < TABLE_SIZE) {
      setMoviesInColumn(PHONE_COLUMN_MOVIE);
      setCurrentMovieLength(PHONE_MOVIES_IN_PAGE);
    }
  }, [size]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Main
                isLoggedIn={isLoggedIn}
                size={size}
                isBurgerOpen={isBurgerOpen}
                closeBurger={closeBurger}
                openBurger={handleClickBurgerButton}
              />
            }
          />
          <Route
            exact
            path='/movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  isBurgerOpen={isBurgerOpen}
                  openBurger={handleClickBurgerButton}
                  closeBurger={closeBurger}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  currentMovieLength={currentMovieLength}
                  onClickMore={handleClickMore}
                  onRegistered={handleRegister}
                  isLoggedIn={isLoggedIn}
                  size={size}
                  onLike={handleSaveMovie}
                  onDelete={handleDeleteMovie}
                  savedMovies={savedMovies}
                  allMovies={allMovies}
                  setFilteredMovies={setFilteredMovies}
                  filteredMovies={filteredMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/saved-movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies
                  isBurgerOpen={isBurgerOpen}
                  openBurger={handleClickBurgerButton}
                  closeBurger={closeBurger}
                  cardList={filteredSavedMovies}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  currentMovieLength={currentMovieLength}
                  onClickMore={handleClickMore}
                  onRegistered={handleRegister}
                  isLoggedIn={isLoggedIn}
                  size={size}
                  onDelete={handleDeleteMovie}
                  savedMovies={savedMovies}
                  setFilteredSavedMovies={setFilteredSavedMovies}
                  filteredSavedMovies={filteredSavedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/profile'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  isLoggedIn={isLoggedIn}
                  openBurger={handleClickBurgerButton}
                  size={size}
                  onUserUpdate={userUpdateHandle}
                  onSignOut={signOutHandle}
                  errorMsg={errorMsg}
                  isBurgerOpen={isBurgerOpen}
                  closeBurger={closeBurger}
                  successMsg={successMsg}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/signup'
            element={
              <Register onRegistered={handleRegister} errorMsg={errorRegMsg} />
            }
          />
          <Route
            exact
            path='/signin'
            element={<Login onLogin={handleLogin} errorMsg={errorLogMsg} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
