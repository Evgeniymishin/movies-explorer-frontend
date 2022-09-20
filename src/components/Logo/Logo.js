import './Logo.css';
import logo from '../../images/header_logo.svg'
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className='logo__link' to='/'>
      <img src={logo} alt='Логотип' className='logo' />
    </Link>
  )
}