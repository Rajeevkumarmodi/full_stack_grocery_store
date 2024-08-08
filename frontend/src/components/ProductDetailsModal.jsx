import React, { useState } from "react";
import { Button, Dialog, Link } from "@mui/material";
import Rating from "@mui/material/Rating";
import { MdClose } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { LuArrowDownUp } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import "../App.css";
import ProductDetailImages from "./ProductDetailImages";

function ProductDetailsModal({ isOpen, setIsOpen }) {
  const [itemQty, setItemQty] = useState(0);

  return (
    <div className="productDetailModal">
      <Dialog
        className="productDetailDialog"
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <div className="productDescraption p-14 relative">
          <div className="contentContainer">
            {/* close icon */}
            <Button onClick={() => setIsOpen(false)} className="closeBtn">
              <MdClose className="text-xl" />
            </Button>
            {/* info */}
            <div className="border-b pb-6">
              <h2 className="text-2xl font-bold pb-4">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <div className="flex items-center gap-3 text-[12px]">
                <p className="border-r pr-3">
                  <span className="text-gray-500"> Brands</span>{" "}
                  <span>Welch's</span>
                </p>
                <div className="flex items-center gap-2 border-r pr-3">
                  <Rating name="simple-controlled" value={4} />
                  <span className="text-gray-500">1REVIEW</span>
                </div>
                <p className="border-r border-h pr-3">
                  <span className="text-gray-500"> SKU:</span>{" "}
                  <span className="font-bold"> ZU49VOR</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-14">
            <div className="w-[40%]">
              <ProductDetailImages />
            </div>
            <div>
              <div>
                <h3 className="mb-3">
                  <span className="text-xl text-gray-400">
                    <del>$9.35</del>
                  </span>
                  <span className="text-2xl font-bold italic ml-2 text-gray-700">
                    $7.25
                  </span>
                </h3>
                <p className="bg-green-300 text-green-700 px-3 py-1 rounded-full max-w-fit">
                  IN STOCK
                </p>

                <p className="my-5 text-sm">
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                  litora torquent
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

                  <Button id="addToCartBtn">Add to cart</Button>
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
      </Dialog>
    </div>
  );
}

export default ProductDetailsModal;
