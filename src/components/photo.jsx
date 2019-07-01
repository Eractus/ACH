import React from "react";
import '../css/photo.css';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayPhoto: false }

  }

  openPhotoPopup = () => {
    this.setState({ displayPhoto: true });
    document.body.style.overflow = "hidden";
  }

  closePhotoPopup = () => {
    this.setState({ displayPhoto: false });
    document.body.style.overflow = "auto";
  }

  render() {
    const photoPopup = (this.state.displayPhoto) ?
    <div className="modal-overlay">
      <div className="photo-image-popup">
        <img alt="Blowup" src={this.props.photo} />
        <span onClick={this.closePhotoPopup}></span>
      </div>
    </div> : "";

    return (
      <div>
        {photoPopup}
        <span onClick={this.openPhotoPopup} className="photo-image">
          <div className="photo-overlay"></div>
          <img alt="Preview" src={this.props.photo} />
        </span>
      </div>
    );
  }
}

export default Photo;
