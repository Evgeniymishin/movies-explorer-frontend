import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Movies({ openBurger, isBurgerOpen, closeBurger }) {
  return (
    <>
      <Header
        color='white'
        isLoggedIn={true}
        isFilmActive={true}
        openBurger={openBurger}
      />
      <main className='main'>
        <SearchForm />
        <MoviesCardList paginationButtonVisible={true} />
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
