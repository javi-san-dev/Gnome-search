import React, { useEffect, useState } from "react";
import "./Gnomo.css";

const Gnomo = (props) => {
  const { name, age, friends, hairColor, professions, image } = props;
  const [imageStyle, setImageStyle] = useState({ display: "none" });
  console.log(professions);
  useEffect(() => {
    const image = document.getElementById("gnome-image").height;
    console.log(image);
  }, image);

  const styleHandler = () => {
    imageStyle.display === "none"
      ? setImageStyle({ display: "inline" })
      : setImageStyle({ display: "none" });
  };

  return (
    <div className="gnomo-container" onClick={styleHandler}>
      <div className="gnomo-card">
        <img src={image} id="gnome-image" />
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
            {friends.map((pro) => (
              <p>{pro},</p>
            ))}
          </div>

          <div className="gnome-professions">
            <div>professions:</div>
            {professions.map((pro) => (
              <p>{pro}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gnomo;
