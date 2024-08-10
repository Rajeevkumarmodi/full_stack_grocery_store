import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { MdClose } from "react-icons/md";
import { contextProvider } from "../../context/Context";

function Cart() {
  const [itemQty, setItemQty] = useState(0);

  const { setShowHeaderFooter } = contextProvider();

  useEffect(() => {
    setShowHeaderFooter(true);
  }, []);

  return (
    <div className=" md:mx-[80px] w-full flex gap-10 my-10">
      <div className="md:w-[55%] ">
        <h3 className="text-xl font-semibold">Your Cart</h3>
        <p className="mb-5 mt-1">There are 3 products in your cart</p>
        <table className=" w-full ">
          <thead className="border-b">
            <tr className="bg-gray-100">
              <th className="py-4">Product</th>
              <th className="py-4">Price</th>
              <th className="py-4">Quantity</th>
              <th className="py-4">Subtotal</th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody className="">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <tr key={`row_${index}`} className="border-b">
                  <td className="flex items-center ">
                    <img
                      className="w-[80px] rounded-md px-2 py-2"
                      src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
                      alt="product image"
                    />
                    <p className="text-wrap">
                      Haagen-Dazs Caramel Cone Ice Cream
                    </p>
                  </td>
                  <td className=" px-2 text-center">$49.2</td>
                  <td className=" px-2  text-center">
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        onClick={() => setItemQty(itemQty - 1)}
                        id="decreaseQtyBtn"
                        style={{ minWidth: "30px", height: "30px" }}
                      >
                        <span className="text-3xl text-gray-500">-</span>
                      </Button>
                      <p>{itemQty}</p>
                      <Button
                        onClick={() => setItemQty(itemQty + 1)}
                        id="increaseQtyBtn"
                        style={{ minWidth: "20px", height: "30px" }}
                      >
                        <span className="text-2xl text-gray-500">+</span>
                      </Button>
                    </div>
                  </td>
                  <td className=" px-2 text-center">$100</td>
                  <td className="px-2">
                    <MdClose className="text-xl font-bold text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="md:w-[30%]">
        <div className="border-[1.5px] rounded-md p-5 ">
          <h3 className="text-base uppercase pb-5 border-b font-semibold">
            Cart totals
          </h3>

          <p className="font-semibold flex justify-between py-4 border-b">
            <span>Subtotal</span>
            <span>$100</span>
          </p>

          <div className="flex justify-between py-5 border-b">
            <p className="font-semibold">Shipping</p>
            <p className="font-semibold">Free</p>
          </div>

          <p className="flex justify-between py-4 border-b font-semibold">
            <span>Total</span>
            <span>$100</span>
          </p>

          <div className="text-center ">
            <Button
              style={{
                background: "red",
                marginBlock: "15px",
                color: "white",
                padding: "10px 20px",
              }}
            >
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
