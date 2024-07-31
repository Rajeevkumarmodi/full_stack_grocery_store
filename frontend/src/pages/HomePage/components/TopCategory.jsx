import React from "react";
import Slider from "react-slick";

function TopCategory() {
  let arr = new Array(13).fill(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <div className="topCategories md:mx-[50px] mx-[20px] w-full my-12">
      <h2 className="text-3xl font-bold">Top Categories</h2>
      {/* <div className="w-[100vw] flex items-center gap-4"> */}
      <Slider {...settings}>
        {arr.map((_, i) => (
          <div className="my-10 bg-[#FEEFEA] md:max-w-[120px] text-center py-4 rounded-lg cursor-pointer hover:border-green-500 hover:border-[1px] shadow-sm hover:bg-white duration-200 hover:shadow-md hover:shadow-gray-300">
            <img
              className=""
              src="https://nest.botble.com/storage/product-categories/image-3.png"
              alt="category image"
            />
            <p className="text-lg text-gray-600">Fast food</p>
            <p className="text-lg text-gray-600">6 items</p>
          </div>
        ))}
      </Slider>
    </div>
    // </div>
  );
}

export default TopCategory;
