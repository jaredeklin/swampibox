import React from 'react';
import './card.css';
// import PropTypes from 'prop-types'

export const Card = (props) => {

  const displayCards = Object.keys(props.props).filter(property => property !== "name").map(info => {
    return (<li>{info}: {props.props[info]} </li>)
  })

  return (
    <div className='card'>
      <h2>{props.props.name}</h2>
      <button onClick={props.addToFavorites}>Favorite</button>
      <ul>
        {displayCards}
      </ul>
    </div>
  )
}

