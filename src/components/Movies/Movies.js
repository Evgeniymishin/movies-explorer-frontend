import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';

export default function Movies({
  openBurger,
  isLoading,
  currentMovieLength,
  onClickMore,
  isLoggedIn,
  size,
  onBtnClick,
  savedMovies,
  isBurgerOpen,
  closeBurger,
  setIsLoading,
  allMovies,
  setFilteredMovies,
  filteredMovies,
  onLike,
  onDelete,
}) {
  const [isShortFilm, setIsShortFilm] = useState(
    localStorage.getItem('isShortFilm')
  );
  const [isEmptySearchResult, setIsEmptySearchResult] = useState(
    localStorage.getItem('isEmptySearchResult')
  );

  const handleSearch = (value) => {
    setIsLoading(true);
    const shortMovies = allMovies.filter((item) => item.duration <= 40);
    const movies =
      localStorage.getItem('isShortFilm') === 'true' ? shortMovies : allMovies;
    const newFilteredMovies = movies.filter((movie) => {
      value = value.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      const nameRU = movie.nameRU.toLowerCase();
      return (nameEN && nameEN.toLowerCase().includes(value) && value !== '') ||
        (nameRU && nameRU.toLowerCase().includes(value) && value !== '')
        ? value
        : null;
    });

    setFilteredMovies(newFilteredMovies);
    setIsEmptySearchResult(newFilteredMovies.length === 0 ? 'true' : 'false');
    localStorage.setItem('isEmptySearchResult', isEmptySearchResult);
    localStorage.setItem('filteredMovies', JSON.stringify(newFilteredMovies));
    setIsLoading(false);
  };

  return (
    <>
      <Header
        color='white'
        isLoggedIn={isLoggedIn}
        activeLink='movie'
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
          cardList={filteredMovies}
          isLoading={isLoading}
          currentMovieLength={currentMovieLength}
          onClickMore={onClickMore}
          onBtnClick={onBtnClick}
          savedMovies={savedMovies}
          isEmptySearchResult={isEmptySearchResult}
          onLike={onLike}
          onDelete={onDelete}
        />
      </main>
      <Footer />
      <BurgerMenu isBurgerOpen={isBurgerOpen} closeBurger={closeBurger} />
    </>
  );
}
