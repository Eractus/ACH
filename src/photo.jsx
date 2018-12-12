import React from "react";

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayPhoto: false }

    this.openPhotoPopup = this.openPhotoPopup.bind(this);
    this.closePhotoPopup = this.closePhotoPopup.bind(this);
  }

  openPhotoPopup() {
    this.setState({ displayPhoto: true });
  }

  closePhotoPopup() {
    this.setState({ displayPhoto: false });
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
