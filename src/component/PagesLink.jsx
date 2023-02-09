import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const PagesLink = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-light">
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="text-light">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="text-light">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default PagesLink;
