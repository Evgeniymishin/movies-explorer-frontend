import './Portfolio.css';
import arrow from '../../images/portfolio_arrow.svg';

export default function Portfolio() {
  return (
    <>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__container'>
        <li className='portfolio__element'>
          <a
            className='portfolio__element-link'
            href='https://evgeniymishin.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='portfolio__element-container'>
              <p className='portfolio__element-text'>Статичный сайт</p>
              <img
                src={arrow}
                alt='Стрелка'
                className='portfolio__element-icon'
              />
            </div>
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            className='portfolio__element-link'
            href='https://evgeniymishin.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='portfolio__element-container'>
              <p className='portfolio__element-text'>Адаптивный сайт</p>
              <img
                src={arrow}
                alt='Стрелка'
                className='portfolio__element-icon'
              />
            </div>
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            className='portfolio__element-link'
            href='https://github.com/Evgeniymishin/react-mesto-auth'
            target='_blank'
            rel='noreferrer'
          >
            <div className='portfolio__element-container'>
              <p className='portfolio__element-text'>Одностраничное приложение</p>
              <img
                src={arrow}
                alt='Стрелка'
                className='portfolio__element-icon'
              />
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}
