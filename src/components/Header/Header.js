import AuthBar from '../AuthBar/AuthBar';
import Logo from '../Logo/Logo';
import './Header.css';

export default function Header() {
  return (
    <section className='header header__color_grey'>
      <div className='header__container'>
        <Logo />
        <AuthBar />
      </div>
    </section>
  )
}