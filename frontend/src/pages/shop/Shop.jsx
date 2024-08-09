import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import banner from "../../assets/shop-banner.png";
import Navigator from "../../components/Navigator";
import { IoMenuSharp } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../components/ProductItem";
import Pagination from "@mui/material/Pagination";

function Shop() {
  const [sortBy, setSortBy] = useState(null);
  const [numberOfShow, setNumberOfShow] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState("Sort by popularity");
  const [selectedShowItem, setSelectedShowItem] = useState(12);
  const [showItemEachRow, setShowItemEachRow] = useState(4);

  const sortByOpen = Boolean(sortBy);
  const numberOfShowModal = Boolean(numberOfShow);

  const handleShowModalClick = (event) => {
    setNumberOfShow(event.currentTarget);
  };

  const handleClickSortBy = (event) => {
    setSortBy(event.currentTarget);
  };
  const handleCloseSortBy = () => {
    setSortBy(null);
  };

  const handleCloseNumberModal = () => {
    setNumberOfShow(null);
  };

  return (
    <div className="shopPage md:mx-[50px]">
      <Navigator />
      <div className="flex gap-10">
        <Sidebar />

        <div className="my-6">
          {/* image banner */}
          <div>
            <img src={banner} alt="banner image" />
          </div>
          {/* product show view and filter */}
          <div className="bg-[#F7F8FD] rounded-md  my-5 flex justify-between px-4 py-3">
            <div className="flex  items-center gap-4">
              <IoMenuSharp
                onClick={() => setShowItemEachRow(1)}
                className={`text-xl ${
                  showItemEachRow === 1 ? "text-black" : "text-gray-400"
                } cursor-pointer hover:text-black`}
              />
              <CgMenuGridO
                onClick={() => setShowItemEachRow(3)}
                className={`text-xl ${
                  showItemEachRow === 3 ? "text-black" : "text-gray-400"
                } cursor-pointer hover:text-black`}
              />
              <TfiLayoutGrid4
                onClick={() => setShowItemEachRow(4)}
                className={`text-xl ${
                  showItemEachRow === 4 ? "text-black" : "text-gray-400"
                } cursor-pointer hover:text-black`}
              />
            </div>
            <div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 cursor-pointer">
                  <Button
                    id="basic-button"
                    aria-controls={sortByOpen ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={sortByOpen ? "true" : undefined}
                    onClick={handleClickSortBy}
                  >
                    <span className="text-[13px] capitalize text-black">
                      {selectedSortBy}
                    </span>
                    {/* <span className="text-[13px] capitalize text-black">
                      price
                    </span> */}
                    <span>
                      <MdOutlineKeyboardArrowDown className="text-black mt-1 text-xl" />
                    </span>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={sortBy}
                    open={sortByOpen}
                    onClose={handleCloseSortBy}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        setSelectedSortBy("Sort by popularity");
                        handleCloseSortBy();
                      }}
                    >
                      Sort by popularity
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSelectedSortBy("Sort by average rating");
                        handleCloseSortBy();
                      }}
                    >
                      Sort by average rating
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSelectedSortBy("Sort by latest");
                        handleCloseSortBy();
                      }}
                    >
                      Sort by latest
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSelectedSortBy(" Sort by price: low to high");
                        handleCloseSortBy();
                      }}
                    >
                      Sort by price: low to high
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSelectedSortBy("Sort by price: high to low");
                        handleCloseSortBy();
                      }}
                    >
                      Sort by price: high to low
                    </MenuItem>
                  </Menu>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    id="basic-button"
                    aria-controls={numberOfShowModal ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={numberOfShowModal ? "true" : undefined}
                    onClick={handleShowModalClick}
                  >
                    <span className="text-[13px] capitalize text-gray-500 pr-2">
                      Show
                    </span>
                    <span className="text-[13px] capitalize text-black">
                      {selectedShowItem}
                    </span>
                    <span>
                      <MdOutlineKeyboardArrowDown className="text-black mt-1 text-xl" />
                    </span>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={numberOfShow}
                    open={numberOfShowModal}
                    onClose={handleCloseNumberModal}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        setSelectedShowItem(12);
                        handleCloseNumberModal();
                      }}
                    >
                      {" "}
                      12
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSelectedShowItem(24);
                        handleCloseNumberModal();
                      }}
                    >
                      {" "}
                      24
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSelectedShowItem(36);
                        handleCloseNumberModal();
                      }}
                    >
                      36
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSelectedShowItem(48);
                        handleCloseNumberModal();
                      }}
                    >
                      {" "}
                      48
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          {/* product item */}

          <div
            className={`grid gap-4  ${
              showItemEachRow === 4
                ? "grid-cols-4"
                : showItemEachRow === 3
                ? "grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
            <ProductItem showItemEachRow={showItemEachRow} />
          </div>

          {/* pagination */}
          <div className="  mr-auto my-8  ">
            <Pagination count={10} color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
