import './AuthBar.css';
import { useNavigate } from 'react-router-dom';

export default function AuthBar() {
  const navigate = useNavigate();

  return (
    <div className='auth-bar'>
      <button
        className='auth-bar__link auth-bar__link_color_gray'
        onClick={() => navigate('/signup')}
      >
        Регистрация
      </button>
      <button
        className='auth-bar__link auth-bar__link_color_green'
        onClick={() => navigate('/signin')}
      >
        Войти
      </button>
    </div>
  );
}
