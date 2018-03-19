import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer';
import { getFilmData } from '../cleanData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmData: []
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
    // this.getData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAMPIbox</h1>
        </header>
        <CardContainer />
        
      </div>
    );
  }
}

export default App;
