import React, { Component } from 'react';
import { Jumbotron, Button, Carousel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class WelcomeContainer extends Component {
  render() {
    return (
      <div>
      <Carousel>
        <Carousel.Item>
          <Jumbotron>
            <center>
              <h1>Welcome to Sit/Stay</h1>
              <p>
                This is free application for scheduling services for your pets.
              </p>
                Our services include:
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </center>
          </Jumbotron>
        </Carousel.Item>
        <Carousel.Item>
          <Jumbotron>
            <center>
              <h1>Pet Care Your Way</h1>
              <p>
                Here at Sit/Stay we are dedicated to caring for your pets how you want.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </center>
          </Jumbotron>
        </Carousel.Item>
        <Carousel.Item>
          <Jumbotron>
            <center>
              <h1>Sign Up or Login</h1>
              <p>
                To get started, choose your option below.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </center>
          </Jumbotron>
        </Carousel.Item>
      </Carousel>;
    </div>
    );
  }
}
