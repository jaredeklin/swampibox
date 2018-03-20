import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import { getFilmData } from '../apiHelper';
import { Opening } from '../Opening/Opening';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmData: [],
      favorites: []
    }
  }

  getData = () => {
    fetch('https://swapi.co/api/films/')
      .then(data => data.json())
      .then(data => this.setState({
        filmData: getFilmData(data)
      }))
      .catch(error => console.log('bad!'));

  }

  componentDidMount() {
    this.getData();
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
        <CardContainer />
        
      </div>
    );
  }
}

export default App;
