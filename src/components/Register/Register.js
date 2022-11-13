import AuthForm from '../AuthForm/AuthForm';
import './Register.css';

export default function Register() {
  return (
    <AuthForm 
      title="Добро пожаловать!"
      btnName="Зарегистрироваться"
      redirectText="Уже зарегистрированы?"
      redirectLink="/signin"
      redirectLinkText="Войти"
    >
      <label className="auth-form__label">Имя
        <input
          className="form__input"
          type="text"
          name="name"
          required=""
          value="Виталий"
        />
        <span className="form__error">Что-то пошло не так...</span>
      </label>
        
      <label className="auth-form__label">E-mail
        <input
          className="form__input form__input_active"
          type="email"
          name="email"
          required=""
          value="pochta@yandex.ru"
        />
        <span className="form__error">Что-то пошло не так...</span>
      </label>

      <label className="auth-form__label">Пароль 
        <input
          className="form__input form__input_error"
          type="password"
          name="password"
          required=""
          value="password"
        />
        <span className="form__error form__error_visible">Что-то пошло не так...</span>
      </label>
    </AuthForm> 
  );
}