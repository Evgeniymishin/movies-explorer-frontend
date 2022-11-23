import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Main({
  isLoggedIn,
  size,
  isBurgerOpen,
  closeBurger,
  openBurger,
}) {
  return (
    <>
      <Header
        color='grey'
        isLoggedIn={isLoggedIn}
        size={size}
        activeLink='none'
        openBurger={openBurger}
      />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
      <BurgerMenu isBurgerOpen={isBurgerOpen} closeBurger={closeBurger} />
    </>
  );
}
