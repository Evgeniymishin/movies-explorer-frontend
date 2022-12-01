import './BurgerMenu.css';
import { HashLink } from 'react-router-hash-link';
import AccountBar from '../AccountBar/AccountBar';
import { useLocation } from 'react-router-dom';

export default function BurgerMenu({ isBurgerOpen, closeBurger }) {
  const location = useLocation();

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
                    location.pathname === '/' &&
                    'burger__navigation-link_active'
                  }`}
                  onClick={closeBurger}
                >
                  Главная
                </HashLink>
              </li>
              <li className='burger__navigation-element'>
                <HashLink
                  to='/movies'
                  scroll={scrollIntoView}
                  className={`burger__navigation-link ${
                    location.pathname === '/movies' &&
                    'burger__navigation-link_active'
                  }`}
                  onClick={closeBurger}
                >
                  Фильмы
                </HashLink>
              </li>
              <li className='burger__navigation-element'>
                <HashLink
                  to='/saved-movies'
                  scroll={scrollIntoView}
                  className={`burger__navigation-link ${
                    location.pathname === '/saved-movies' &&
                    'burger__navigation-link_active'
                  }`}
                  onClick={closeBurger}
                >
                  Сохраненные фильмы
                </HashLink>
              </li>
            </ul>
          </nav>
          <AccountBar closeBurger={closeBurger} />
          <button
            className='burger__close-btn'
            onClick={closeBurger}
            type='button'
          ></button>
        </div>
      </div>
    </div>
  );
}
