import './MoreButton.css';

export default function MoreButton({ onClickMore }) {
  return (
    <div className='more-btn__container'>
      <button className='more-btn' type='button' onClick={onClickMore}>
        Еще
      </button>
    </div>
  );
}
