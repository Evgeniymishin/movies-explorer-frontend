import './MoviesCard.css';
import { baseMoviesApiURL } from '../../utils/constants';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ card, savedMovies, onLike, onDelete }) {
  const location = useLocation();
  const duration = `${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`;

  const src =
    location.pathname === '/movies'
      ? `${baseMoviesApiURL}/${card.image.url}`
      : card.image;
  const buttonType =
    location.pathname === '/movies'
      ? card.id && savedMovies.some((i) => i.movieId === card.id)
        ? 'checked'
        : 'save'
      : 'delete';
  const buttonText = buttonType === 'save' ? 'Сохранить' : '';

  const handleBtnClick = () => {
    location.pathname === '/movies' ? onLike(card) : onDelete(card);
  };

  return (
    <figure className='movies-card' id={card.id}>
      <a
        className='movies-card__link'
        href={card.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img className='movies-card__img' src={src} alt={card.nameRU} />
      </a>
      <div className='movies-card__caption-container'>
        <figcaption className='movies-card__caption'>{card.nameRU}</figcaption>
        <div className='movies-card__duration-container'>
          <div className='movies-card__duration'>{duration}</div>
        </div>
        <button
          className={`movies-card__${buttonType}-btn`}
          type='button'
          onClick={handleBtnClick}
        >
          {buttonText}
        </button>
      </div>
    </figure>
  );
}
