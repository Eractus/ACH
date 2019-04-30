import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    };

    this.toggleLinks = this.toggleLinks.bind(this);
  }

  toggleLinks() {
    if (this.state.toggled) {
      document.getElementById("toggle-navbar-links").className = "navbar-links";
      this.setState({ toggled: false });
    } else {
      document.getElementById("toggle-navbar-links").className += " show-navbar-links";
      this.setState({ toggled: true })
    }
  }

  // this function is being executed exclusively when clicking to go to the OUR TEAM page because the page needs to refresh to load data for the Instagram embed, otherwise the IG UI will be missing data.
  refresh() {
    window.location.reload();
  }

  render() {
    const menuIcon = (this.state.toggled) ?
      <img onClick={this.toggleLinks} className="navbar-menu-icon" src="./images/collapse.png" /> :
      <img onClick={this.toggleLinks} className="navbar-menu-icon" src="./images/hamburger.png" />

    return (
      <nav className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src="./images/ACH-decal.png" />
        </Link>
        <div id="toggle-navbar-links" className="navbar-links">
          <Link onClick={this.collapseLinks} to="/">HOME</Link>
          <Link onClick={this.collapseLinks} to="/about">ABOUT</Link>
          <Link onClick={this.collapseLinks, this.refresh} to="/team">OUR TEAM</Link>
          <Link onClick={this.collapseLinks} to="/services">SERVICES</Link>
          <Link onClick={this.collapseLinks} to="/gallery">GALLERY</Link>
          <Link onClick={this.collapseLinks} to="/reviews">REVIEWS</Link>
          <Link onClick={this.collapseLinks} to="/contact">CONTACT</Link>
        </div>
        <Link className="navbar-contact-number" to="/contact">714-706-2948</Link>
        {menuIcon}
      </nav>
    )
  }
}

export default Navbar;
