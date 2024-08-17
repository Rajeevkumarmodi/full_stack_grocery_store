import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import { getData, createCategory } from "../api/api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";
function AddCategory() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  function handleFileChange(e) {
    setFormData({ ...formData, image: e.target.files[0] });
    let url = URL.createObjectURL(e.target.files[0]);
    setImage(url);

    // console.log("file", e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.image) {
      toast.error("all fields are required");
      return;
    }
    const data = new FormData();
    data.append("name", formData.name);
    data.append("image", formData.image);

    setLoading(true);
    const response = await createCategory(data, "category/create");
    if (response.success) {
      console.log("ya response is comming on", response);
      toast.success(response.message);
      setLoading(false);
      setFormData({
        name: "",
        image: "",
      });
      setImage("");
    } else {
      console.log("response", response);
      setLoading(false);
      toast.error(response.message);
    }
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

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md  w-[60%] mx-auto px-5 py-5 rounded-md"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Category Name</label>
            <input
              className="border-[1.5px] px-3 py-1 rounded-md border-gray-300 outline-none"
              type="text"
              placeholder="Enter category name"
              id="name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
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
            <Button disabled={loading} type="submit" id="addCategory">
              {loading ? (
                <>
                  <Loader color="white" />{" "}
                  <span className="ml-4">Loading...</span>
                </>
              ) : (
                <>
                  <FaCloudUploadAlt className="mr-2 text-xl" />
                  Add Category
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddCategory;
