import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';

export default function SearchForm({
  onSearchSubmit,
  isShortFilm,
  setIsShortFilm,
}) {
  const [value, setValue] = useState(localStorage.getItem('searchValue'));
  const location = useLocation();

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (location.pathname === '/movies') {
      localStorage.setItem('searchValue', value);
    }
    onSearchSubmit(value);
  }

  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={handleSubmit}>
        <div className='search-form__area'>
          <label className='search-form__label'>
            <input
              className='search-form__input'
              placeholder='Фильм'
              required
              onChange={handleValueChange}
              defaultValue={
                value !== null && location.pathname === '/movies' ? value : ''
              }
            ></input>
          </label>
          <button className='search-form__button' type='submit'></button>
        </div>
        <FilterCheckbox
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
        />
      </form>
    </section>
  );
}
