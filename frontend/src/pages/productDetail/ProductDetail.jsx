import React, { useState } from "react";
import { Rating, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProductDetailImages from "../../components/ProductDetailImages";
import { TiTick } from "react-icons/ti";
import { LuArrowDownUp } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

import "../../App.css";
import AdditionalInfo from "./components/AdditionalInfo";
import Reviews from "./components/Reviews";

function ProductDetail() {
  const [itemQty, setItemQty] = useState(0);
  const [selectedTab, setSelectedTab] = useState("description");
  return (
    <div className="bg-[#F7F8FD]  md:px-[50px] py-5">
      <div className="bg-white p-10 rounded-md  shadow-sm">
        <h2 className="text-2xl mb-4">
          All Natural Italian-Style Chicken Meatballs
        </h2>
        <div className="flex items-center gap-4">
          <div className="pr-4 border-r-2 ">
            <span className="text-gray-400">Brands :</span>
            <span className="">Welch's</span>
          </div>
          <div className="pr-4 border-r-2 ">
            <div className="flex items-center gap-1">
              <Rating
                name="text-feedback"
                value={4.5}
                readOnly
                precision={0.5}
                style={{ fontSize: "18px" }}
              />
              <span className="text-gray-400 ">1 Review</span>
            </div>
          </div>
          <div>
            <span className="text-gray-400">SKU :</span>
            <span>ZU49VOR</span>
          </div>
        </div>

        <div className="flex items-center mt-10">
          <div className="w-[40%]">
            <ProductDetailImages />
          </div>
          <div>
            <div>
              <h3 className="mb-3">
                <span className="text-xl text-gray-400">
                  <del>$9.35</del>
                </span>
                <span className="text-2xl font-bold ml-2 text-gray-700">
                  $7.25
                </span>
              </h3>
              <p className="bg-green-300 text-green-700 px-3 py-1 rounded-full max-w-fit">
                IN STOCK
              </p>

              <p className="my-5 text-sm">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent
              </p>

              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setItemQty(itemQty - 1)}
                  id="decreaseQtyBtn"
                >
                  <span className="text-3xl text-gray-500">-</span>
                </Button>
                <p>{itemQty}</p>
                <Button
                  onClick={() => setItemQty(itemQty + 1)}
                  id="increaseQtyBtn"
                >
                  <span className="text-3xl text-gray-500">+</span>
                </Button>

                <Button id="addToCartBtn">
                  <FaCartPlus />
                  <span className="ml-2">Add to cart</span>
                </Button>
              </div>

              <div className="my-7 space-x-3">
                <Button id="addToWishlist">
                  <FaRegHeart />
                  <span className="pl-1">Add to wishlist</span>
                </Button>
                <Button>
                  <LuArrowDownUp />
                  compare
                </Button>
              </div>

              <div className="space-y-2">
                <p className="flex items-center gap-1">
                  <TiTick className="text-green-500" />
                  <span>Type: Original</span>
                </p>
                <p className="flex items-center gap-1">
                  <TiTick className="text-green-500" />
                  <span>MFG: Jan 4.2021</span>
                </p>
                <p className="flex items-center gap-1">
                  <TiTick className="text-green-500" />
                  <span>LIFE: 30 days</span>
                </p>
              </div>
              <hr className="my-5" />
              <div className=" allLinkes">
                <p>
                  <span className="text-gray-500">Category :</span>{" "}
                  <Link className="hover:underline">Metats & Seafood</Link>
                </p>
                <p className="flex ">
                  <span className="text-gray-500 pr-1">Tages :</span>
                  <ul className="flex items-center gap-1">
                    <li>
                      <Link className="hover:underline ">chicken,</Link>
                    </li>
                    <li>
                      <Link className="hover:underline">natural,</Link>
                    </li>
                    <li>
                      <Link className="hover:underline">organic,</Link>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-md mt-10 px-10 py-5">
        <ul className="flex pb-4 border-b-2">
          <li>
            <Button onClick={() => setSelectedTab("description")}>
              <span
                className={`${
                  selectedTab === "description"
                    ? "text-gray-800"
                    : "text-gray-400"
                }  font-semibold text-base`}
              >
                Description
              </span>
            </Button>
          </li>
          <li>
            <Button onClick={() => setSelectedTab("additional-info")}>
              <span
                className={`${
                  selectedTab === "additional-info"
                    ? "text-gray-800"
                    : "text-gray-400"
                } font-semibold text-base`}
              >
                Additional information
              </span>
            </Button>
          </li>
          <li>
            <Button onClick={() => setSelectedTab("reviews")}>
              <span
                className={`${
                  selectedTab === "reviews" ? "text-gray-800" : "text-gray-400"
                } font-semibold text-base`}
              >
                Reviews (1)
              </span>
            </Button>
          </li>
        </ul>

        {/* selected component */}

        <div className="my-10">
          {selectedTab === "description" ? (
            <div className="text-gray-500 text-base">
              <p>
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                fermentum iaculis nibh, at sodales leo maximus a. Nullam
                ultricies sodales nunc, in pellentesque lorem mattis quis. Cras
                imperdiet est in nunc tristique lacinia. Nullam aliquam mauris
                eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare
                vel, dignissim a tortor. <br />
                <br /> Morbi ut sapien vitae odio accumsan gravida. Morbi vitae
                erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam
                dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit
                amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit
                amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus
                ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut
                arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
                vestibulum vulputate, lorem orci convallis quam, sit amet
                consequat nulla felis pharetra lacus. Duis semper erat mauris,
                sed egestas purus commodo vel.
              </p>
            </div>
          ) : selectedTab === "additional-info" ? (
            <AdditionalInfo />
          ) : (
            <Reviews />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
