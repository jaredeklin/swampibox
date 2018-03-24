import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import { fetchFilmData, cleanFilmData, fetchPeopleData , fetchVehicleData, fetchPlanetData } from '../helpers/apiHelper';
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
      active: [],
      opening: true
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

    let favorites = [...this.state.favorites];

    if (favorites.includes(cardProps)) {
      favorites = favorites.filter(card => card.name !== cardProps.name)
    } else {
      favorites.push(cardProps);
    }

    this.setState({ favorites })
  }

  toggleOpening = () => {
    this.setState({opening: !this.state.opening})
  }

  componentDidMount() {
    fetchFilmData()
      .then(filmData => this.setState({ filmData }))
  }

  render() {
    return (
      <div className="App">
        { this.state.opening &&
          <Opening filmData={this.state.filmData} toggleOpening={this.toggleOpening} />
        }
        { !this.state.opening &&
          <div>
          <header>
            <h1>SWAMPIbox</h1>
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
        }
      </div>
    );
  }
}

export default App;
