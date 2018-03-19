import React from 'react';
import './card.css'

export const Card = () => {
  return (
    <div className='card'>
      <h2>Name here</h2>
      <button>Favorite</button>
      <ul>
        <li>Homeworld</li>
        <li>Species</li>
        <li>Language</li>
        <li>Population</li>
      </ul>
    </div>
  )
}