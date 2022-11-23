import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm({ onSearchSubmit, shortSwitchHandle }) {
  const [value, setValue] = useState('');

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

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
            ></input>
          </label>
          <button className='search-form__button' type='submit'></button>
        </div>
        <FilterCheckbox shortSwitchHandle={shortSwitchHandle} />
      </form>
    </section>
  );
}
