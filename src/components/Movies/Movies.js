import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Movies({
  openBurger,
  cardList,
  isLoading,
  onSearchSubmit,
  currentMovieLength,
  onClickMore,
  isLoggedIn,
  size,
  onBtnClick,
  savedMovies,
  shortSwitchHandle,
  isBurgerOpen,
  closeBurger,
}) {
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
          onSearchSubmit={onSearchSubmit}
          shortSwitchHandle={shortSwitchHandle}
        />
        <MoviesCardList
          cardList={cardList}
          isLoading={isLoading}
          currentMovieLength={currentMovieLength}
          onClickMore={onClickMore}
          onBtnClick={onBtnClick}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
      <BurgerMenu isBurgerOpen={isBurgerOpen} closeBurger={closeBurger} />
    </>
  );
}
