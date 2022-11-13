import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

export default function Login() {
  return (
    <AuthForm
      title='Рады видеть!'
      btnName='Войти'
      redirectText='Ещё не зарегистрированы?'
      redirectLink='/signup'
      redirectLinkText='Регистрация'
    >
      <label className='auth-form__label'>
        E-mail
        <input
          className='form__input'
          type='email'
          name='email'
          required=''
          value='pochta@yandex.ru'
        />
        <span className='form__error'>Что-то пошло не так...</span>
      </label>

      <label className='auth-form__label'>
        Пароль
        <input
          className='form__input'
          type='password'
          name='password'
          required=''
          value=''
        />
        <span className='form__error'>Что-то пошло не так...</span>
      </label>
    </AuthForm>
  );
}
