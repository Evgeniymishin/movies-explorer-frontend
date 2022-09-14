import './AuthBar.css';

export default function AuthBar() {
  return (
    <div className='auth-bar'>
      <div className='auth-bar__link'>Регистрация</div>
      <div className='auth-bar__link auth-bar__link_color_green'>Войти</div>
    </div>
  )
}