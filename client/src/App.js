import React, { Component } from 'react';
import './App.css';
import PetsContainer from './components/PetsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sit/Stay</h1>
        <PetsContainer />
      </div>
    );
  }
}

export default App;
