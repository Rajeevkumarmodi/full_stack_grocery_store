import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from "@mui/material";

function AddCategory() {
  const [image, setImage] = useState("");

  function handleFileChange(e) {
    let url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  }
  return (
    <Layout>
      <div className="w-[100%] ">
        <div className="flex items-center justify-between shadow-md  py-4 px-5 rounded-lg my-6 mx-8 bg-white">
          <p className="font-bold text-gray-500 ">Add Category</p>
          <div className="flex items-center gap-3 font-semibold">
            <Link to="/" className="flex gap-1 items-center">
              <IoMdHome />
              Dashbord
            </Link>
            <span>/</span>
            <Link className="text-gray-500">Category</Link>
            <span>/</span>
            <Link className="text-gray-500">Add Category</Link>
          </div>
        </div>

        {/* form */}

        <form className="bg-white shadow-md  w-[60%] mx-auto px-5 py-5 rounded-md">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Category Name</label>
            <input
              className="border-[1.5px] px-3 py-1 rounded-md border-gray-300 outline-none"
              type="text"
              placeholder="Enter category name"
              id="name"
            />
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col gap-1 mt-5">
              <label htmlFor="name"> Category Image</label>
              <input
                onChange={(e) => handleFileChange(e)}
                type="file"
                id="name"
              />
            </div>
            <div className=" w-[80px] h-[80px] border-2 rounded-md">
              {image ? (
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt="image"
                />
              ) : (
                <p className="text-center mt-6">Preview</p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <Button type="submit" id="addCategory">
              <FaCloudUploadAlt className="mr-2 text-xl" />
              Add Category
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddCategory;
