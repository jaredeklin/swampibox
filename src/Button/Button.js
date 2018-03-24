import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

export const Button = ({category, getData, className}) => {

  return (
    <button 
      className={className}
      onClick={() => getData(category)}
      value={category}
    >{category}</button>
  )
}


Button.propTypes = {
  category: PropTypes.string,
  getData: PropTypes.func
}

export default Button;