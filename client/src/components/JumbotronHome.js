import React from 'react';
import { Jumbotron, Button, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const JumbotronHome = () => {

  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <Jumbotron>
          <center>
            <h1>Welcome to Sit/Stay</h1>
            <p>
              Here at sit stay, we aim to provide quality services for all your pets needs.
            </p>
              Our services include:
            <p>
              <LinkContainer to="/dogwalking"><Button bsStyle="primary" className="service-button">Dog Walking</Button></LinkContainer>
              <LinkContainer to="/petsitting"><Button bsStyle="info" className="service-button">Pet Sitting</Button></LinkContainer>
              <LinkContainer to="/feeding"><Button bsStyle="primary" className="service-button">Feedings</Button></LinkContainer>
              <LinkContainer to="/dogpark"><Button bsStyle="info" className="service-button">Park Outings</Button></LinkContainer>
            </p>
          </center>
        </Jumbotron>
      </Carousel.Item>
      <Carousel.Item>
        <Jumbotron>
          <center>
            <h1>Pet Care Your Way</h1>
            <p>
              Our educated staff is dedicated to caring for your pets how you want us to.
            </p>
            <p>
              Simply provide us all of your pet care info, and we will follow your instructions to a T.
            </p>
            <p>
              When you schedule any type of service, include any additional information we might need, including where to pick up your morning paper or how often to water your plants.
            </p>
          </center>
        </Jumbotron>
      </Carousel.Item>
      <Carousel.Item>
        <Jumbotron>
          <center>
            <h1>Get Started Today</h1>
            <p>
              To get started, choose an option below.
            </p>
            <p>
              <LinkContainer to="/signup"><Button bsStyle="primary" className="user-button">Sign Up</Button></LinkContainer>
              <LinkContainer to="/login"><Button bsStyle="info" className="user-button">Login</Button></LinkContainer>
            </p>
          </center>
        </Jumbotron>
      </Carousel.Item>
    </Carousel>;
  </div>
  )
}

export default JumbotronHome;
