import React, { Component } from "react";
import Slider from "react-slick";

function CustomPaging() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="productDetailImages">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" />
          </div>
          <div>
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" />
          </div>
          <div>
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CustomPaging;
