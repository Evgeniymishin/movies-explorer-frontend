import SectionHeading from '../SectionHeading/SectionHeading';
import './AboutMe.css';
import photo from '../../images/aboutme_photo.png';
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
      <section className='aboutme'>
        <div className='aboutme__container'>
          <SectionHeading headingText={'Студент'} />
          <div className='aboutme__main'>
            <div className='aboutme__main-text'>
              <div>
                <h3 className='aboutme__title'>Виталий</h3>
                <p className='aboutme__position'>Фронтенд-разработчик, 30 лет</p>
                <p className='aboutme__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
              </div>
              <div className='aboutme__link-container'>
                <a className='aboutme__link' href='https://github.com/Evgeniymishin'>Github</a>
              </div>
            </div>
            <img src={photo} alt="Фото студента" className="aboutme_photo"/>
          </div>
          <Portfolio />
        </div>
      </section>
  )
}