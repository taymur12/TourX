import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "orange"
  }
  return (
    <div>
      <Navbar className='nav-main' bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">TourX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-item" activeStyle={activeStyle} to="/home">Home</NavLink>
              <NavLink className="nav-item" activeStyle={activeStyle} to="/login">Login</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;