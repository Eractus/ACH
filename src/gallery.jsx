import React from "react";
import Photo from "./photo";

class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const photoURLs = [
      "./images/splash1.jpg",
      "./images/splash2.jpg",
      "./images/splash3.jpg",
      "./images/splash4.jpg",
      "./images/splash6.jpg",
      "./images/splash5.jpg",
      "./images/splash8.jpg",
      "./images/splash9.jpg"
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
        <main>
          <div className="gallery-photos-list">
            {photos}
          </div>
        </main>
      </div>
    )
  }
}

export default Gallery;
