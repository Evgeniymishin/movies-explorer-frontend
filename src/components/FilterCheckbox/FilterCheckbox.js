import './FilterCheckbox.css';
import { useState } from 'react';

export default function FilterCheckbox({ shortSwitchHandle }) {
  const [checked, setChecked] = useState('0');

  const handleSwitchHandle = () => {
    setChecked(checked === '0' ? '1' : '0');
    shortSwitchHandle(checked);
  };

  return (
    <div className='filer-checkbox'>
      <button
        className={`filter-checkbox__button filter-checkbox__button_active_${
          checked === '0' ? 'false' : 'true'
        }`}
        type='button'
        onClick={handleSwitchHandle}
      ></button>
      <p className='filter-checkbox__label'>Короткометражки</p>
    </div>
  );
}
