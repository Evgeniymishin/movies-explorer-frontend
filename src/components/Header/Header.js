import AccountBar from '../AccountBar/AccountBar';
import AuthBar from '../AuthBar/AuthBar';
import BurgerButton from '../BurgerButton/BurgerButton';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { TABLE_SIZE } from '../../utils/constants';

export default function Header({
  color,
  isLoggedIn,
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
            {<Navigation />}
            {size > TABLE_SIZE && <AccountBar closeBurger={closeBurger} />}
            {size <= TABLE_SIZE && <BurgerButton openBurger={openBurger} />}
          </>
        )}
      </div>
    </header>
  );
}
