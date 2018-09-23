import React from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import petsitting1 from './../images/pet_sitting/petsitting1.PNG';
import petsitting2 from './../images/pet_sitting/petsitting2.PNG';
import petsitting3 from './../images/pet_sitting/petsitting3.PNG';
import petsitting4 from './../images/pet_sitting/petsitting4.PNG';

const PetSitting = () => {

    return (
      <div>
        <Jumbotron className="petsitting-jumbotron">
          <img src={petsitting1} alt={"pet_sitting_image"} className="resize-photo"/>
          <img src={petsitting2} alt={"pet_sitting_image"} className="resize-photo"/>
          <img src={petsitting3} alt={"pet_sitting_image"} className="resize-photo"/>
          <img src={petsitting4} alt={"pet_sitting_image"} className="resize-photo"/>

          <h1>Pet Sitting</h1>
          <p>Caring for your pets in the comfort of their own home</p>
          <ListGroup>
            <ListGroupItem className="pet-sitting-li" bsStyle="success">$80/night includes:</ListGroupItem>
            <ListGroupItem className="pet-sitting-li" bsStyle="info">1 - 30 minute afternoon walk</ListGroupItem>
            <ListGroupItem className="pet-sitting-li" bsStyle="info">1 - 20 minute morning walk</ListGroupItem>
            <ListGroupItem className="pet-sitting-li" bsStyle="info">1 - 20 minute close to bedtime walk</ListGroupItem>
            <ListGroupItem className="pet-sitting-li" bsStyle="info">Mail collection, plant wattering, & anything else you may need.</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>
      )
    }

  export default PetSitting;
