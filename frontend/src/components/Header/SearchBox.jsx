import { Button } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchBox() {
  return (
    <div className="w-[40%] relative searchBox">
      <input
        className="w-[100%] outline-none border-[1px] rounded-md  px-5 py-3 bg-[#F3F4F7] border-gray-400"
        type="text"
        placeholder="Search fro Products"
      />
      <Button className="searchBtn">
        <IoSearch className="text-3xl" />
      </Button>
    </div>
  );
}

export default SearchBox;
