import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import sidebarImg from "../../../assets/sidebar-banner-1.gif";

function Sidebar() {
  const [priceValue, setPriceValue] = useState([0, 100]);
  const [checkBoxValues, setCheckBoxValue] = useState({
    categories: [],
    productStatus: [],
    brands: [],
  });

  const handleChangePrice = (event, newValue) => {
    setPriceValue(newValue);
  };

  function handleChange(e, value) {
    console.log(e.target.checked);
  }

  return (
    <div className="max-w-[250px] ">
      <div className="select-none">
        {/* product categories */}
        <h3 className="uppercase mt-5 mb-2 font-bold text-[14px]">
          Product Categories
        </h3>
        <div className="max-h-[250px] overflow-y-auto">
          <div className="space-x-2 text-gray-500 ">
            <input
              // value="Coffee"
              onChange={(e) => handleChange(e, "Coffee")}
              // onChange={(e) =>
              //   setCheckBoxValue({
              //     ...checkBoxValues,
              //     categories: e.target.value,
              //   })
              // }
              // checked={checkBoxValues.categories !== "" ? true : false}
              className="cursor-pointer "
              id="coffee"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="coffee">
              Coffee
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input className="cursor-pointer" id="Craft_beer" type="checkbox" />
            <label className="cursor-pointer" htmlFor="Craft_beer">
              Craft Beer
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Drink_boxes_pouches"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Drink_boxes_pouches">
              Drink Boxes & Pouches
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Milk_plant_based_milk"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Milk_plant_based_milk">
              Milk & Plant-Based Milk
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Drink_boxes_pouches"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Drink_boxes_pouches">
              Drink Boxes & Pouches
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Milk_plant_based_milk"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Milk_plant_based_milk">
              Milk & Plant-Based Milk
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Drink_boxes_pouches"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Drink_boxes_pouches">
              Drink Boxes & Pouches
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Milk_plant_based_milk"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Milk_plant_based_milk">
              Milk & Plant-Based Milk
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Drink_boxes_pouches"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Drink_boxes_pouches">
              Drink Boxes & Pouches
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Milk_plant_based_milk"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Milk_plant_based_milk">
              Milk & Plant-Based Milk
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Drink_boxes_pouches"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Drink_boxes_pouches">
              Drink Boxes & Pouches
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Milk_plant_based_milk"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Milk_plant_based_milk">
              Milk & Plant-Based Milk
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Drink_boxes_pouches"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Drink_boxes_pouches">
              Drink Boxes & Pouches
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Milk_plant_based_milk"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Milk_plant_based_milk">
              Milk & Plant-Based Milk
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Drink_boxes_pouches"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Drink_boxes_pouches">
              Drink Boxes & Pouches
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Milk_plant_based_milk"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Milk_plant_based_milk">
              Milk & Plant-Based Milk
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Drink_boxes_pouches"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Drink_boxes_pouches">
              Drink Boxes & Pouches
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input
              className="cursor-pointer"
              id="Milk_plant_based_milk"
              type="checkbox"
            />
            <label className="cursor-pointer" htmlFor="Milk_plant_based_milk">
              Milk & Plant-Based Milk
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input className="cursor-pointer" id="Soda_pop" type="checkbox" />
            <label className="cursor-pointer" htmlFor="Soda_pop">
              Soda & Pop{" "}
            </label>
          </div>
          <div className="space-x-2 text-gray-500 ">
            <input className="cursor-pointer" id="water" type="checkbox" />
            <label className="cursor-pointer" htmlFor="water">
              Water{" "}
            </label>
          </div>
        </div>
      </div>

      {/* prodict filter */}
      <h3 className="uppercase mt-8 font-semibold">Filter by price</h3>
      <div>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={priceValue}
          onChange={handleChangePrice}
          valueLabelDisplay="auto"
        />
        <div className="flex justify-between mt-2 mb-5">
          <p>
            <span className="text-gray-500">Price:</span>
            <span> ${priceValue[0]} — </span>
            <span>${priceValue[1]}</span>
          </p>
          <p className="uppercase">filter</p>
        </div>
      </div>

      {/* Product status  */}
      <div>
        <h3 className="uppercase mb-3 font-semibold">product status</h3>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="in_stock" type="checkbox" />
          <label className="cursor-pointer" htmlFor="in_stock">
            In Stock
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="on_sale" type="checkbox" />
          <label className="cursor-pointer" htmlFor="on_sale">
            On Sale
          </label>
        </div>
      </div>

      {/* brand  */}

      <h3 className="uppercase mt-7 font-semibold">Brands</h3>
      <div className="max-h-[200px] overflow-y-auto my-2">
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Frito_lay" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Frito_lay">
            Frito Lay
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Nespresso" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Nespresso">
            Nespresso
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Frito_lay" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Frito_lay">
            Frito Lay
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Nespresso" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Nespresso">
            Nespresso
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Frito_lay" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Frito_lay">
            Frito Lay
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Nespresso" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Nespresso">
            Nespresso
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Frito_lay" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Frito_lay">
            Frito Lay
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Nespresso" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Nespresso">
            Nespresso
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Frito_lay" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Frito_lay">
            Frito Lay
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Nespresso" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Nespresso">
            Nespresso
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Frito_lay" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Frito_lay">
            Frito Lay
          </label>
        </div>
        <div className="space-x-2 text-gray-500 ">
          <input className="cursor-pointer" id="Nespresso" type="checkbox" />
          <label className="cursor-pointer" htmlFor="Nespresso">
            Nespresso
          </label>
        </div>
      </div>

      <div className="my-10">
        <img src={sidebarImg} alt="side bar image" />
      </div>
    </div>
  );
}

export default Sidebar;
