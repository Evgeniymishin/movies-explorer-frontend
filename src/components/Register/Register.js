import AuthForm from '../AuthForm/AuthForm';
import './Register.css';
import { FormValidation } from '../../utils/FormValidation';

export default function Register({ onRegistered }) {
  const { values, handleChange, isValid, errors } = FormValidation();

  return (
    <AuthForm
      title='Добро пожаловать!'
      btnName='Зарегистрироваться'
      redirectText='Уже зарегистрированы?'
      redirectLink='/signin'
      redirectLinkText='Войти'
      onSubmit={onRegistered}
      values={values}
      isValid={isValid}
    >
      <label className='auth-form__label'>
        Имя
        <input
          className='form__input'
          id='name'
          type='text'
          name='name'
          required
          onChange={handleChange}
        />
        <span className={`form__error ${errors.name && 'form__error_visible'}`}>
          {errors.name}
        </span>
      </label>

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
