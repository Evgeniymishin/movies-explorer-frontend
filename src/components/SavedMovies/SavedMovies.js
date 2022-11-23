import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function SavedMovies({
  openBurger,
  isBurgerOpen,
  closeBurger,
  cardList,
  isLoading,
  onSearchSubmit,
  currentMovieLength,
  onClickMore,
  isLoggedIn,
  size,
  savedMovies,
  onBtnClick,
  shortSwitchHandle,
}) {
  return (
    <>
      <Header
        color='white'
        isLoggedIn={isLoggedIn}
        activeLink='saved-movie'
        openBurger={openBurger}
        size={size}
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
          savedMovies={savedMovies}
          onBtnClick={onBtnClick}
        />
      </main>
      <Footer />
      <BurgerMenu
        isMovies={true}
        isBurgerOpen={isBurgerOpen}
        closeBurger={closeBurger}
      />
    </>
  );
}
