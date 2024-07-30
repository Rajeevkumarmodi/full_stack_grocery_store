import React from "react";
import Slider from "react-slick";
import "./component.css";

function HomeBanner() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="homeBanner ">
      <Slider {...settings}>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hd6/h55/33081764675614/watches_top-banner-web--new-home-page-main-2024-07-08.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hfc/hc9/33109669249054/Private_top-banner-web--flat-503off-2024-07-11.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h1b/hc0/33109669511198/women-Indianwear_top-banner-web------flat-503off-2024-07-11.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h8e/hb2/33109669904414/Main_EOSS-FLAT-50-WEB--2024-07--10-new-hp.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeBanner;
