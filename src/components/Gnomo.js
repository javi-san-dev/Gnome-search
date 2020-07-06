import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Gnomo.css";
import Image from "./Image";

const Gnomo = (props) => {
  const { name, age, friends, hairColor, professions, image } = props;
  const [imageStyle, setImageStyle] = useState({ display: "none" });

  const styleHandler = () => {
    imageStyle.display === "none"
      ? setImageStyle({ display: "inline" })
      : setImageStyle({ display: "none" });
  };

  return (
    <div
      className="gnomo-container"
      onClick={styleHandler}
      data-test="gnomeComponent"
    >
      <div className="gnomo-card">
        <img src={image} data-test="gnome-image" alt="img" />
        <div className="gnomo-info">
          <div className="gnome-name">
            <h6 data-test="product-name">{name}</h6>
            <p data-test="gnome-age">{age} years</p>
          </div>

          <p data-test="gnome-hairColor">
            <b>Hair color:</b> {hairColor}
          </p>
          <p>
            <b>Friends:</b>
          </p>
          <div className="gnome-friends" data-test="gnome-friends">
            {friends.map((pro, i) => (
              <p key={i}>{pro},</p>
            ))}
          </div>

          <div className="gnome-professions" data-test="gnome-professions">
            <div>professions:</div>
            {professions.map((pro, i) => (
              <p key={i}>{pro}</p>
            ))}
          </div>
        </div>
      </div>

      <Image style={imageStyle} image={image} />
    </div>
  );
};

Gnomo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  friends: PropTypes.array.isRequired,
  hairColor: PropTypes.string.isRequired,
  professions: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};

export default Gnomo;
