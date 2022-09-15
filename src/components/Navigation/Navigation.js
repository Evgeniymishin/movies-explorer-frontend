import './Navigation.css';

export default function Navigation() {
  return (
    <ul className='navigation'>
      <li className='navigation__element navigation__element_active'>Фильмы</li>
      <li className='navigation__element'>Сохранённые фильмы</li>
    </ul>
  )
}