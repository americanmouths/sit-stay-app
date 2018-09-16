import React, { Component } from 'react';
import './App.css';
import './styles/global.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PetsContainer from './components/PetsContainer';
import NavBar from './containers/NavBar';
import LogInPage from './containers/LogInPage';
import SignUpPage from './containers/SignUpPage';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={LogInPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
