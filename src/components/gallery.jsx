import React from "react";
import Photo from "./photo";

class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const photoURLs = [
      "./images/chair2.jpg",
      "./images/cutting1.jpg",
      "./images/cutting3.jpg",
      "./images/product2.jpg",
      "./images/plant1.jpg",
      "./images/cutting2.jpg",
      "./images/plant2.jpg",
      "./images/chair1.jpg",
      "./images/product1.jpg"
    ];

    const photos = [];

    photoURLs.forEach((photoURL, index) => {
      photos.push(
        <Photo
          key={index}
          photo={photoURL}
        />
      )
    });

    return (
      <div className="gallery-container">
        <header className="header darken-overlay">
          <p>GALLERY</p>
        </header>
        <main className="gallery-main-wrapper">
          <div className="gallery-photos-list">
            {photos}
          </div>
        </main>
      </div>
    )
  }
}

export default Gallery;
