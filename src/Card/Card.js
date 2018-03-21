import React from 'react';
import './card.css';
import PropTypes from 'prop-types'

export const Card = ({ name, pop, species, homeworld, addToFavorites }) => {
  
  return (
    <div className='card'>
      <h2>{name}</h2>
      <button onClick={addToFavorites}>Favorite</button>
      <ul>
        <li>Homeworld: {homeworld}</li>
        <li>Species: {species}</li>
        <li>Population: {pop}</li>
      </ul>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  pop: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string
}