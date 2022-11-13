import './BurgerMenu.css';
import { HashLink } from 'react-router-hash-link';
import AccountBar from '../AccountBar/AccountBar';

export default function BurgerMenu({
  isMain,
  isMovies,
  isSavedMovies,
  isBurgerOpen,
  closeBurger,
}) {
  function scrollIntoView(el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div
      className={`burger__wrapper ${isBurgerOpen && 'burger__wrapper_opened'}`}
    >
      <div className={`burger ${isBurgerOpen && 'burger_opened'}`}>
        <div className='burger__container'>
          <nav className='burger__navigation'>
            <ul className='burger__navigation-list'>
              <li className='burger__navigation-element'>
                <HashLink
                  to='/'
                  scroll={scrollIntoView}
                  className={`burger__navigation-link ${
                    isMain && 'burger__navigation-link_active'
                  }`}
                >
                  Главная
                </HashLink>
              </li>
              <li className='burger__navigation-element'>
                <HashLink
                  to='/movies'
                  scroll={scrollIntoView}
                  className={`burger__navigation-link ${
                    isMovies && 'burger__navigation-link_active'
                  }`}
                >
                  Фильмы
                </HashLink>
              </li>
              <li className='burger__navigation-element'>
                <HashLink
                  to='/saved-movies'
                  scroll={scrollIntoView}
                  className={`burger__navigation-link ${
                    isSavedMovies && 'burger__navigation-link_active'
                  }`}
                >
                  Сохраненные фильмы
                </HashLink>
              </li>
            </ul>
          </nav>
          <AccountBar />
          <button className='burger__close-btn' onClick={closeBurger}></button>
        </div>
      </div>
    </div>
  );
}
