import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import { fetchFilmData, cleanFilmData, fetchPlanet, fetchSpecies } from '../apiHelper';
import { Opening } from '../Opening/Opening';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmData: [],
      favorites: [],
      peopleData: []
    }
  }

  // getData = () => {
  //   // fetchFilmData()
  //   fetchPeopleData()
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       // filmData: cleanFilmData(data),
  //       peopleData: cleanPeopleData(data)
  //     }))
  //     .catch(error => console.log('bad!'));

  // }
  fetchPeopleData = () => {
    return fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(peoplesData => fetchPlanet(peoplesData.results))
      .then(updatedData => fetchSpecies(updatedData))
      .then(peopleData => this.setState({ peopleData }))
    }



  componentDidMount() {
    // this.getData();
    this.fetchPeopleData()
  }

  render() {
    return (
      <div className="App">
        <Opening filmData={this.state.filmData} />
        <header className="App-header">
          <h1 className="App-title">SWAMPIbox</h1>
          <button className="view-favorites-btn">favorites {this.state.favorites.length}</button>
        </header>
        
        <ButtonContainer />
        {
          this.state.peopleData.length === 10 &&
            <CardContainer peopleData={this.state.peopleData}/>
        }
       
        
      </div>
    );
  }
}

export default App;
