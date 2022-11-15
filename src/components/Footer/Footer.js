import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h3 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className='footer__copyrights'>
          <p className='footer__year'>© {new Date().getFullYear()}</p>
          <div className='footer__links'>
            <a className='footer__link' href='https://practicum.yandex.ru'>
              Яндекс.Практикум
            </a>
            <a className='footer__link' href='https://github.com/Evgeniymishin'>
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
