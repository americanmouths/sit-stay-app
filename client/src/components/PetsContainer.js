import React, { Component } from 'react';
import axios from 'axios';
class PetsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            pets: []
        }
    }
    componentDidMount() {
      axios.get('api/pets.json')
      .then(response => {
        this.setState({
            pets: response.data
        })
      })
      .catch(error => console.log(error))
    }
    render() {
      return (
      <div className="pets-container">
        {this.state.pets.map( pet => {
          return (
            <div className="single-list" key={pet.id}>
              <h4>{pet.name}</h4>
              <p>{pet.breed}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
export default PetsContainer;
