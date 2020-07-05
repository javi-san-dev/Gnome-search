import React, { useState } from "react";
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
    <div className="gnomo-container" onClick={styleHandler}>
      <div className="gnomo-card">
        <img src={image} alt="img" />
        <div className="gnomo-info">
          <div className="gnome-name">
            <h6>{name}</h6>
            <p>{age} years</p>
          </div>

          <p>
            <b>Hair color:</b> {hairColor}
          </p>
          <p>
            <b>Friends:</b>
          </p>
          <div className="gnome-friends">
            {friends.map((pro, i) => (
              <p key={i}>{pro},</p>
            ))}
          </div>

          <div className="gnome-professions">
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

export default Gnomo;
