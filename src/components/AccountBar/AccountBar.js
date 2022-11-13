import './AccountBar.css';
import icon from '../../images/accbar_icon.svg'
import { HashLink } from 'react-router-hash-link';


export default function AccountBar() {
  function scrollIntoView(el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  
  return (
    <HashLink to='/profile' scroll={scrollIntoView} className='accountbar__link'>
      <div className='accountbar'>
        <p className='accountbar__text'>Аккаунт</p>
        <div className='accountbar__icon-container'>
          <img src={icon} alt='Иконка аккаунта' className='accountbar__icon' />
        </div>
      </div>
    </HashLink>
  )
}