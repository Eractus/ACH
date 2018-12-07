import React from "react";
import Photo from "./photo";

class Services extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="services-container">
        <header className="header darken-overlay">
          <p>SERVICES</p>
        </header>
        <main>
          <section>
            <span>
              <p>We Specialize In:</p>
              <ul>
                <li>Male and Female Haircut</li>
                <li>Perms</li>
                <li>Shaves</li>
                <li>Beard Trims</li>
              </ul>
            </span>
            <Photo photo="./images/splash3.jpg" />
          </section>
          <section>
            <span>
              <p>Our Color Services Include:</p>
              <ul>
                <li>Hair Coloring</li>
                <li>Highlights</li>
                <li>Grey Coverage</li>
              </ul>
            </span>
            <Photo photo="./images/splash5.jpg" />
          </section>
        </main>
      </div>
    )
  }
}

export default Services;
