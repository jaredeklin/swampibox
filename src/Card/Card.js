import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

export const Card = ({properties, addToFavorites, buttonClass}) => {

  const displayCards = Object.keys(properties)
    .filter(property => property !== "name")
    .map((info, index) => {
      return (
        <li key={index}>
          <span className="card-keys">
          {info}</span>: {properties[info]} 
        </li>)
  })

  return (
    <div className={buttonClass}>
      <h2>{properties.name}</h2>   
        {displayCards}  
      <button onClick={() => addToFavorites(properties)} className='card-button'></button>
    </div>
  ) 
}

Card.propTypes = {
  properties: PropTypes.object,
  addToFavorites: PropTypes.func,
  className: PropTypes.string
}