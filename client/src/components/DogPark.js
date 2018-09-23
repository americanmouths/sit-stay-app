import React from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import dogparkimg1 from './../images/dog_park/dog1.PNG';
import dogparkimg2 from './../images/dog_park/dog2.PNG';
import dogparkimg3 from './../images/dog_park/dog3.PNG';
import dogparkimg4 from './../images/dog_park/dog4.PNG';

const DogPark = () => {

    return (
      <div>
        <Jumbotron className="dogpark-jumbotron">
          <img src={dogparkimg1} alt={"dog_image"} className="resize-photo"/>
          <img src={dogparkimg2} alt={"dog_image"} className="resize-photo"/>
          <img src={dogparkimg3} alt={"dog_image"} className="resize-photo"/>
          <img src={dogparkimg4} alt={"dog_image"} className="resize-photo"/>

          <h1>Dog Park Outing</h1>
          <p>Fun in the sun for all pets</p>
          <ListGroup>
            <ListGroupItem className="dog-park-li" bsStyle="success">1 Hour Outing - $20</ListGroupItem>
            <ListGroupItem className="dog-park-li" bsStyle="info">30 Minute Outing - $15</ListGroupItem>
            <ListGroupItem className="dog-park-li" bsStyle="warning">Add $5 per additional dog</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>
      )
    }

  export default DogPark;
