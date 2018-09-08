import React, { Component } from 'react';
import './App.css';
import './styles/global.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PetsContainer from './components/PetsContainer';
import NavBar from './containers/NavBar';
import LogInPage from './containers/LogInPage';
import FakeHome from './containers/FakeHome';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <h1>Sit/Stay</h1>
          <PetsContainer />
          <Switch>
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/home" component={FakeHome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
