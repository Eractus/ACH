import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src="./images/ACH-full-logo.png" />
        </Link>
        <div className="navbar-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/reviews">REVIEWS</Link>
        </div>
        <p className="navbar-contact-number">714-679-4908</p>
      </nav>
    )
  }
}

export default Navbar;
