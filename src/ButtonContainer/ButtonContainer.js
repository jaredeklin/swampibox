import React from 'react';
import { Button } from '../Button/Button';
import './buttonContainer.css'

export const ButtonContainer = () => {
  return (
    <div className='button-container'>
      <Button category='People'/>
      <Button category='Planets'/>
      <Button category='Vehicles'/>
    </div>
  )
}