import React from 'react';
import Button from '../Button/Button';
import './buttonContainer.css';
import PropTypes from 'prop-types'

export const ButtonContainer = ({getData}) => {
  return (
    <div className='button-container'>
      <Button category='People' getData={getData} />
      <Button category='Planets' getData={getData} />
      <Button category='Vehicles' getData={getData} />
    </div>
  )
}

Button.propTypes = {
  getData: PropTypes.func
}