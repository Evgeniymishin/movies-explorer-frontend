import AuthForm from '../AuthForm/AuthForm';
import './Login.css';
import { FormValidation } from '../../utils/FormValidation';

export default function Login({ onLogin, errorMsg }) {
  const { values, handleChange, isValid, errors } = FormValidation();
  return (
    <AuthForm
      title='Рады видеть!'
      btnName='Войти'
      redirectText='Ещё не зарегистрированы?'
      redirectLink='/signup'
      redirectLinkText='Регистрация'
      onSubmit={onLogin}
      values={values}
      isValid={isValid}
      errorMsg={errorMsg}
    >
      <label className='auth-form__label'>
        E-mail
        <input
          className='form__input'
          id='email'
          type='email'
          name='email'
          required
          onChange={handleChange}
        />
        <span
          className={`form__error ${errors.email && 'form__error_visible'}`}
        >
          {errors.email}
        </span>
      </label>

      <label className='auth-form__label'>
        Пароль
        <input
          className='form__input'
          id='password'
          type='password'
          name='password'
          required
          onChange={handleChange}
        />
        <span
          className={`form__error ${errors.password && 'form__error_visible'}`}
        >
          {errors.password}
        </span>
      </label>
    </AuthForm>
  );
}
