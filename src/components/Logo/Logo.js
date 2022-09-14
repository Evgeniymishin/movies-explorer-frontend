import './Logo.css';
import logo from '../../images/header_logo.svg'

export default function Logo() {
  return (
    <img src={logo} alt='Логотип' className='logo' />
  )
}