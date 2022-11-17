import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <div className='search-form__area'>
          <label className='search-form__label'>
            <input className='search-form__input' placeholder='Фильм' required></input>
          </label>
          <button className='search-form__button' type='submit'></button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}
