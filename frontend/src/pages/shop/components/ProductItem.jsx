import React, { useState } from "react";
import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";

import ProductDetails from "../../../components/ProductDetails";
import { Rating } from "@mui/material";

function ProductItem({ showItemEachRow }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="productItem">
      <ProductDetails isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="productCard relative px-3 border-[1px] border-gray-200 ">
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
        <div
          className={`productContent space-y-2 ${
            showItemEachRow === 1 ? " flex flex-row gap-3" : ""
          }`}
        >
          <img
            className={`duration-200 ${
              showItemEachRow === 1 ? "h-60" : "h-auto"
            } bg-gray-600`}
            src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
            alt="product image"
          />
          <div className={`${showItemEachRow === 1 ? "space-y-3 z-30" : ""}`}>
            <p className="font-bold">
              Angie’s Boomchickapop Sweet & Salty Kettle Corn
            </p>
            <p className=" ">
              <span className="text-sm text-gray-400 mr-2">1kg</span>
              <span className="text-sm text-green-500">IN STOCK</span>
            </p>

            {/* rating */}

            <div className="flex items-center gap-1">
              <Rating
                name="text-feedback"
                value={4.5}
                readOnly
                precision={0.5}
                style={{ fontSize: "18px" }}
              />
              <span className="text-gray-400 ">1</span>
            </div>

            <p className="space-x-2">
              <span>
                {" "}
                <del className="text-red-500">$4.29</del>
              </span>{" "}
              <span className=" font-bold"> $3.29</span>
            </p>

            {showItemEachRow === 1 ? (
              <div className="my-7 space-x-3">
                <Button className="addToWishlist">
                  <FaRegHeart />
                  <span className="pl-1 text-[12px] text-gray-500">
                    Add to wishlist
                  </span>
                </Button>
                <Button>
                  <span className="text-gray-500">
                    <LuArrowDownUp />
                  </span>
                  <span className="text-gray-500">compre</span>
                </Button>
              </div>
            ) : (
              ""
            )}

            <div
              className={`${
                showItemEachRow === 1 ? "text-start" : "text-center"
              }`}
            >
              <Button className="addToCartBtn">
                <span className="">
                  <FaCartArrowDown />
                </span>
                <span className="capitalize ml-2 ">Add to cart</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
