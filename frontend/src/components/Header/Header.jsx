import React from "react";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BsArrowDown, BsMenuApp, BsMenuButton } from "react-icons/bs";

import CountryDropDown from "./CountryDropDown";
import SearchBox from "./SearchBox";
import "../../App.css";
import { Button } from "@mui/material";
import { IoMenu } from "react-icons/io5";
function Header() {
  return (
    <div>
      <div className="bg-[#233A95] w-full text-center text-white py-2">
        <p>
          Due to the COVID 19 epidemic, orders may be processed with a slight
          delay
        </p>
      </div>

      {/*Header codde start  */}
      <header className="md:px-[80px] px-5 py-5 ">
        <div className="flex items-center justify-between gap-7 ">
          <div className=" flex flex-col items-center gap-1">
            <img
              className="max-w-[180px] h-auto"
              src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo.png"
              alt="header logo"
            />
            <p className=" text-gray-400 text-[10px]">
              Online Grocery Shopping Center Your Location
            </p>
          </div>
          <CountryDropDown />
          <SearchBox />

          <div className="userContainer flex items-center justify-center  w-[50px] h-[50px] rounded-[50%] border-[1px] border-gray-300 text-center">
            <Button className="userBtn">
              <FaRegUser className="text-xl text-black" />
            </Button>
          </div>
          <div className="flex items-center gap-2 cursor-pointer ">
            <p className="font-bold">$200</p>
            <div className="relative bg-orange-100 w-[40px] h-[40px] flex items-center justify-center rounded-full">
              <FaShoppingBag className="text-xl" />
              <span className="bg-red-500 h-[18px] w-[18px] text-center rounded-full text-[10px] px-[3px] py-[1px] text-white absolute top-[-4px] right-[-2px] font-bold ">
                0
              </span>
            </div>
          </div>
        </div>
      </header>
      {/*Header codde end  */}

      {/*Nav bar codde nave  */}

      <nav className="md:px-[80px] px-5 flex items-center justify-between border-b pb-2 shadow-sm">
        <div className=" bg-[#2BBEF9] px-3 py-1 rounded-full ">
          <Button>
            <IoMenu className="text-white " />
            <p className="text-white px-1"> All Category</p>
            <FaAngleDown className="text-white " />
          </Button>
        </div>
        <div className="w-[70%]">
          <ul className=" flex justify-start items-start gap-5">
            <li>
              <Button>Men</Button>
            </li>
            <li>
              <Button>Women</Button>
            </li>
            <li>
              <Button>Kits</Button>
            </li>
            <li>
              <Button>Fashion</Button>
            </li>
            <li>
              <Button>Shirt</Button>
            </li>
            <li>
              <Button>Shirt</Button>
            </li>
            <li>
              <Button>Shirt</Button>
            </li>
          </ul>
        </div>
      </nav>

      {/*Nav bar codde end  */}
    </div>
  );
}

export default Header;
