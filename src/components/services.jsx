import React from "react";
import Photo from "./photo";
import '../css/services.css';

const Services = () => {
  return (
    <div className="services-container">
      <header className="header darken-overlay">
        <p>SERVICES</p>
      </header>
      <main className="services-main-wrapper">
        <section className="services-sections-wrapper">
          <span className="services-text-wrapper">
            <p>We Specialize In:</p>
            <ul>
              <li>Women's haircuts</li>
              <li>Men's haircuts</li>
              <li>Shaves</li>
              <li>Coloring</li>
              <li>Blonding</li>
              <li>Vivids</li>
              <li>Balayage</li>
              <li>Pixies</li>
              <li>Make-up</li>
            </ul>
          </span>
          <Photo photo="./images/cutting2.jpg" />
        </section>
        <section className="services-sections-wrapper">
          <span className="services-text-wrapper">
            <p>Our Color Services Include:</p>
            <ul>
              <li>Color touch-ups</li>
              <li>All over color</li>
              <li>Blonding</li>
              <li>Highlights</li>
              <li>Balayage</li>
              <li>Vivids</li>
              <li>Grey Coverage</li>
              <li>Grey blending/Camo</li>
            </ul>
            <h5>* Every color service includes a finished blowout style</h5>
          </span>
          <Photo photo="./images/chair3.jpg" />
        </section>
      </main>
    </div>
  )
}

export default Services;
