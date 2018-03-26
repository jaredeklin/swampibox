import React from 'react';
import { Card } from '../Card/Card';
import './cardContainer.css';
import PropTypes from 'prop-types'

export const CardContainer = ({ allData, addToFavorites }) => {

  let cardsToRender;

  switch (allData.active[0]) {
    case 'People':
    cardsToRender = allData.peopleData
      break;

    case 'Planets':
    cardsToRender = allData.planetData
      break;

    case 'Vehicles':
    cardsToRender = allData.vehicleData
      break;

    case 'Favorites':
    cardsToRender = allData.favorites
      break;

    default:
  }

  const cards = cardsToRender.map((person, index) => {
    let addClass = 'card';

    allData.favorites.forEach(favorite => {
      if(favorite.name === person.name) {
        addClass = 'card active'
      }
    })

    return  (<Card 
              properties={person}
              key={index}
              addToFavorites={addToFavorites}
              buttonClass={addClass}
            />)
  });

  return ( 
    <div className="card-container">
      {cards}
    </div>
  );
}

CardContainer.propTypes = {
  addToFavorites: PropTypes.func,
  allData: PropTypes.object
}


