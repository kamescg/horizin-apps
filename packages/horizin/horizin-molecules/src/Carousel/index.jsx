import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import React from "react";
import Slider from "react-slick";

export const Carousel = ({ items }) => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return <Slider {...settings}>{items.map(item => item)}</Slider>;
};
