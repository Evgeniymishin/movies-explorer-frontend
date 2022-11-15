import './MoviesCard.css';
import img from '../../images/movie_card.png';

export default function MoviesCard({ buttonType, buttonText }) {
  return (
    <figure className='movies-card'>
      <img className='movies-card__img' src={img} alt='Изображение' />
      <div className='movies-card__caption-container'>
        <figcaption className='movies-card__caption'>
          33 слова о дизайне
        </figcaption>
        <div className='movies-card__duration-container'>
          <div className='movies-card__duration'>1ч 17м</div>
        </div>
        <button className={`movies-card__${buttonType}-btn`}>
          {buttonText}
        </button>
      </div>
    </figure>
  );
}
