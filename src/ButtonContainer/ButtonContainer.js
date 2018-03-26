import React from 'react';
import Button from '../Button/Button';
import './buttonContainer.css';
import PropTypes from 'prop-types';

export const ButtonContainer = ({getData, active, favorites}) => {
  const category = ['People', 'Planets', 'Vehicles', 'Favorites'];

  const createButtons = category.map((type, index) => {

    let activeToggle = 'category-button';

    if (type === active[0]) {
      activeToggle = 'category-button active';
    }
    return (
      <Button category={type} 
        getData={getData} 
        className={activeToggle} 
        favorites={favorites}
        key={index}/>);
  });

  return (
    <div className='button-container'>
      {createButtons}
    </div>
  );
};

ButtonContainer.propTypes = {
  getData: PropTypes.func,
  active: PropTypes.array,
  favorites: PropTypes.number
};