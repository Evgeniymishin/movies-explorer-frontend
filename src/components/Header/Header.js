import AccountBar from '../AccountBar/AccountBar';
import AuthBar from '../AuthBar/AuthBar';
import BurgerButton from '../BurgerButton/BurgerButton';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header({
  color,
  isLoggedIn,
  isFilmActive,
  openBurger,
}) {
  return (
    <header className={`header header__color_${color}`}>
      <div className='header__container'>
        <Logo />
        {!isLoggedIn && <AuthBar />}
        {isLoggedIn && (
          <>
            <Navigation isFilmActive={isFilmActive} />
            {/* <AccountBar /> */}
            <BurgerButton openBurger={openBurger} />
          </>
        )}
      </div>
    </header>
  );
}

// Пока не решил вопрос как по условиям показать бургерное меню или иконку аккаунта при смене расширения
