import React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    };
  }

  toggleLinks = () => {
    if (this.state.toggled) {
      document.querySelector(".navbar-links").className = "navbar-links";
    } else {
      document.querySelector(".navbar-links").className += " show";
    }
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    const menuIcon = (this.state.toggled) ?
      <img onClick={this.toggleLinks} className="navbar-menu-icon" src="./images/collapse.png" alt="Menu Close"/> :
      <img onClick={this.toggleLinks} className="navbar-menu-icon" src="./images/hamburger.png" alt="Menu Hamburger"/>

    return (
      <nav className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src="./images/ACH-decal.png" alt="ACH Decal Logo"/>
        </Link>
        <div className="navbar-links">
          <Link onClick={this.toggleLinks} to="/">HOME</Link>
          <Link onClick={this.toggleLinks} to="/book">BOOK APPOINTMENT</Link>
          <Link onClick={this.toggleLinks} to="/services">SERVICES</Link>
          <Link onClick={this.toggleLinks} to="/gallery">GALLERY</Link>
          <Link onClick={this.toggleLinks} to="/reviews">REVIEWS</Link>
          <Link onClick={this.toggleLinks} to="/contact">CONTACT</Link>
        </div>
        <Link className="navbar-contact-number" to="/contact">714-706-2948</Link>
        {menuIcon}
      </nav>
    )
  }
}

export default Navbar;
