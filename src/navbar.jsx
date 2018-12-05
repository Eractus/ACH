import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar-container">
        <Link className="navbar-logo" to="/"></Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/reviews">REVIEWS</Link>
          </li>
        </ul>
        <p className="navbar-contact-number">714-679-4908</p>
      </nav>
    )
  }
}

export default Navbar;
