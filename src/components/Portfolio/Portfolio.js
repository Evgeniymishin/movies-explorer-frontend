import './Portfolio.css';
import arrow from '../../images/portfolio_arrow.svg';

export default function Portfolio() {
  return (
    <>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__container'>
        <div className='portfolio__element-container'>
          <a
            className='portfolio__element-link'
            href='https://evgeniymishin.github.io/how-to-learn/'
          >
            Статичный сайт
          </a>
          <img src={arrow} alt='Стрелка' className='portfolio__element-icon' />
        </div>
        <div className='portfolio__element-container'>
          <a
            className='portfolio__element-link'
            href='https://evgeniymishin.github.io/russian-travel/'
          >
            Адаптивный сайт
          </a>
          <img src={arrow} alt='Стрелка' className='portfolio__element-icon' />
        </div>
        <div className='portfolio__element-container'>
          <a
            className='portfolio__element-link'
            href='https://github.com/Evgeniymishin/react-mesto-auth'
          >
            Одностраничное приложение
          </a>
          <img src={arrow} alt='Стрелка' className='portfolio__element-icon' />
        </div>
      </div>
    </>
  );
}
