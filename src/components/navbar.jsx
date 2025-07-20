// src/components/Navbar.jsx
import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <BootstrapNavbar expand="lg" className="custom-navbar">
        <Container>
          {/* Logo */}
          <BootstrapNavbar.Brand href="#" className="logo">
            <span className="glow">Raghav</span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-between">

            {/* Centered Menu */}
            <Nav className="mx-auto hacker-nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

            {/* Right Buttons */}
            <div className="button-group">
             <button className="nav-btn neon-btn">Hire Me</button>
<button className="nav-btn neon-outline">Download CV</button>

            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
