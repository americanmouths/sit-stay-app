import React, { Component } from 'react';
import './App.css';
import './styles/global.js';
import { BrowserRouter as Router } from 'react-router-dom';
import PetsContainer from './components/PetsContainer';
import NavBar from './containers/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <h1>Sit/Stay</h1>
          <PetsContainer />
        </div>
      </Router>
    );
  }
}

export default App;
