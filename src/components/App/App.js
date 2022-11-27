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
          setErrorMsg('');
          navigate('/signin');
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setErrorMsg(REGISTRATION_ERROR);
      });
  };

  const handleLogin = ({ password, email }) => {
    login({ password, email })
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setErrorMsg('');
          setCurrentUser({ password, email });
          localStorage.setItem('isShortFilm', false);
          setTimeout(() => navigate('/movies'), 3000);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setErrorMsg(LOGIN_ERROR);
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
        setIsLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
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
        setIsLoggedIn(false);
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
    if (size >= 1280) {
      setMoviesInColumn(3);
      setCurrentMovieLength(12);
    } else if (size >= 768 && size < 1280) {
      setMoviesInColumn(2);
      setCurrentMovieLength(8);
    } else if (size >= 320 && size < 768) {
      setMoviesInColumn(1);
      setCurrentMovieLength(5);
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
              <Register onRegistered={handleRegister} errorMsg={errorMsg} />
            }
          />
          <Route
            exact
            path='/signin'
            element={<Login onLogin={handleLogin} errorMsg={errorMsg} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
