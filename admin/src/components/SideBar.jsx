import React, { useState } from "react";

import { PiDotOutlineFill } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { Button } from "@mui/material";
import Accordion from "./Accordion";
import "../App.css";
import "../App.css";
import { Link } from "react-router-dom";

function SideBar() {
  const [active, setActive] = useState(0);

  const btn = {
    paddingRight: "20px",
    marginBlock: "10px",
    width: "100%",
    display: "flex",
    alignItem: "center",
    textTransform: "capitalize",
  };

  return (
    <div className="w-[300px]  bg-white h-screen overflow-auto shadow-md px-4">
      <div className="my-4 text-center text-2xl font-bold">
        <span className="text-red-700">Admin</span>{" "}
        <span className="text-blue-700">Panel</span>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <Accordion
          id={1}
          active={active == 1 ? true : false}
          setActive={setActive}
          title="Dashbord"
          icon={<MdDashboard />}
        >
          <Button sx={btn}>
            <PiDotOutlineFill className="text-3xl text-gray-500" /> Dashboard
          </Button>
        </Accordion>
        <Accordion
          id={2}
          active={active == 2 ? true : false}
          setActive={setActive}
          title="Product"
          icon={<FaProductHunt />}
        >
          <Button sx={btn}>
            <PiDotOutlineFill className="text-3xl text-gray-500" />
            Products
          </Button>
          <Button sx={btn}>
            <PiDotOutlineFill className="text-3xl text-gray-500" />
            Add Product
          </Button>
        </Accordion>
        <Accordion
          id={3}
          active={active == 3 ? true : false}
          setActive={setActive}
          title="Category"
          icon={<FaProductHunt />}
        >
          <Button sx={btn}>
            <Link className="flex items-center" to="/add-category">
              <PiDotOutlineFill className="text-3xl text-gray-500" />
              Add Category
            </Link>
          </Button>
          <Button sx={btn}>
            <PiDotOutlineFill className="text-3xl text-gray-500" />
            Categories
          </Button>
        </Accordion>
      </div>
    </div>
  );
}

export default SideBar;
