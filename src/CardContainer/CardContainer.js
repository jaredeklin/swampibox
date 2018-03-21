import React from 'react';
import { Card } from '../Card/Card';
import './cardContainer.css';
import PropTypes from 'prop-types'

export const CardContainer = ({peopleData, addToFavorites}) => {
  const peopleCards = peopleData.map((person, index) => {
    const { name, pop, species, homeworld } = person;

    return  (<Card 
              name={name}
              pop={pop}
              species={species}
              homeworld={homeworld}
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


