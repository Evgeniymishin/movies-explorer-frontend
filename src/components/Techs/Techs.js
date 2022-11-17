import SectionHeading from '../SectionHeading/SectionHeading';
import TechBlocks from '../TechBlocks/TechBlocks';
import './Techs.css';

export default function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <SectionHeading headingText={'Технологии'} />
        <div className='techs__main-info'>
          <h2 className='techs__title'>7 технологий</h2>
          <p className='techs__text'>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <TechBlocks />
        </div>
      </div>
    </section>
  );
}
