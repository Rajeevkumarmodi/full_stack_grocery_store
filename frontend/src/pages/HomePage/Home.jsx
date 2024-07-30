import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/sidebar-banner-1.gif";
import banner2 from "../../assets/sidebar-banner-2.png";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/ProductCard";
import { Button } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import "./homePage.css";
import "../../App.css";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <div className="homePage">
      <HomeBanner />
      <div className=" md:mx-[50px]">
        <div className="my-8">
          <div className="flex gap-10 w-full justify-center ">
            <div className="w-[25%]">
              <img
                className="w-[100%]"
                src={banner1}
                alt="side banner first image"
              />
            </div>
            <div className="best-selling slider-container w-[75%] ">
              {/* text */}
              <div className="flex mb-6 items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl">BEST SELLERS</h3>
                  <p className="text-gray-500">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn">
                  View All <FaArrowRightLong />
                </Button>
              </div>
              <Slider {...settings}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </Slider>
            </div>
          </div>
        </div>

        {/* second banner */}

        <div className="flex gap-10 w-full justify-center ">
          <div className="w-[25%]">
            <img
              className="w-[100%] "
              src={banner2}
              alt="side banner first image"
            />
          </div>
          <div className="best-selling slider-container w-[75%] ">
            {/* text */}
            <div className="flex mb-6 items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">NEW PRODUCTS</h3>
                <p className="text-gray-500">
                  New products with updated stocks.
                </p>
              </div>
              <Button className="viewAllBtn">
                View All <FaArrowRightLong />
              </Button>
            </div>
            <Slider {...settings}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
