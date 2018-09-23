import React from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import dogimg1 from './../images/dog_walking/dog1.PNG';
import dogimg2 from './../images/dog_walking/dog2.PNG';
import dogimg3 from './../images/dog_walking/dog3.PNG';
import dogimg4 from './../images/dog_walking/dog4.PNG';
const DogWalking = () => {

    return (
      <div>
        <Jumbotron className="dogwalking-jumbotron">
          <img src={dogimg1} alt={"dog_image"} className="resize-photo"/>
          <img src={dogimg2} alt={"dog_image"} className="resize-photo"/>
          <img src={dogimg3} alt={"dog_image"} className="resize-photo"/>
          <img src={dogimg4} alt={"dog_image"} className="resize-photo"/>

          <h1>Dog Walking</h1>
          <p>We take your pets where you want us to go</p>
          <ListGroup>
            <ListGroupItem className="dog-walking-li" bsStyle="success">1 Hour Walk - $20</ListGroupItem>
            <ListGroupItem className="dog-walking-li" bsStyle="info">30 Minute Walk - $15</ListGroupItem>
            <ListGroupItem className="dog-walking-li" bsStyle="warning">Add $5 per additional dog</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>
      )
    }

  export default DogWalking;
