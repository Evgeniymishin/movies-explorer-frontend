import './Timeline.css';

export default function Timeline() {
  return (
    <div className='timeline'>
        <p className='timeline__cell timeline__cell_green'>1 неделя</p>
        <p className='timeline__cell timeline__cell_gray'>4 недели</p>
        <p className='timeline__cell timeline__span'>Back-end</p>
        <p className='timeline__cell timeline__span'>Front-end</p>
    </div> 
  )
}