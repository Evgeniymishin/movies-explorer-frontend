import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies() {
  return (
    <>
      <Header color='white' isLoggedIn={true} isFilmActive={false} />
      <main>
        <SearchForm />
        <MoviesCardList paginationButtonVisible={false} />
      </main>
      <Footer />
    </>
  );
}
