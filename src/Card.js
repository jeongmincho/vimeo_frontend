import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card" style={{ "flex-direction": "row-reverse" }}>
      <div className="card-caption">
        <h1 className="card-header">Monsoon III</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img
        className="card-image"
        src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
        alt="monsoon_image"
      ></img>
    </div>
  );
}

export default Card;