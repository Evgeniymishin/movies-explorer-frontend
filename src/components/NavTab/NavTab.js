import './NavTab.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function NavTab() {
  function scrollIntoView(el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <section className="navtab">
      <ul className='navtab__list'>
        <li className='navtab__list-element'>
          <HashLink to='/#about-project' scroll={scrollIntoView}>О проекте</HashLink>
        </li>
        <li className='navtab__list-element'>
          <HashLink to='/#techs' scroll={scrollIntoView}>Технологии</HashLink>
        </li>
        <li className='navtab__list-element'>
        <HashLink to='/#aboutme' scroll={scrollIntoView}>Студент</HashLink>
        </li>
      </ul>
    </section>
  )
}