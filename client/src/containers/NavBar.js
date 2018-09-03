import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logoutUser } from './../actions/auth';

class NavBar extends Component {

  render(){
    const loggedIn = !!localStorage.getItem("token")
    const userName = localStorage.getItem("username")

    const userNav = (
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/"><NavItem eventKey={1}>All</NavItem></LinkContainer>
        </Nav>
    </Navbar.Collapse>
    )
    const guestNav = (
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup"><NavItem eventKey={1}>Sign Up</NavItem></LinkContainer>
              <LinkContainer to="/login" exact={true}><NavItem eventKey={2}>Login</NavItem></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        )

      return (
          <div>
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  {userName ? "Hi Username": <p>Sit/Stay</p>}
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              {loggedIn ? userNav : guestNav}
            </Navbar>
          </div>
        )
      }
    }

export default NavBar;
