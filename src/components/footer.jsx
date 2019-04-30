import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <img src="./images/ACH-font-logo.png" />
        <div className="footer-social-media">
          <a className="footer-social-media-link" href="https://www.facebook.com/Alchemy-Collective-Hairlab-2219094228114532/" target="_blank">
            <img src="./images/facebook.png" />
          </a>
          <a className="footer-social-media-link" href="https://www.instagram.com/alchemycollectivehairlab/" target="_blank">
            <img src="./images/instagram.png" />
          </a>
          <a className="footer-social-media-link" href="https://www.yelp.com/biz/alchemy-collective-hair-lab-fountain-valley?osq=alchemy+collective" target="_blank">
            <img src="./images/yelp.png" />
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
