import AccountBar from '../AccountBar/AccountBar';
import AuthBar from '../AuthBar/AuthBar';
import BurgerButton from '../BurgerButton/BurgerButton';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header({
  color,
  isLoggedIn,
  activeLink,
  openBurger,
  size,
  closeBurger,
}) {
  return (
    <header className={`header header__color_${color}`}>
      <div className='header__container'>
        <Logo />
        {!isLoggedIn && <AuthBar />}
        {isLoggedIn && (
          <>
            {<Navigation activeLink={activeLink} />}
            {size > 780 && <AccountBar closeBurger={closeBurger} />}
            {size <= 780 && <BurgerButton openBurger={openBurger} />}
          </>
        )}
      </div>
    </header>
  );
}
