import React, { useState } from "react";
import "./Image.css";

const Image = (props) => {
  const { style, image } = props;
  return (
    <div className="image-modal" style={style}>
      <img src={image} />
    </div>
  );
};

export default Image;
