import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
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
