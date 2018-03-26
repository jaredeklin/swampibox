import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import { 
  fetchFilmData,  
  fetchVehicleData, 
  fetchPlanetData 
} from '../helpers/apiHelper';
import { Opening } from '../Opening/Opening';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { fetchPeopleData } from '../helpers/fetchPeopleData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      filmData: [],
      favorites: [],
      peopleData: [],
      vehicleData: [],
      planetData: [],
      active: [],
      opening: true,
      randomNumber: 0,
      error: false
    };
  }

  getData = (type) => {
    this.addToActive(type);
    if (type === 'People') {
      fetchPeopleData()
        .then(peopleData => this.setState({ peopleData }))
        .catch(error => this.setState({ error: true }));
    }

    if (type === 'Vehicles') {
      fetchVehicleData()
        .then(vehicleData => this.setState({ vehicleData }))
        .catch(error => this.setState({ error: true }));
    }

    if (type === 'Planets') {
      fetchPlanetData()
        .then(planetData => this.setState({ planetData }))
        .catch(error => this.setState({ error: true }));
    }
  };

  addToActive = (type) => {
    const activeCard = [...this.state.active];
    if (activeCard.length >= 1 && activeCard[0] !== type) {
      activeCard.splice(0, 1, type);
    } else if (activeCard[0] !== type){
      activeCard.push(type);
    }
    this.setState({ active: activeCard });
  };

  addToFavorites = (cardProps) => {

    let favorites = [...this.state.favorites];

    if (favorites.includes(cardProps)) {
      favorites = favorites.filter(card => card !== cardProps);
    } else {
      favorites.push(cardProps);
    }

    this.setState({ favorites });
  }

  toggleOpening = () => {
    this.setState({opening: !this.state.opening});
  }

  componentDidMount() {
    this.setState({
      randomNumber: Math.floor(Math.random() * 6)
    });

    fetchFilmData()
      .then(filmData => this.setState({ filmData }))
      .catch(error => this.setState({ error: true }));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.error && 
            <h2 className='error'>
              Oh snaps! Something went wrong...........
            </h2>
        }
        { 
          this.state.opening && !this.state.error &&
          <Opening 
            filmData={this.state.filmData} 
            toggleOpening={this.toggleOpening} 
            randomNumber={this.state.randomNumber}
          />
        }
        { 
          !this.state.opening && !this.state.error &&
          <div>
            <header>
              <h1>SWAPIbox</h1>
            </header>
          
            <ButtonContainer 
              getData={this.getData} 
              active={this.state.active} 
              favorites={this.state.favorites.length}
            />
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
