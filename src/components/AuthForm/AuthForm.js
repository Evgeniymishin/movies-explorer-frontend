import Logo from '../Logo/Logo';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom'

export default function AuthForm(props) {
  const navigate = useNavigate();
  
  return (
    <section className='auth-form__container'>
      <Logo />
      <h1 className='auth-form__title'>{props.title}</h1>
      <form className='auth-form'>
        {props.children}
      </form>
      <div className='auth-form__btn-container'>
        <button className='auth-form__btn'>{props.btnName}</button>
        <div className='auth-form__redirect-container'>
          <p className='auth-form__redirect-text'>{props.redirectText}</p>
          <button className='auth-from__redirect-btn' onClick={() => navigate(props.redirectLink)}>{props.redirectLinkText}</button>
        </div>
      </div>
    </section>
  );
}