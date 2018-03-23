import React, { Component } from 'react';
import './card.css';
import PropTypes from 'prop-types'

export const Card = ({properties, addToFavorites}) => {

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
    <div className='card'>
      <h2>{properties.name}</h2>
      <button onClick={() => addToFavorites(properties)}>Favorite</button>
      <ul>
        {displayCards}
      </ul>
    </div>
  ) 
}

Card.propTypes = {
  properties: PropTypes.object,
  addToFavorites: PropTypes.func
}