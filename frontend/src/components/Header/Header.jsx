import React, { useState } from "react";
import { FaAngleDown, FaAngleRight, FaRegUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BsArrowDown, BsMenuApp, BsMenuButton } from "react-icons/bs";

import CountryDropDown from "./CountryDropDown";
import SearchBox from "./SearchBox";
import "../../App.css";
import { Button } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isOpenAllCategory, setIsOpenCategory] = useState(false);
  const navigate = useNavigate();
  let isLogin = false;

  return (
    <div>
      <div className="bg-[#233A95] w-full text-center text-white py-2">
        <p>
          Due to the COVID 19 epidemic, orders may be processed with a slight
          delay
        </p>
      </div>

      {/*Header codde start  */}
      <header className="md:px-[50px] px-5 py-5 ">
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

          {isLogin ? (
            <div className="userContainer flex items-center justify-center  w-[40px] h-[40px] rounded-[50%] border-[1px] border-gray-300 text-center">
              <Button className="userBtn">
                <FaRegUser className="text-xl text-black" />
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              style={{
                background: "blue",
                color: "white",
                textTransform: "capitalize",
                padding: "5px 20px",
              }}
            >
              Login
            </Button>
          )}

          <Link to="/cart" className="flex items-center gap-2 cursor-pointer ">
            <p className="font-bold">$200</p>
            <div className="relative bg-orange-100 w-[40px] h-[40px] flex items-center justify-center rounded-full">
              <FaShoppingBag className="text-xl" />
              <span className="bg-red-500 h-[18px] w-[18px] text-center rounded-full text-[10px] px-[3px] py-[1px] text-white absolute top-[-4px] right-[-2px] font-bold ">
                0
              </span>
            </div>
          </Link>
        </div>
      </header>
      {/*Header codde end  */}

      {/*Nav bar codde nave  */}

      <nav className="md:px-[50px] px-5 flex items-center justify-between border-b pb-2 shadow-sm">
        <div className="allCategory relative bg-[#2BBEF9] px-3 py-1 rounded-full ">
          <Button onClick={() => setIsOpenCategory((prev) => !prev)}>
            <IoMenu className="text-white " />
            <p className="text-white px-1"> All Category</p>
            <FaAngleDown className="text-white " />
          </Button>

          <ul
            className={`allCategoryList ${
              isOpenAllCategory ? "opacity-100 visible" : "opacity-0 hidden"
            } duration-500 space-y-3 bg-white absolute rounded-md  z-[100] top-12 p-2 py-3 left-1 shadow-md min-w-[200px]`}
          >
            <li>
              <Button>men</Button>
            </li>
            <li className="">
              <Button>
                men
                <FaAngleDown />
              </Button>

              <ul className="sideSubMenu bg-white absolute left-[100%] top-[5px] min-w-[200px] px-2 py-2 space-y-2 border-[1px] border-gray-200">
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
              </ul>
            </li>

            <li>
              <Button>men</Button>
            </li>
            <li>
              <Button>men</Button>
            </li>
            <li className="">
              <Button>
                men <FaAngleDown />
              </Button>

              <ul className="sideSubMenu bg-white absolute left-[100%] top-[5px] min-w-[200px] px-2 py-2 space-y-2 border-[1px] border-gray-200">
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
                <li>
                  <Button>fashion</Button>
                </li>
              </ul>
            </li>
            <li>
              <Button>men</Button>
            </li>
            <li>
              <Button>men</Button>
            </li>
            <li>
              <Button>men</Button>
            </li>
          </ul>
        </div>
        <div className="w-[70%]">
          <ul className="navMenu flex justify-start items-start gap-5">
            <li className="relative">
              <Button>
                Men <FaAngleDown />
              </Button>
              <ul className="space-y-3 navSubMenu absolute bg-white top-11 p-2 py-3 z-[100] min-w-[150px] rounded-md shadow-md">
                <li>
                  <Button>T-shirt</Button>
                </li>
                <li>
                  <Button>T-shirt</Button>
                </li>
                <li>
                  <Button>T-shirt</Button>
                </li>
                <li>
                  <Button>T-shirt</Button>
                </li>
                <li>
                  <Button>T-shirt</Button>
                </li>
              </ul>
            </li>
            <li>
              <Button>Women</Button>
            </li>
            <li className="relative">
              <Button>
                Kits <FaAngleDown />
              </Button>
              <ul className="space-y-3 navSubMenu bg-white absolute top-11 p-2 py-3 z-[100] min-w-[150px] rounded-md shadow-md">
                <li>
                  <Button>T-shirt</Button>
                </li>
                <li>
                  <Button>T-shirt</Button>
                </li>
                <li>
                  <Button>T-shirt</Button>
                </li>
                <li>
                  <Button>T-shirt</Button>
                </li>
                <li>
                  <Button>T-shirt</Button>
                </li>
              </ul>
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
