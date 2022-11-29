import Logo from '../Logo/Logo';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AuthForm(props) {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setDisabledBtn(true);
    if (props.isValid) {
      props.onSubmit(props.values);
    }
  }

  return (
    <section className='auth-form__container'>
      <Logo />
      <h1 className='auth-form__title'>{props.title}</h1>
      <form className='auth-form' onSubmit={handleSubmit}>
        {props.children}
        <div className='auth-form__btn-container'>
          {props.errorMsg && (
            <p className='auth-form__err-msg'>{props.errorMsg}</p>
          )}
          <button
            className='auth-form__btn'
            type='submit'
            disabled={!props.isValid || disabledBtn}
          >
            {props.btnName}
          </button>
          <div className='auth-form__redirect-container'>
            <p className='auth-form__redirect-text'>{props.redirectText}</p>
            <button
              className='auth-from__redirect-btn'
              onClick={() => navigate(props.redirectLink)}
              type='button'
            >
              {props.redirectLinkText}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
