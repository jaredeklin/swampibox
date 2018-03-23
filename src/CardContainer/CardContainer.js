import React from 'react';
import { Card } from '../Card/Card';
import './cardContainer.css';
import PropTypes from 'prop-types'

export const CardContainer = ({ allData, active, addToFavorites }) => {

  let cardsToRender;

  switch (active[0]) {
    case 'People':
    cardsToRender = allData.peopleData
      break;

    case 'Planets':
    cardsToRender = allData.planetData
      break;

    case 'Vehicles':
    cardsToRender = allData.vehicleData
      break;

    default:
  }

  const cards = cardsToRender.map((person, index) => {
    
    return  (<Card 
              props={person}
              key={index}
              addToFavorites={addToFavorites}
            />)
  });

  return ( 
    <div className="card-container">
      {cards}
    </div>
  );
}

CardContainer.propTypes = {
  name: PropTypes.string,
  pop: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string
}


