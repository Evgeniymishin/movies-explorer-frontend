import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

export default function MoviesCardList({
  cardList,
  isLoading,
  currentMovieLength,
  onClickMore,
  onBtnClick,
  savedMovies,
}) {
  return (
    <section className='movie-card-list'>
      {isLoading && <Preloader />}
      {!isLoading && (
        <div className='movie-card-list__grid'>
          {cardList
            .map((card, id) => {
              return (
                <MoviesCard
                  card={card}
                  onBtnClick={onBtnClick}
                  savedMovies={savedMovies}
                />
              );
            })
            .slice(0, currentMovieLength)}
        </div>
      )}
      {!isLoading &&
        (cardList.length === 0 && !isLoading ? (
          <p>Ничего не найдено</p>
        ) : (
          cardList.length > currentMovieLength && (
            <MoreButton onClickMore={onClickMore} />
          )
        ))}
    </section>
  );
}
