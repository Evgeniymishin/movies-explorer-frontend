import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile({
  isLoggedIn,
  openBurger,
  size,
  onUserUpdate,
  onSignOut,
  errorMsg,
}) {
  const user = useContext(CurrentUserContext);
  const [nameInput, setNameInput] = useState(user.name);
  const [emailInput, setEmailInput] = useState(user.email);
  const [isDisabledBtn, setisDisabledBtn] = useState(true);
  const navigate = useNavigate();

  const handleUserUpdate = () => {
    onUserUpdate({ name: nameInput, email: emailInput });
  };

  const handleSignOunt = () => {
    onSignOut();
    navigate('/');
  };

  function handleChangeName(evt) {
    setNameInput(evt.target.value);
    setDisabledBtn();
  }

  function handleChangeEmail(evt) {
    setEmailInput(evt.target.value);
    setDisabledBtn();
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

  return (
    <>
      <Header
        color='white'
        isLoggedIn={isLoggedIn}
        activeLink='saved-movie'
        openBurger={openBurger}
        size={size}
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
    </>
  );
}
