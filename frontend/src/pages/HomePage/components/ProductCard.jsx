import React, { useState } from "react";
import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import ProductDetailsModal from "../../../components/ProductDetailsModal";
import { Link } from "react-router-dom";

function ProductCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProductDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="productCard relative px-3 w-[210px] border-[1px] border-gray-200 ">
        <p className="bg-[#2BBEF9] z-[100] absolute top-5 left-4 px-3 py-1 rounded-md text-white font-bold">
          23%
        </p>
        <div className="actionBtn absolute top-10 space-y-4">
          <div className="w-[40px] h-[40px]  hover:bg-blue-900 hover:text-white duration-300 rounded-full shadow-md grid place-items-center">
            <SlSizeFullscreen
              onClick={() => setIsOpen(true)}
              className="opacity-80  text-lg cursor-pointer"
            />
          </div>
          <div className="w-[40px] h-[40px] hover:bg-blue-900 hover:text-white duration-300 rounded-full shadow-md grid place-items-center">
            <FaRegHeart className="opacity-80 text-lg cursor-pointer" />
          </div>
        </div>
        <div className="productContent space-y-2">
          <Link to="/product/1">
            <img
              className="duration-200 z-10 cursor-pointer"
              src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
              alt=""
            />
          </Link>
          <p className="font-bold">
            Angie’s Boomchickapop Sweet & Salty Kettle Corn
          </p>
          <p className="text-green-400 text-sm">IN STOCK</p>
          <p className="space-x-2">
            <span>
              {" "}
              <del className="text-red-500">$4.29</del>
            </span>{" "}
            <span className=" font-bold"> $3.29</span>
          </p>
          <div className="text-center">
            <Button className="addToCartBtn">Add to cart</Button>
          </div>
          {/* <div className="">
        </div> */}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
