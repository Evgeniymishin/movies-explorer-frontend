import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ paginationButtonVisible }) {
  return (
    <section className='movie-card-list'>
      <div className='movie-card-list__grid'>
        {/* <MoviesCard
            buttonType={"save"}
            buttonText={"Сохранить"}
          /> */}
        <MoviesCard buttonType={'checked'} />
        {/* <MoviesCard
            buttonType={"delete"}
          /> */}
        <MoviesCard buttonType={'save'} buttonText={'Сохранить'} />
        <MoviesCard buttonType={'save'} buttonText={'Сохранить'} />
        <MoviesCard buttonType={'save'} buttonText={'Сохранить'} />
        <MoviesCard buttonType={'save'} buttonText={'Сохранить'} />
        {/* <MoviesCard
            buttonType={"save"}
            buttonText={"Сохранить"}
          /> */}
        {/* <MoviesCard
            buttonType={"save"}
            buttonText={"Сохранить"}
          /> */}
        {/* <MoviesCard
            buttonType={"save"}
            buttonText={"Сохранить"}
          />
          <MoviesCard
            buttonType={"save"}
            buttonText={"Сохранить"}
          /> */}
        {/* <MoviesCard
            buttonType={"save"}
            buttonText={"Сохранить"}
          /> */}
      </div>
      <div
        className={`movie-card-list__more-btn-container ${
          paginationButtonVisible &&
          'movie-card-list__more-btn-container_visible'
        }`}
      >
        <button className='movie-card-list__more-btn'>Еще</button>
      </div>
    </section>
  );
}
