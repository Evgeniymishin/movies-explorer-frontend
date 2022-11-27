import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState, useEffect } from 'react';

export default function SavedMovies({
  openBurger,
  isBurgerOpen,
  closeBurger,
  isLoading,
  setIsLoading,
  currentMovieLength,
  onClickMore,
  isLoggedIn,
  size,
  savedMovies,
  setFilteredSavedMovies,
  filteredSavedMovies,
  onDelete,
}) {
  const [isShortFilm, setIsShortFilm] = useState('false');
  const [isEmptySearchResult, setIsEmptySearchResult] = useState('false');

  useEffect(() => {
    setFilteredSavedMovies(savedMovies);
  }, [savedMovies]);

  const handleSearch = (value) => {
    setIsLoading(true);
    const shortMovies = savedMovies.filter((item) => item.duration <= 40);
    const movies = isShortFilm === 'true' ? shortMovies : savedMovies;
    const newFilteredMovies = movies.filter((movie) => {
      value = value.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      const nameRU = movie.nameRU.toLowerCase();
      return (nameEN && nameEN.toLowerCase().includes(value) && value !== '') ||
        (nameRU && nameRU.toLowerCase().includes(value) && value !== '')
        ? value
        : null;
    });

    setFilteredSavedMovies(newFilteredMovies);
    setIsEmptySearchResult(newFilteredMovies.length === 0 ? 'true' : 'false');
    setIsLoading(false);
  };

  return (
    <>
      <Header
        color='white'
        isLoggedIn={isLoggedIn}
        activeLink='saved-movie'
        openBurger={openBurger}
        size={size}
        closeBurger={closeBurger}
      />
      <main className='main'>
        <SearchForm
          onSearchSubmit={handleSearch}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
        />
        <MoviesCardList
          cardList={filteredSavedMovies}
          isLoading={isLoading}
          currentMovieLength={currentMovieLength}
          onClickMore={onClickMore}
          savedMovies={savedMovies}
          onDelete={onDelete}
          isEmptySearchResult={isEmptySearchResult}
        />
      </main>
      <Footer />
      <BurgerMenu isBurgerOpen={isBurgerOpen} closeBurger={closeBurger} />
    </>
  );
}
