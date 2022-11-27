import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

export default function MoviesCardList({
  cardList,
  isLoading,
  currentMovieLength,
  onClickMore,
  onBtnClick,
  savedMovies,
  isEmptySearchResult,
  onLike,
  onDelete,
}) {
  const location = useLocation();
  return (
    <section className='movie-card-list'>
      {isLoading && <Preloader />}
      {!isLoading && (
        <div className='movie-card-list__grid'>
          {location.pathname === '/movies' &&
            cardList &&
            cardList
              .map((card) => {
                return (
                  <MoviesCard
                    card={card}
                    onBtnClick={onBtnClick}
                    onLike={onLike}
                    onDelete={onDelete}
                    savedMovies={savedMovies}
                  />
                );
              })
              .slice(0, currentMovieLength)}
          {location.pathname !== '/movies' &&
            cardList &&
            cardList.map((card) => {
              return (
                <MoviesCard
                  card={card}
                  onDelete={onDelete}
                  savedMovies={savedMovies}
                  onLike={onLike}
                />
              );
            })}
        </div>
      )}
      {!isLoading &&
        (isEmptySearchResult === 'true' && !isLoading ? (
          <p>Ничего не найдено</p>
        ) : (
          location.pathname === '/movies' &&
          cardList &&
          cardList.length > currentMovieLength && (
            <MoreButton onClickMore={onClickMore} />
          )
        ))}
    </section>
  );
}
