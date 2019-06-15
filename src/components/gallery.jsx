import React from "react";

class Gallery extends React.Component {
  constructor() {
    super()

    this.state = {
      displayBlowup: false,
      currPhoto: null
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  openPhotoPopup = (index) => {
    this.setState({ displayBlowup: true, currPhoto: index });
    document.body.style.overflow = "hidden";
  }

  closePhotoPopup = () => {
    this.setState({ displayBlowup: false, currPhoto: null });
    document.body.style.overflow = "auto";
  }

  swipePhoto = (dir) => {
    let totalPhotos = this.props.photoURLs.length;
    let index = this.state.currPhoto;
    if (dir === "left") {
      if (index === 0) {
        index = totalPhotos - 1;
      } else {
        index -= 1;
      }
    } else if (dir === "right") {
      if (index === totalPhotos - 1) {
        index = 0
      } else {
        index += 1;
      }
    }
    this.setState({ currPhoto: index });
  }

  render() {
    const photoPopup = (this.state.displayBlowup) ?
    <div className="modal-overlay">
      <span className="gallery-swipe-arrow left" onClick={() => this.swipePhoto("left")}>&lsaquo;</span>
      <div className="photo-image-popup">
        <img alt="Blowup" src={this.props.photoURLs[this.state.currPhoto]} />
        <span onClick={this.closePhotoPopup}></span>
      </div>
      <span className="gallery-swipe-arrow right" onClick={() => this.swipePhoto("right")}>&rsaquo;</span>
    </div> : "";

    return (
      <div className="gallery-container">
        {photoPopup}
        <header className="header darken-overlay">
          <p>GALLERY</p>
        </header>
        <main className="gallery-main-wrapper">
          <div className="gallery-photos-list">
            {this.props.photoURLs.map((photoURL, index) => (
              <GalleryPhoto
                key={index}
                photo={photoURL}
                open={() => this.openPhotoPopup(index)}
              />
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

const GalleryPhoto = (props) => {
  return (
    <div>
      <span onClick={props.open} className="photo-image">
        <div className="photo-overlay"></div>
        <img alt="Preview" src={props.photo} />
      </span>
    </div>
  );
}

export default Gallery;
