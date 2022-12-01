import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

export default function FilterCheckbox({ isShortFilm, setIsShortFilm }) {
  const location = useLocation();

  const handleSwitchHandle = () => {
    if (location.pathname === '/movies') {
      if (localStorage.getItem('isShortFilm') === 'true') {
        localStorage.setItem('isShortFilm', 'false');
        setIsShortFilm('false');
      } else {
        localStorage.setItem('isShortFilm', 'true');
        setIsShortFilm('true');
      }
    } else {
      console.log(isShortFilm);
      if (isShortFilm === 'true') {
        setIsShortFilm('false');
        console.log(isShortFilm);
      } else {
        setIsShortFilm('true');
        console.log(isShortFilm);
      }
    }
  };

  return (
    <div className='filer-checkbox'>
      <button
        className={`filter-checkbox__button filter-checkbox__button_active_${isShortFilm}`}
        type='button'
        onClick={handleSwitchHandle}
      ></button>
      <p className='filter-checkbox__label'>Короткометражки</p>
    </div>
  );
}
