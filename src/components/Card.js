import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <h2 className='info'>{props.data}</h2>
          </div>
          <div className='card-back'>
            <h2 className='info'>{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
