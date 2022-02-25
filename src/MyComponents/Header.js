import React from 'react'
import logo from '../Images/codorlabslogo.png';
import { Link } from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";

export default function Header() {
    return (
    <Navbar sticky="top" id="navbar" className="navbar navbar-dark" collapseOnSelect bg="dark" expand="lg">
      <Container fluid>
          <Navbar.Brand><img src={logo} alt="Codorlabs" className="brand-logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown"/>
            <Navbar.Collapse id="navbarNavDropdown" className="navbar-right">
              <Nav className="navbar-nav">
                <Nav.Item>
                  <Nav.Link eventKey={1} as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={1} as={Link} to="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={1} as={Link} to="/services">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={1} as={Link} to="/casestudies">Case Studies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={1} as={Link} to="/contact">Contact Us</Nav.Link>
                </Nav.Item>          
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
