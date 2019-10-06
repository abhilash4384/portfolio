import React from 'react';
import { Dropdown, Navbar, NavDropdown, Nav } from 'react-bootstrap';

const CustomNav = () => {
  return (
    <Navbar className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
      <div className="container">
        {/* <Navbar.Brand className="navbar-brand js-scroll-trigger" href="#page-top">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='text-white' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='text-white' href="#projects">Projects</Nav.Link>
            <Nav.Link className='text-white' href="#about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
}

export default CustomNav;