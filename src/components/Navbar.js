import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './css/Navbar.css';

function NavbarComponent() {
    const navHeading = [{
        value: '/',
        label:"Home"
    },{
        value: '/about',
        label:"About Us"
    },{
        value: '/services',
        label:"Our Services"
    },{
        value: '/contact-us',
        label:"Contact Us"
    }]

    return (
      <Navbar expand="lg" className="navbar-container">
        <Container>
            <Link className="navbar-link" to="/">
                <Navbar.Brand>Great Minds Technologies</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="link-container">
                    {navHeading.map((_heading) => (
                        <NavLink 
                        to={_heading.value}
                        className="navbar-link"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? '600' : 'normal'
                        })}
                        >
                            {_heading.label}
                        </NavLink>
                    ))}
                </div>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavbarComponent;
