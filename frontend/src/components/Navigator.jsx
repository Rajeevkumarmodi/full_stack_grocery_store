import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

function Navigator() {
  const location = useLocation();
  const [endPoint, setEndPoint] = useState([]);

  useEffect(() => {
    let locationArr = location.pathname
      .split("/")
      .filter((item) => item !== "");
    setEndPoint(locationArr);
  }, [location]);
  return (
    <nav className="my-2">
      <ul className="flex gap-2">
        <li className="text-base hover:underline">
          <Link to="/">Home</Link>
        </li>
        {endPoint?.map((item, i) => (
          <li className="text-base flex  gap-2 items-center" key={i}>
            <span className="text-gray-500 ">
              <FaChevronRight className="text-sm" />
            </span>
            <Link
              to={i === endPoint.length - 1 ? "" : item}
              className={` ${
                i === endPoint.length - 1
                  ? "cursor-text text-gray-400"
                  : "cursor-pointer hover:underline"
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigator;
