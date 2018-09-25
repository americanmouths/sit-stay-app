import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Test from './Test';

class DogWalkSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      showComponent: false,
      clickedDate: [],
    };

    this.onClickDay = this.onClickDay.bind(this);
  }

  onChange = date => this.setState({ date })

  onClickDay(e){
    let date = new Date(e);
    let dateString = date.toDateString();
    this.setState({
      showComponent: true,
      clickedDate: dateString
    });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Schedule a Dog Walk</h1>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            onClickDay={this.onClickDay}
            minDate={new Date()}
          />
          {this.state.showComponent ? <Test date={this.state.clickedDate}/> : null}
      </center>
      </div>
    );
  }
}

export default DogWalkSchedule;
