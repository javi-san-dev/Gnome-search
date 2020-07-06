import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = (props) => {
  const { style, image } = props;
  return (
    <div className="image-modal" style={style} data-test="imageComponent">
      <img src={image} alt="img" data-test="image-image" />
    </div>
  );
};

Image.propTypes = {
  style: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default Image;
