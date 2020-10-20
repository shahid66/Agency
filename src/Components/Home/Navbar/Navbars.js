import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png'
import './Navbars.css'
const Navbars = () => {
    return (
<Navbar  expand="lg">
<a class="navbar-brand offset-md-1" href="#"><img src={logo} style={{width:'150px'}} alt='/'/></a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="navbar-nav ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Portfolio</Nav.Link>
      <Nav.Link href="#home">Our Team</Nav.Link>
      <Nav.Link href="#link">Contuct us</Nav.Link>
      <Nav.Link className=" mr-5 bg-dark text-white login" href="#link">Login</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>
    );
};

export default Navbars;