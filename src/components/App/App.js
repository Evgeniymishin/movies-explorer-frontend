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
import { register, login } from '../../utils/AuthApi';
import {
  getApiUserInfo,
  patchUserInfo,
  getSavedMovies,
  saveMovies,
  deleteMovie,
} from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  function closeBurger() {
    setisBurgerOpen(false);
  }

  function handleClickBurgerButton() {
    setisBurgerOpen(true);
  }

  const handleSearch = (value) => {
    setIsLoading(true);
    const filteredMovies = allMovies.filter((movie) => {
      value = value.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      const nameRU = movie.nameRU.toLowerCase();
      return (nameEN && nameEN.toLowerCase().includes(value) && value !== '') ||
        (nameRU && nameRU.toLowerCase().includes(value) && value !== '')
        ? value
        : null;
    });

    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    setFilteredMovies(filteredMovies);
    setIsLoading(false);
  };

  const handleSavedMovieSearch = (value) => {
    setIsLoading(true);
    const filteredSavedMovies = savedMovies.filter((movie) => {
      value = value.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      const nameRU = movie.nameRU.toLowerCase();
      return (nameEN && nameEN.toLowerCase().includes(value) && value !== '') ||
        (nameRU && nameRU.toLowerCase().includes(value) && value !== '')
        ? value
        : null;
    });

    localStorage.setItem(
      'filteredSavedMovies',
      JSON.stringify(filteredSavedMovies)
    );
    setFilteredSavedMovies(filteredSavedMovies);
    setIsLoading(false);
  };

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
          setIsLoggedIn(true);
          setErrorMsg('');
          navigate('/movies');
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setErrorMsg('При регистрации пользователя произошла ошибка.');
      });
  };

  const handleLogin = ({ password, email }) => {
    login({ password, email })
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setErrorMsg('');
          setCurrentUser({ password, email });

          navigate('/movies');
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setErrorMsg('Вы ввели неправильный логин или пароль.');
      });
  };

  const handleSaveMovie = (movie) => {
    saveMovies(movie).then((res) => {
      setSavedMovies([...savedMovies, res]);
    });
  };

  const handleDeleteMovie = (movie) => {
    deleteMovie(movie).then(() => {
      setFilteredSavedMovies(
        filteredSavedMovies.filter((i) => i._id !== movie._id)
      );
      setSavedMovies(savedMovies.filter((i) => i._id !== movie._id));
    });
  };

  const shortMovieSwitchHandle = (checked) => {
    // const filterMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    if (checked === '0' && filteredMovies) {
      const shortMovies = filteredMovies.filter((item) => item.duration <= 40);
      setFilteredMovies(shortMovies);
    } else {
      setFilteredMovies(allMovies);
    }
  };

  const shortSaveMovieSwitchHandle = (checked) => {
    // const filteredSavedMovies = JSON.parse(
    //   localStorage.getItem('filteredSavedMovies')
    // );
    if (checked === '0' && filteredSavedMovies) {
      const shortMovies = filteredSavedMovies.filter(
        (item) => item.duration <= 40
      );
      setFilteredSavedMovies(shortMovies);
    } else {
      setFilteredSavedMovies(savedMovies);
    }
  };

  const userUpdateHandle = (user) => {
    patchUserInfo(user)
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        setErrorMsg('При обновлении профиля произошла ошибка.');
      });
  };

  const signOutHandle = () => {
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('filteredSavedMovies');
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  useEffect(() => {
    if (isLoggedIn) {
      getApiUserInfo()
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(`Имя пользователя не получено: ${err}`));
    }
  }, [isLoggedIn]);

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
          const allMovies = JSON.parse(localStorage.getItem('allMovies'));
          setAllMovies(allMovies);
          setFilteredMovies(allMovies);
        })
        .catch((err) => {
          console.log(`Ошибка запроса: ${err}`);
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
          setFilteredSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.log(`Сохраненные фильмы не удалось получить: ${err}`);
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
                  cardList={filteredMovies}
                  isLoading={isLoading}
                  onSearchSubmit={handleSearch}
                  currentMovieLength={currentMovieLength}
                  onClickMore={handleClickMore}
                  onRegistered={handleRegister}
                  isLoggedIn={isLoggedIn}
                  size={size}
                  onBtnClick={handleSaveMovie}
                  savedMovies={savedMovies}
                  shortSwitchHandle={shortMovieSwitchHandle}
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
                  onSearchSubmit={handleSavedMovieSearch}
                  currentMovieLength={currentMovieLength}
                  onClickMore={handleClickMore}
                  onRegistered={handleRegister}
                  isLoggedIn={isLoggedIn}
                  size={size}
                  onBtnClick={handleDeleteMovie}
                  savedMovies={savedMovies}
                  shortSwitchHandle={shortSaveMovieSwitchHandle}
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
