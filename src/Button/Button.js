import React from 'react';
import './button.css'

export const Button = ({category}) => {
  return (
    <button className="category-button">{category}</button>
  )
}