import React from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const Feeding = () => {

    return (
      <div>
        <Jumbotron className="feeding-jumbotron">

          <h1>Feeding</h1>
          <p>Because we know how important pet care truly is</p>
          <ListGroup>
            <ListGroupItem className="feeding-li" bsStyle="success">$20 per visit includes:</ListGroupItem>
            <ListGroupItem className="feeding-li" bsStyle="info">Following any special feeding instructions</ListGroupItem>
            <ListGroupItem className="feeding-li" bsStyle="info">Medication administration</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>
      )
    }

  export default Feeding;
