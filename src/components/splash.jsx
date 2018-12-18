import React from "react";
import { Link } from "react-router-dom";
import Photo from "./photo";

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = document.documentElement.scrollTop;
    this.setState({ scrollTop: scrollPosition })

    // About Us section transitions
    const aboutUs = document.getElementById("about-us");
    const aboutUsText = document.getElementById("about-us-text");
    const aboutUsPhoto = document.getElementById("about-us-photo");
    if (!this.state.aboutUsTop || !this.state.aboutUsBot) {
      let top = (aboutUs.offsetTop)/2;
      let bot = top + aboutUs.offsetHeight;
      this.setState({ aboutUsTop: top, aboutUsBot: bot });
    }
    if (this.state.scrollTop >= this.state.aboutUsTop && this.state.scrollTop <= this.state.aboutUsBot) {
      aboutUsText.className = "splash-about-us-text-transitioned";
      aboutUsPhoto.className = "splash-about-us-photo-transitioned";
    }

    // Gallery section transitions
    const gallery = document.getElementById("gallery");
    const galleryText = document.getElementById("gallery-text");
    const galleryPhotos = document.getElementById("gallery-photos");
    if (!this.state.galleryTop || !this.state.galleryBot) {
      let top = (gallery.offsetTop)/2;
      let bot = top + gallery.offsetHeight;
      this.setState({ galleryTop: top, galleryBot: bot });
    }
    if (this.state.scrollTop >= this.state.galleryTop && this.state.scrollTop <= this.state.galleryBot) {
      galleryText.className = "splash-gallery-text-transitioned";
      galleryPhotos.className = "splash-gallery-photos-transitioned";
    }
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
        <section id="about-us" className="splash-about-us">
          <article>
            <span id="about-us-text" className="splash-about-us-text">
              <p>What Inspires Us</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link className="splash-button" to="/about"><button>Learn More</button></Link>
            </span>
            <div id="about-us-photo" className="splash-about-us-photo">
              <img src="./images/splash7.jpg" />
            </div>
          </article>
        </section>
        <section className="splash-services darken-overlay">
          <p>What We Specialize In</p>
          <Link className="splash-button" to="/services"><button>Our Services</button></Link>
        </section>
        <section id="gallery" className="splash-gallery">
          <div id="gallery-photos" className="splash-gallery-photos">
            <img src="./images/splash1.jpg" />
            <img src="./images/splash2.jpg" />
            <img src="./images/splash3.jpg" />
            <img src="./images/splash4.jpg" />
          </div>
          <div id="gallery-text"className="splash-gallery-text">
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
