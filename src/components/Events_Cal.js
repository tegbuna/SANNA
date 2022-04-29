import React from 'react';




const Events_cal = ({title}) => {
  return (
    <div className='events'>
      <h2 className='title'>{title}</h2>
      <ul className='years'> 
        <li><h2> 2020 | </h2></li>
        <li><h2> 2021 | </h2></li>
        <li><h2> 2022 | </h2></li>
        <li><h2> 2023</h2></li>
      </ul>
      
    </div>
  )
}

export default Events_cal