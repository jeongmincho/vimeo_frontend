import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "./Arrow.css";

const RightArrow = ({ goToNextSlide }) => {
  return (
    <div className="nextArrow" onClick={goToNextSlide}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const LeftArrow = ({ goToPrevSlide }) => {
  return (
    <div className="backArrow" onClick={goToPrevSlide}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

export { RightArrow, LeftArrow };
