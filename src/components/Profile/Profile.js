import Header from '../Header/Header';
import './Profile.css';

export default function Profile() {
  return (
    <>
      <Header color='white' isLoggedIn={true} isFilmActive={true} />
      <main>
        <section className='profile'>
          <div className='profile__container'>
            <h2 className='profile__title'>Привет, Виталий!</h2>
            <div className='profile__info-container'>
              <div className='profile__field-container'>
                <p className='profile__field-name'>Имя</p>
                <p className='profile__field-value'>Виталий</p>
              </div>
              <div className='profile__field-container'>
                <p className='profile__field-name'>E-mail</p>
                <p className='profile__field-value'>pochta@yandex.ru</p>
              </div>
            </div>
            <div className='profile__btn-container'>
              <button className='profile__btn' type='button'>Редактировать</button>
              <button className='profile__btn profile__btn_color_red' type='button'>
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
