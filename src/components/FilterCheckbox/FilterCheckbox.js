import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div className='filer-checkbox'>
      <button
        className='filter-checkbox__button filter-checkbox__button_active_true'
        type='checkbox'
      ></button>
      <p className='filter-checkbox__label'>Короткометражки</p>
    </div>
  );
}
