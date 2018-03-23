import React from 'react';
import Button from '../Button/Button';
import './buttonContainer.css';
import PropTypes from 'prop-types'

export const ButtonContainer = ({getData, active}) => {
  const category = ['People', 'Planets', 'Vehicles']

  const createButtons = category.map(type => {

    let activeToggle = 'category-button'

    if (type === active[0]) {
      activeToggle = 'category-button active'
    }
    return (<Button category={type} getData={getData} className={activeToggle} />)
  })

  return (
    <div className='button-container'>
      {createButtons}
    </div>
  )
}

Button.propTypes = {
  getData: PropTypes.func
}