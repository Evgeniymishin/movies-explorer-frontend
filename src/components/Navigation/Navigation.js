import './Navigation.css';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  function scrollIntoView(el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <ul className='navigation'>
      <li
        className={`navigation__element ${
          location.pathname === '/movies' && 'navigation__element_active'
        }`}
      >
        <HashLink
          to='/movies'
          scroll={scrollIntoView}
          className='navigation__element-link'
        >
          Фильмы
        </HashLink>
      </li>
      <li
        className={`navigation__element ${
          location.pathname === '/saved-movies' && 'navigation__element_active'
        }`}
      >
        <HashLink
          to='/saved-movies'
          scroll={scrollIntoView}
          className='navigation__element-link'
        >
          Сохранённые фильмы
        </HashLink>
      </li>
    </ul>
  );
}
