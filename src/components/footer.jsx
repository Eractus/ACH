import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <img src="./images/ACH-font-logo.png" alt="ACH Font Logo"/>
        <div className="footer-social-media">
          <a className="footer-social-media-link" href="https://www.facebook.com/Alchemy-Collective-Hairlab-2219094228114532/" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook.png" alt="FB Icon"/>
          </a>
          <a className="footer-social-media-link" href="https://www.instagram.com/alchemycollectivehairlab/" target="_blank" rel="noopener noreferrer">
            <img src="./images/instagram.png" alt="IG Icon"/>
          </a>
          <a className="footer-social-media-link" href="https://www.yelp.com/biz/alchemy-collective-hair-lab-fountain-valley?osq=alchemy+collective" target="_blank" rel="noopener noreferrer">
            <img src="./images/yelp.png" alt="Yelp Icon"/>
          </a>
        </div>
        <p>18438 BROOKHURST STREET</p>
        <p>FOUNTAIN VALLEY, CA 92708</p>
        <p>714-706-2948</p>
      </footer>
    )
  }
}

export default Footer;
