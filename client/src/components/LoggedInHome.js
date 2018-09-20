import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LoggedInHome = () => {

  const userName = localStorage.getItem("username");

  return (
    <div>
    <Jumbotron>
      <center>
        <h1>Welcome back {userName}!</h1>
        <p>
          What would you like to do?
        </p>
        <p>
          <LinkContainer to="/dogwalking/schedule"><Button bsStyle="primary" className="service-button">Schedule a Dog Walk</Button></LinkContainer>
          <LinkContainer to="/petsitting/schedule"><Button bsStyle="info" className="service-button">Schedule a Pet Sit</Button></LinkContainer>
          <LinkContainer to="/feeding/schedule"><Button bsStyle="primary" className="service-button">Schedule a Feeding</Button></LinkContainer>
          <LinkContainer to="/dogpark/schedule"><Button bsStyle="info" className="service-button">Schedule a Park Outing</Button></LinkContainer>
        </p>
      </center>
    </Jumbotron>
    </div>
    )
  }

export default LoggedInHome;
