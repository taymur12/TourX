import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import headerimg from '../../images/icons/download.png'


const Header = () => {
  
  const { user, logout} = useAuth()

  const activeStyle = {
    fontWeight: "bold",
    color: "orange"
  }
  return (
    <div>
      <Navbar className='nav-main' bg="light" expand="lg" fixed="top">
        <Container>
          <Link to="/home"><img style={{marginTop:'-3px'}} width={110} src={headerimg} alt="" /></Link>
          {/* <Navbar.Brand href="#home">TourX</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-item" activeStyle={activeStyle} to="/home">Home</NavLink>
              <NavLink className="nav-item" activeStyle={activeStyle} to="/about">About</NavLink>
              <NavLink className="nav-item" activeStyle={activeStyle} to="/contact">Contact</NavLink>

              
              <Dropdown>
                {
                  user.email? <Dropdown.Toggle variant="light" bg="light" id="dropdown-basic">
                   <img className='login-img' src={user.photoURL} alt="" /> </Dropdown.Toggle> :<NavLink className=" nav-item" activeStyle={activeStyle} to="/login">Login</NavLink>
              }
                        
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">{user.email && <span>{user.displayName}</span>}</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
                <Dropdown.Item>{user.email? <Link className='myOrderItem' to="/myorders">My Orders</Link>: <NavLink className="nav-item" activeStyle={activeStyle} to="/login">Login</NavLink>}</Dropdown.Item>
                <Dropdown.Item>{user.email? <Link className='myOrderItem' to="/manageorder">Manage Orders</Link>: <NavLink className="nav-item" activeStyle={activeStyle} to="/login">Login</NavLink>}</Dropdown.Item>
                <Dropdown.Item>{user.email? <Link className='myOrderItem' to="/addnew">Add New Service</Link>: <NavLink className="nav-item" activeStyle={activeStyle} to="/login">Login</NavLink>}</Dropdown.Item>
                  <Dropdown.Item>{
                    user.email?  <p onClick={logout}>Logout</p> : <NavLink className="nav-item" activeStyle={activeStyle} to="/login">Login</NavLink>
                    }</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;