import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="splash-container">
        <section className="splash-photostream">
          <div className="splash-photostream-images">
            <span className="darken-overlay"></span>
            <span className="darken-overlay"></span>
            <span className="darken-overlay"></span>
            <span className="darken-overlay"></span>
            <span className="darken-overlay"></span>
            <span className="darken-overlay"></span>
          </div>
        </section>
        <section className="splash-about-us">
          <article>
            <div className="splash-about-us-text">
              <p>What Inspires Us</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <span></span>
          </article>
          <Link className="splash-button" to="/about"><button>Learn More</button></Link>
        </section>
        <section className="splash-services darken-overlay">
          <p>What We Specialize In</p>
          <Link className="splash-button" to="/services"><button>Our Services</button></Link>
        </section>
        <section className="splash-gallery">
          <ul className="splash-gallery-photos">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="splash-gallery-text">
            <p>Take a Glimpse Inside Our Lab</p>
            <Link className="splash-button" to="/gallery"><button>See All</button></Link>
          </div>
        </section>
        <section className="splash-reviews darken-overlay">
          <div className="splash-reviews-text">
            <h3>Here's What Our Customers Have to Say</h3>
            <h5>"Kefka is the man! 5/5 stars!!!"</h5>
            <p>-Ameer A.</p>
            <h5>"The ACH team has winning members. Highly recommended!"</h5>
            <p>-Jon W.</p>
          </div>
          <Link className="splash-button" to="/reviews"><button>All Reviews</button></Link>
        </section>
      </main>
    )
  }
}

export default Splash;
