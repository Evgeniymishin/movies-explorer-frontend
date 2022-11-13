import './BurgerButton.css';

export default function BurgerButton({openBurger}) {
  return (
    <button className='burger-button' type='button' onClick={openBurger}></button>
  )
}