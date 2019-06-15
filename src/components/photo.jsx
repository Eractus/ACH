import React from "react";

const Photo = (props) => {
  return (
    <div>
      <span onClick={props.open} className="photo-image">
        <div className="photo-overlay"></div>
        <img alt="Preview" src={props.photo} />
      </span>
    </div>
  );
}

export default Photo;
