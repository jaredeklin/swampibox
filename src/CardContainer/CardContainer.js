import React from 'react';
import { Card } from '../Card/Card';
import './cardContainer.css'

export const CardContainer = ({peopleData}) => {
  const peopleCards = peopleData.map(person => {
    const { name, pop, species, homeworld } = person;

    return  (<Card 
              name={name}
              pop={pop}
              species={species}
              homeworld={homeworld}
            />)
  });

  return ( 
    <div className="card-container">
      {peopleCards}
    </div>
  );
}


