import React, { Component } from 'react';
import './card.css';
// import PropTypes from 'prop-types'

export class Card extends Component {
  constructor(props) {
    super(props)
  
    this.displayCards = Object.keys(this.props.props).filter(property => property !== "name").map(info => {
      return (<li><span className="card-keys">{info}</span>: {this.props.props[info]} </li>)
    })
  }

  handleClick = () => {
    this.props.addToFavorites(this.props.props)
  }

  render() {
    return (
      <div className='card'>
        <h2>{this.props.props.name}</h2>
        <button onClick={this.handleClick}>Favorite</button>
        <ul>
          {this.displayCards}
        </ul>
      </div>
    )
  }
}

