import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { BsChevronDown } from "react-icons/bs";
import { IoClose, IoSearch } from "react-icons/io5";
import "./header.css";
import { Dialog } from "@mui/material";
import allCountry from "../../jsonData/allCountry";

const CountryDropDown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [countrysData, setCountrysData] = useState(allCountry);
  let [searchText, setSearchText] = useState("");
  let [selectedCountry, setSelectedCountry] = useState("");

  function handleClickLi(data) {
    setSelectedCountry(data);
    setIsOpenModal(false);
    setSearchText("");
  }

  useEffect(() => {
    if (searchText !== "") {
      let searchResult = countrysData.filter((data) =>
        data.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
      setCountrysData(searchResult);
    } else {
      setCountrysData(allCountry);
    }
  }, [searchText]);

  return (
    <div className="countryDropDown">
      <Button
        onClick={() => setIsOpenModal(!isOpenModal)}
        className=" countryDropDownBtn bg-black font-bold border-none "
      >
        <div className="text-start text-black text-[10px] ">
          <p className="text-gray-400">Your Location</p>
          <p className="font-bold text-[12px] text-blue-700">
            {selectedCountry !== ""
              ? selectedCountry.length > 12
                ? selectedCountry.substring(0, 12) + "..."
                : selectedCountry
              : " Select a Location"}
          </p>
        </div>
        <BsChevronDown className="text-black " />
      </Button>

      {/* drop down */}

      <div>
        <Dialog className="countryDropDown" open={isOpenModal}>
          <div className="p-6 dropDownBox relative">
            <IoClose
              onClick={() => setIsOpenModal(false)}
              className="absolute top-2 right-3 text-2xl text-red-400 cursor-pointer"
            />
            <h3 className="text-xl font-semibold mb-1">
              Choose your Delevery Location
            </h3>
            <p>
              Enter your addredd and we will specify the offer for your area
            </p>
            {/* search box  */}
            <div className="searchBox relative mt-2">
              <input
                className="w-[100%] outline-none border-[1px] rounded-md  px-5 py-3 bg-[#F3F4F7] border-gray-400"
                type="text"
                placeholder="Search fro Products"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button className="searchBtn">
                <IoSearch className="text-3xl" />
              </Button>
            </div>

            {/* list */}
            <div className="max-h-[300px] overflow-y-auto">
              <ul className="dropDownList mt-2 space-y-3">
                {countrysData?.map((data, i) => (
                  <li
                    onClick={() => handleClickLi(data)}
                    key={i}
                    className={`w-full hover:bg-gray-200 ${
                      selectedCountry === data ? "bg-gray-200" : ""
                    }`}
                  >
                    <Button>{data}</Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default CountryDropDown;
