import React from 'react';
import './card.css'

export const Card = ({ name, pop, species, homeworld }) => {
  
  return (
    <div className='card'>
      <h2>{name}</h2>
      <button>Favorite</button>
      <ul>
        <li>Homeworld: {homeworld}</li>
        <li>Species: {species}</li>
        <li>Population: {pop}</li>
      </ul>
    </div>
  )
}