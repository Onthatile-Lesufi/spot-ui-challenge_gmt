import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Our Services</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
        </div>
    );
}

export default Navbar;