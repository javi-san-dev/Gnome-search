import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = (props) => {
  const { style, image } = props;
  return (
    <div className="image-modal" style={style}>
      <img src={image} alt="img" />
    </div>
  );
};

Image.propTypes = {
  style: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default Image;
