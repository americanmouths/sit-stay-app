import React, { Component } from 'react';
import { NavBar, Nav, NavItem, Modal } from 'react-bootstrap/lib';

class NavBar extends Component {
  render(){
    const loggedIn = !!localStorage.getItem("token")
    const userName = localStorage.getItem("username")

    const userNav = (
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/main"><NavItem eventKey={1} exact={true}>All</NavItem></LinkContainer>
          <LinkContainer to="/following"><NavItem eventKey={2}>Following</NavItem></LinkContainer>
          <LinkContainer to="/followees"><NavItem eventKey={3}>Followees</NavItem></LinkContainer>
          <LinkContainer to="/daily_great/liked"><NavItem eventKey={3}>Liked</NavItem></LinkContainer>
          <LinkContainer to="/daily_great/new"><NavItem eventKey={4}>New</NavItem></LinkContainer>
          <NavItem eventKey={6} href="/" onClick={() => this.logout()}>Log Out</NavItem>
        </Nav>
    </Navbar.Collapse>
    )

  }
}
