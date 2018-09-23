import React, { Component } from 'react';
import './App.css';
import './styles/global.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import LogInPage from './containers/LogInPage';
import SignUpPage from './containers/SignUpPage';
import Home from './components/Home';
import About from './components/About';
import DogWalking from './components/DogWalking';
import PetSitting from './components/PetSitting';
import Feeding from './components/Feeding';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/dogwalking" component={DogWalking} />
            <Route exact path="/petsitting" component={PetSitting} />
            <Route exact path="/feeding" component={Feeding} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
