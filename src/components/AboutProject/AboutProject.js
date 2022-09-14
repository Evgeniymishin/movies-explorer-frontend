import SectionHeading from '../SectionHeading/SectionHeading';
import Timeline from '../Timeline/Timeline';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project">
      <SectionHeading
        headingText={'О проекте'}
      />
      <ul className='about-project__container'>
        <li className='about-project__container-element'>
          <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__container-element'>
          <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <Timeline />
    </section>
  )
}