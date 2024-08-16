import React from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Button } from "@mui/material";
import profileImg from "../assets/profileImg.jpg";
import { BiBorderRadius } from "react-icons/bi";

function Header() {
  const BtnStyle = {
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: "50%",
    background: "#b8d1ff",
  };
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-white shadow-md">
      {/* side bar */}
      <div className="flex items-center gap-4">
        <IoMdMenu className="cursor-pointer text-3xl" />
        {/* search box */}
        <div className=" relative bg-blue-50 flex items-center py-1 rounded-md">
          <IoSearch className="relative left-3 text-2xl text-gray-600" />
          <input
            type="text"
            placeholder="Search hear..."
            className="outline-none bg-transparent pl-4 pr-2"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <Button style={BtnStyle}>
          <MdDarkMode className="text-gray-500" />
        </Button>
        <Button style={BtnStyle}>
          <FaRegBell className="text-gray-500" />
        </Button>

        <div className="flex gap-1">
          <img
            className="w-[30px] h-[30px] rounded-full"
            src={profileImg}
            alt="profile image"
          />
          <p>Rajeev kumar</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
