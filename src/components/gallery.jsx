import React from "react";
import Photo from "./photo";

class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="gallery-container">
        <header className="header darken-overlay">
          <p>GALLERY</p>
        </header>
        <main className="gallery-main-wrapper">
          <div className="gallery-photos-list">
            {this.props.photoURLs.map((photoURL, index) => (
              <Photo key={index} photo={photoURL} />
            ))}
          </div>
        </main>
      </div>
    )
  }
}

Gallery.defaultProps = {
  photoURLs: [
    "./images/chair2.jpg",
    "./images/cutting1.jpg",
    "./images/cutting3.jpg",
    "./images/product2.jpg",
    "./images/plant1.jpg",
    "./images/cutting2.jpg",
    "./images/plant2.jpg",
    "./images/chair1.jpg",
    "./images/product1.jpg"
  ]
}

export default Gallery;
