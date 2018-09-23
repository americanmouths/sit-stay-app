import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from './../actions/auth';
import { Login } from './../styles/containers';
import { Button } from 'react-bootstrap';

class LogInPage extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.token) {
      this.props.history.push('/')
    };

    if(nextProps.errors) {
      this.setState({
        username: '',
        password: ''
      });
    } else {
      this.setState({
        username: '',
        password: ''
      });
    }
  }

  render() {
    const { username, password } = this.state
    const errors = this.props.errors
    return (
      <div className="row">

        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <Login>
            <h1>Log In</h1>
              <form>
                <input
                  type="username"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  placeholder="username"
                />
                <br />
                <br />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="password"
                />
                <br />
                <br />
                <Button onClick={this.handleSubmit} className="Button-Control" bsStyle="primary">Submit</Button>
              </form>
            </Login>
          </div>
          <div className="col-md-4">
          </div>
        </div>
     )
   }
 }

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, { login })(LogInPage);
