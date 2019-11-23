import React from "react";
import "./Card.css";

const Card = ({ title, text, imageUrl, isLeft }) => {
  return (
    <div className={isLeft ? "card" : "card card-right"}>
      <div className="card-caption">
        <h2 className="card-header">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
      <img className="card-image" src={imageUrl} alt="monsoon_image"></img>
    </div>
  );
};

export default Card;
