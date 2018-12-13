import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <img src="./images/ACH-font-logo.png" />
        <div className="footer-social-media">
          <a href="https://www.instagram.com/alchemycollectivehairlab/">
            <img src="./images/instagram.png" />
          </a>
          <a href="https://www.yelp.com/biz/alchemy-collective-hair-lab-fountain-valley?osq=alchemy+collective">
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
