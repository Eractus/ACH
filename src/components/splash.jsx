import React from "react";
import { Link } from "react-router-dom";
import Photo from "./photo";

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
            <span className="splash-about-us-text">
              <p>Looking to Schedule Your Next Appointment? Book Now with One of Our Team Members!</p>
              <Link className="splash-button" to="/book"><button>Book Appointment</button></Link>
            </span>
            <Photo photo="./images/chair1.jpg" />
          </article>
        </section>
        <section className="splash-services darken-overlay">
          <p>What We Specialize In</p>
          <Link className="splash-button" to="/services"><button>Our Services</button></Link>
        </section>
        <section className="splash-gallery">
          <div className="splash-gallery-photos">
            <Photo photo="./images/chair3.jpg" />
            <Photo photo="./images/cutting1.jpg" />
            <Photo photo="./images/cutting3.jpg" />
            <Photo photo="./images/product2.jpg" />
          </div>
          <div className="splash-gallery-text">
            <p>Take a Glimpse Inside Our Lab</p>
            <Link className="splash-button" to="/gallery"><button>See All</button></Link>
          </div>
        </section>
        <section className="splash-reviews darken-overlay">
          <div className="splash-reviews-text">
            <h3>Here's What Our Customers Have to Say</h3>
            <h5>My new go to hair salon. This place is roomy ... Mikey knows how give the perfect cut every time.</h5>
            <p>-Randy M.</p>
            <h5>Ask for Ryan!  I took my two teenage boys ... impressed and we'll be back!</h5>
            <p>-Mike Z.</p>
          </div>
          <Link className="splash-button" to="/reviews"><button>All Reviews</button></Link>
        </section>
      </main>
    )
  }
}

export default Splash;
