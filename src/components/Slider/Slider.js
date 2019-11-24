import React, { Component } from "react";
import Slide from "../Slide/Slide";
import "./Slider.css";
import { RightArrow, LeftArrow } from "../Arrows/Arrow";

// Inspiration for carousel implementation and architecture: https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4
export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://i.imgur.com/ul2kQEo.jpg",
        "https://i.imgur.com/33o6AtC.jpg",
        "https://i.imgur.com/qQXytqu.jpg",
        "https://i.imgur.com/B9Lrp78.jpg",
        "https://i.imgur.com/bnHi5t4.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
        translateValue: -(this.state.images.length - 1) * this.slideWidth()
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
