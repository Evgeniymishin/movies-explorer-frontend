import './Navigation.css';
import { HashLink } from 'react-router-hash-link';

export default function Navigation({ activeLink }) {
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
          activeLink === 'movie' && 'navigation__element_active'
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
          activeLink === 'saved-movie' && 'navigation__element_active'
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
