import React from "react";
import { Button } from "@mui/material";
import payments from "../../assets/payments.jpg";
import app_store from "../../assets/app-store.png";
import google_play from "../../assets/google-play.png";

import { Link } from "react-router-dom";
import { LuMilk } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";

function Footer() {
  const footerActionBtn = {
    border: "1px solid gray",
    height: "35px",
    minWidth: "35px",
    borderRadius: "50%",
  };

  const upArrow = {
    border: "1px solid gray",
    height: "50px",
    minWidth: "50px",
    borderRadius: "50%",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#ffffff",
    zIndex: "200",
    boxShadow: "0px 0px 4px 0px gray",
  };

  return (
    <footer className="relative">
      {/* up arrow */}
      <Button
        style={upArrow}
        onClick={() => {
          scrollTo(0, 0);
        }}
      >
        <MdKeyboardArrowUp className="text-3xl" />
      </Button>
      <div className="md:px-[50px] px-[20px] bg-[#F7F8FD] py-12">
        <div className="flex justify-between flex-wrap pb-10 border-b">
          <p className="flex items-center gap-2">
            <LuMilk className="text-2xl" />
            <span className="text-base text-gray-600">
              Everyday fresh products
            </span>
          </p>
          <p className="flex items-center gap-2">
            <TbTruckDelivery className="text-2xl" />
            <span className="text-base text-gray-600">
              Free delivery for order over $70
            </span>
          </p>
          <p className="flex items-center gap-2">
            <CiDiscount1 className="text-2xl" />
            <span className="text-base text-gray-600">
              {" "}
              Daily Mega Discounts
            </span>
          </p>
          <p className="flex items-center gap-2">
            <CiDollar className="text-2xl" />
            <span className="text-base text-gray-600">
              {" "}
              Best price on the market
            </span>
          </p>
        </div>
        <div className=" flex  flex-wrap justify-between mt-14">
          <div>
            <h3 className="my-4 font-bold">FRUIT & VEGETABLES</h3>
            <ul className="space-y-3">
              <li>
                <Link className="" to="/">
                  Fresh Vegetables
                </Link>
              </li>
              <li>
                <Link className="underline-offset-[0px]" to="/">
                  Herbs & Seasonings
                </Link>
              </li>
              <li>
                <Link className="underline-offset-[0px]" to="/">
                  Fresh Fruits
                </Link>
              </li>
              <li>
                <Link className="underline-offset-[0px]" to="/">
                  Cuts & Sprouts
                </Link>
              </li>
              <li>
                <Link className="underline-offset-[0px]" to="/">
                  Exotic Fruits & Veggies
                </Link>
              </li>
              <li>
                <Link className="underline-offset-[0px]" to="/">
                  Packaged Produce
                </Link>
              </li>
              <li>
                <Link className="underline-offset-[0px]" to="/">
                  Party Trays
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="my-4 font-bold">Breakfast & Dairy</h3>
            <ul className="space-y-3">
              <li>
                <li>
                  <Link to="/">Milk & Flavoured Milk</Link>
                </li>
                <li>
                  <Link to="/">Butter and Margarine</Link>
                </li>
                <li>
                  <Link to="/">Cheese</Link>
                </li>
                <li>
                  <Link to="/">Eggs Substitutes</Link>
                </li>
                <li>
                  <Link to="/">Honey</Link>
                </li>
                <li>
                  <Link to="/">Marmalades</Link>
                </li>
                <li>
                  <Link to="/">Sour Cream and Dips</Link>
                </li>
                <li>
                  <Link to="/">Yogurt</Link>
                </li>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="my-4 font-bold">Meat & Seafood</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/">Breakfast Sausage</Link>
              </li>
              <li>
                <Link to="/">Dinner Sausage</Link>
              </li>
              <li>
                <Link to="/">Beef</Link>
              </li>
              <li>
                <Link to="/">Chicken</Link>
              </li>
              <li>
                <Link to="/">Sliced Deli Meat</Link>
              </li>
              <li>
                <Link to="/">Shrimp</Link>
              </li>
              <li>
                <Link to="/">Wild Caught Fillets</Link>
              </li>
              <li>
                <Link to="/">Crab and Shellfish</Link>
              </li>
              <li>
                <Link to="/">Farm Raised Fillets</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="my-4 font-bold">Beverages</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/"> Water</Link>
              </li>
              <li>
                <Link to="/">Sparkling Water</Link>
              </li>
              <li>
                <Link to="/">Soda & Pop</Link>
              </li>
              <li>
                <Link to="/">Coffee</Link>
              </li>
              <li>
                <Link to="/">Milk & Plant-Based Milk</Link>
              </li>
              <li>
                <Link to="/">Tea & Kombucha</Link>
              </li>
              <li>
                <Link to="/">Drink Boxes & Pouches</Link>
              </li>
              <li>
                <Link to="/">Craft Beer</Link>
              </li>
              <li>
                <Link to="/">Wine</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="my-4 font-bold">Breads & Bakery</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/">Milk & Flavoured Milk</Link>
              </li>
              <li>
                <Link to="/">Butter and Margarine</Link>
              </li>
              <li>
                <Link to="/">Cheese</Link>
              </li>
              <li>
                <Link to="/">Eggs Substitutes</Link>
              </li>
              <li>
                <Link to="/">Honey</Link>
              </li>
              <li>
                <Link to="/">Marmalades</Link>
              </li>
              <li>
                <Link to="/">Sour Cream and Dips</Link>
              </li>
              <li>
                <Link to="/">Yogurt</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:px-[50px] px-[20px] mt-5">
        <div className="flex justify-between flex-wrap py-8 border-b">
          <div className="flex gap-2 items-center">
            <Button style={footerActionBtn}>
              <FiPhoneCall className="text-lg" />
            </Button>
            <div>
              <h3 className="text-2xl ">
                <span>8</span>
                <span className="px-2">800</span>
                <span>555-55</span>
              </h3>
              <p className="text-gray-600">Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-bold">
              Download App on Mobile :<br />
              <span className="font-normal text-gray-500">
                15% discount on your first purchase
              </span>
            </p>
            <img
              className="w-[110px] h-[40px] cursor-pointer"
              src={google_play}
              alt="google play image"
            />
            <img
              className="w-[110px] h-[40px] cursor-pointer"
              src={app_store}
              alt="app store image"
            />
            <Button style={footerActionBtn}>
              <FaFacebookF className="text-lg" />
            </Button>
            <Button style={footerActionBtn}>
              <FaInstagram className="text-lg" />
            </Button>
            <Button style={footerActionBtn}>
              <FaXTwitter className="text-lg" />
            </Button>
          </div>
        </div>

        <div className="flex items-center flex-wrap text-gray-500 justify-between py-8 bg-white">
          <div>
            <p className="text-[13px]">
              Copyright 2024 © Bacola WordPress Theme. All rights reserved.
              Powered by KlbTheme.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <ul className="flex items-center gap-4 text-[12px]">
                <li className="underline">
                  <Link to="/#">Privacy Policy </Link>
                </li>
                <li className="underline">
                  <Link to="/#">Terms and Conditions</Link>
                </li>
                <li className="underline">
                  <Link to="/#">Cookie</Link>
                </li>
              </ul>
              <Link to="/#">
                <img
                  className="cursor-pointer"
                  src={payments}
                  alt="payments image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
