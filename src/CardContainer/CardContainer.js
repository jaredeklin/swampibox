import React from 'react';
import { Card } from '../Card/Card';
import './cardContainer.css';
import PropTypes from 'prop-types'

export const CardContainer = ({allData, peopleData, addToFavorites, vehicleData, planetData}) => {

  const peopleCards = peopleData.map((person, index) => {
    
    return  (<Card 
              props={person}
              key={index}
              addToFavorites={addToFavorites}
            />)
  });

  return ( 
    <div className="card-container">
      {peopleCards}
    </div>
  );
}

CardContainer.propTypes = {
  name: PropTypes.string,
  pop: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string
}


