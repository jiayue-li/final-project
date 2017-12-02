import React, {Component} from 'react';
import {
  Badge,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

  }

  handleClick(i) {
      alert('Passport from embassy requested.');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarBrand href="#"></NavbarBrand>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#/dashboard">Home</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">My Passport</NavLink>
          </NavItem>

        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
        </Nav>
      </header>
    )
  }
}

export default Header;
