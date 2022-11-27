import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext, useState, useEffect } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Profile({
  isLoggedIn,
  openBurger,
  size,
  onUserUpdate,
  onSignOut,
  errorMsg,
  isBurgerOpen,
  closeBurger,
  successMsg,
}) {
  const user = useContext(CurrentUserContext);
  const [nameInput, setNameInput] = useState(user.name);
  const [emailInput, setEmailInput] = useState(user.email);
  const [isDisabledBtn, setisDisabledBtn] = useState(true);

  const handleUserUpdate = () => {
    onUserUpdate({ name: nameInput, email: emailInput });
    setisDisabledBtn(true);
  };

  const handleSignOunt = () => {
    onSignOut();
  };

  function handleChangeName(evt) {
    setNameInput(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmailInput(evt.target.value);
  }

  function setDisabledBtn() {
    if (
      user.name !== '' &&
      user.email !== '' &&
      (user.name !== nameInput || user.email !== emailInput)
    ) {
      setisDisabledBtn(false);
    } else {
      setisDisabledBtn(true);
    }
  }

  useEffect(() => {
    setDisabledBtn();
  }, [nameInput, emailInput]);

  return (
    <>
      <Header
        color='white'
        isLoggedIn={isLoggedIn}
        activeLink='saved-movie'
        openBurger={openBurger}
        size={size}
        closeBurger={closeBurger}
      />
      <main>
        <section className='profile'>
          <div className='profile__container'>
            <h2 className='profile__title'>{`Привет, ${user.name}`}</h2>
            <div className='profile__info-container'>
              <div className='profile__field-container'>
                <label className='profile__field-name'>Имя</label>
                <input
                  className='profile__field-value'
                  id='name'
                  type='text'
                  name='name'
                  required
                  onChange={handleChangeName}
                  defaultValue={user.name}
                />
              </div>
              <div className='profile__field-container'>
                <label className='profile__field-name'>E-mail</label>
                <input
                  className='profile__field-value'
                  id='email'
                  type='email'
                  name='email'
                  required
                  onChange={handleChangeEmail}
                  defaultValue={user.email}
                />
              </div>
            </div>
            {errorMsg && <p className='profile__err-msg'>{errorMsg}</p>}
            {successMsg && <p className='profile__success-msg'>{successMsg}</p>}
            <div className='profile__btn-container'>
              <button
                className='profile__btn'
                type='button'
                onClick={handleUserUpdate}
                disabled={isDisabledBtn}
              >
                Редактировать
              </button>
              <button
                className='profile__btn profile__btn_color_red'
                type='button'
                onClick={handleSignOunt}
              >
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </section>
      </main>
      <BurgerMenu isBurgerOpen={isBurgerOpen} closeBurger={closeBurger} />
    </>
  );
}
