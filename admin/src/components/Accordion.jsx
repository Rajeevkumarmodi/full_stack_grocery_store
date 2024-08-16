import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
import { Button } from "@mui/material";

import { FaChevronDown } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

function Accordion({ active, setActive, id, children, title, icon }) {
  const mainBtn = {
    background: "#E7E7FF",
    width: "100%",
  };

  return (
    <div>
      <Button onClick={() => setActive(id)} sx={mainBtn}>
        <span className="mr-1 text-xl">{icon}</span>
        <span>{title}</span>
        <span>
          <FaChevronDown
            className={`ml-6 duration-100 ${
              active ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </Button>
      {/* {active && ( */}
      <div
        className={`ml-4 duration-500 ease-in-out overflow-hidden ${
          active ? "h-auto" : "h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
