import './AccountBar.css';
import icon from '../../images/accbar_icon.svg'


export default function AccountBar() {
  return (
    <div className='accountbar'>
      <p className='accountbar-text'>Аккаунт</p>
      <div className='accountbar__icon-container'>
        <img src={icon} alt='Иконка аккаунта' className='accountbar__icon' />
      </div>
    </div>
  )
}