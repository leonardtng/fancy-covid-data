import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <div>
          <h2 className='title'>{props.title}</h2>
        </div>
        <div>
          {props.isLoading ? (
            <h2 className='info'>Loading...</h2>
          ) : (
              <h2 className='info'>{props.data}</h2>
            )}
        </div>
      </div>
    </div>
  )
}

export default Card
