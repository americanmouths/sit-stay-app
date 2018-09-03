import React, { Component } from 'react';
import './App.css';
import PetsContainer from './components/PetsContainer';
import NavBar from './containers/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Sit/Stay</h1>
        <PetsContainer />
      </div>
    );
  }
}

export default App;
