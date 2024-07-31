import React from "react";
import { Link } from "@mui/material";

function Footer() {
  return (
    <footer className="md:px-[50px] px-[20px] py-12 bg-[#F7F8FD]">
      <div className=" flex  flex-wrap justify-between ">
        <div>
          <h3 className="my-4 font-bold">FRUIT & VEGETABLES</h3>
          <ul className="space-y-3">
            <li>
              <Link className="" to="/">
                Fresh Vegetables
              </Link>
            </li>
            <li>
              <Link className="underline-offset-[0px]" to="/">
                Herbs & Seasonings
              </Link>
            </li>
            <li>
              <Link className="underline-offset-[0px]" to="/">
                Fresh Fruits
              </Link>
            </li>
            <li>
              <Link className="underline-offset-[0px]" to="/">
                Cuts & Sprouts
              </Link>
            </li>
            <li>
              <Link className="underline-offset-[0px]" to="/">
                Exotic Fruits & Veggies
              </Link>
            </li>
            <li>
              <Link className="underline-offset-[0px]" to="/">
                Packaged Produce
              </Link>
            </li>
            <li>
              <Link className="underline-offset-[0px]" to="/">
                Party Trays
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="my-4 font-bold">Breakfast & Dairy</h3>
          <ul className="space-y-3">
            <li>
              <li>
                <Link to="/">Milk & Flavoured Milk</Link>
              </li>
              <li>
                <Link to="/">Butter and Margarine</Link>
              </li>
              <li>
                <Link to="/">Cheese</Link>
              </li>
              <li>
                <Link to="/">Eggs Substitutes</Link>
              </li>
              <li>
                <Link to="/">Honey</Link>
              </li>
              <li>
                <Link to="/">Marmalades</Link>
              </li>
              <li>
                <Link to="/">Sour Cream and Dips</Link>
              </li>
              <li>
                <Link to="/">Yogurt</Link>
              </li>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="my-4 font-bold">Meat & Seafood</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/">Breakfast Sausage</Link>
            </li>
            <li>
              <Link to="/">Dinner Sausage</Link>
            </li>
            <li>
              <Link to="/">Beef</Link>
            </li>
            <li>
              <Link to="/">Chicken</Link>
            </li>
            <li>
              <Link to="/">Sliced Deli Meat</Link>
            </li>
            <li>
              <Link to="/">Shrimp</Link>
            </li>
            <li>
              <Link to="/">Wild Caught Fillets</Link>
            </li>
            <li>
              <Link to="/">Crab and Shellfish</Link>
            </li>
            <li>
              <Link to="/">Farm Raised Fillets</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="my-4 font-bold">Beverages</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/"> Water</Link>
            </li>
            <li>
              <Link to="/">Sparkling Water</Link>
            </li>
            <li>
              <Link to="/">Soda & Pop</Link>
            </li>
            <li>
              <Link to="/">Coffee</Link>
            </li>
            <li>
              <Link to="/">Milk & Plant-Based Milk</Link>
            </li>
            <li>
              <Link to="/">Tea & Kombucha</Link>
            </li>
            <li>
              <Link to="/">Drink Boxes & Pouches</Link>
            </li>
            <li>
              <Link to="/">Craft Beer</Link>
            </li>
            <li>
              <Link to="/">Wine</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="my-4 font-bold">Breads & Bakery</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/">Milk & Flavoured Milk</Link>
            </li>
            <li>
              <Link to="/">Butter and Margarine</Link>
            </li>
            <li>
              <Link to="/">Cheese</Link>
            </li>
            <li>
              <Link to="/">Eggs Substitutes</Link>
            </li>
            <li>
              <Link to="/">Honey</Link>
            </li>
            <li>
              <Link to="/">Marmalades</Link>
            </li>
            <li>
              <Link to="/">Sour Cream and Dips</Link>
            </li>
            <li>
              <Link to="/">Yogurt</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
