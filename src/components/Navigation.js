import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Features">
              Features
            </Link>
            <Link className="nav-link" to="/Pricing">
              Pricing
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navigation;
