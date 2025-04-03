import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './css/Navbar.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Container>
        <Navbar.Brand href="#home">Great Minds Technologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="link-container">
                <Link className="navbar-link" to="/">Home</Link>
                <Link className="navbar-link" to="/about">About Us</Link>
                <Link className="navbar-link" to="/services">Our Services</Link>
                <Link className="navbar-link" to="/contact-us">Contact Us</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
