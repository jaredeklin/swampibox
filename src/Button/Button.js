import React, { Component } from 'react';
import './button.css';
import PropTypes from 'prop-types';

class Button extends Component {

  handleClick = (event) => {
    this.props.getData(event.target.value)
    if(event.target.className === "category-button") {
      event.target.className = "category-button active"
    } else {
      event.target.className = "category-button"
    }
  }

  render() {
    return (
      <button 
        className="category-button"
        onClick={this.handleClick}
        value={this.props.category}
        >{this.props.category}</button>
    )
  }
}

Button.propTypes = {
  category: PropTypes.string,
  getData: PropTypes.func
}

export default Button;