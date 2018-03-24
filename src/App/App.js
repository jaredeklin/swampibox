import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import { fetchFilmData, cleanFilmData, fetchPeopleData , fetchVehicleData, fetchPlanetData } from '../apiHelper';
import { Opening } from '../Opening/Opening';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmData: [],
      favorites: [],
      peopleData: [],
      vehicleData: [],
      planetData: [],
      active: []
    }
  }

  getData = (type) => {
    this.addToActive(type)
    if (type === 'People') {
      fetchPeopleData()
        .then(peopleData => this.setState({ peopleData }))
    }

    if (type === 'Vehicles') {
      fetchVehicleData()
        .then(vehicleData => this.setState({ vehicleData }))
    }

    if (type === 'Planets')
      fetchPlanetData()
        .then(planetData => this.setState({ planetData }))
  }

  addToActive = (type) => {
    const activeCard = [...this.state.active]
    if (activeCard.length >= 1 && activeCard[0] !== type) {
      activeCard.splice(0, 1, type)
    } else if (activeCard[0] !== type){
      activeCard.push(type)
    }
    this.setState({ active: activeCard })
  }


  addToFavorites = (cardProps, event) => {

    var updateFavorite = [...this.state.favorites];

    if( updateFavorite.length === 0 ) {
      updateFavorite.push(cardProps)
    } else {
      const match = updateFavorite.find(card => card.name === cardProps.name)

      if(match) {
        updateFavorite = updateFavorite.filter(card => card.name !== cardProps.name)
      } else {
        updateFavorite.push(cardProps);
      }
    }

    this.setState({ favorites: updateFavorite})
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Opening filmData={this.state.filmData} />
        <header className="App-header">
          <h1 className="App-title">SWAMPIbox</h1>
          <button onClick={() => this.addToActive('Favorites')} className="view-favorites-btn">favorites {this.state.favorites.length}</button>
        </header>
        
        <ButtonContainer getData={this.getData} active={this.state.active}/>
        { 
          this.state.active.length === 1 &&
            <CardContainer 
              addToFavorites={this.addToFavorites} 
              allData={this.state}
            /> 
        }
      </div>
    );
  }
}

export default App;
