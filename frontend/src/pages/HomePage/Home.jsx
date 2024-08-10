import React, { useEffect } from "react";
import Slider from "react-slick";
import banner1 from "../../assets/sidebar-banner-1.gif";
import banner2 from "../../assets/sidebar-banner-2.png";
import coupon from "../../assets/coupon.png";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/ProductCard";
import { Button } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import "./homePage.css";
import "../../App.css";
import TopCategory from "./components/TopCategory";
import { contextProvider } from "../../context/Context";

function Home() {
  const { setShowHeaderFooter } = contextProvider();

  useEffect(() => {
    setShowHeaderFooter(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <div className="homePage w-full">
      <HomeBanner />
      <TopCategory />
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

        {/*new products*/}

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
      {/* coopun section */}

      <div className="couponSction mt-[80px] w-full bg-[#233A95] px-10  pt-12 flex items-center justify-between">
        <div className=" md:w-[40%]">
          <p className="text-lg text-gray-100">
            $20 discount for your first order
          </p>
          <h3 className="text-3xl py-3 text-white">
            Join our newsletter and get...
          </h3>
          <p className="text-gray-400">
            Join our email subscription now to get updates <br /> on promotions
            and coupons.
          </p>
          <form className="bg-white  relative px-4 py-5 my-5 mb-10 rounded-md flex items-center ">
            <MdOutlineEmail className="text-xl text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Your email address"
              className="outline-none border-none"
            />
            <Button className="subscribeBtn">Subscribe</Button>
          </form>
        </div>
        <div>
          <img src={coupon} alt="coupon image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
