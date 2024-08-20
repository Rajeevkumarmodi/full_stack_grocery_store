import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";

import toast from "react-hot-toast";
import Layout from "../components/Layout";
import { Button, Pagination } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteData, getData, updateData } from "../api/api";
import Skeleton from "@mui/material/Skeleton";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";

import Tooltip from "@mui/material/Tooltip";
import Loader from "../components/Loader";

function Categories() {
  const [categoriesData, setCategoriesData] = useState({});
  const [loding, setLoging] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [image, setImage] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editLoding, setEditLoding] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  async function fetchData() {
    setLoging(true);
    let response = await getData(`category?page=${pageNo}`);
    console.log("res", response);

    if (response.success) {
      setLoging(false);
      setCategoriesData(response.data);
    } else {
      setLoging(false);
      toast.error(response.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("image", formData.image);

    setEditLoding(true);
    const response = await updateData(data, "category/" + formData._id);
    if (response.success) {
      toast.success(response.message);
      setEditDialogOpen(false);
      fetchData();
    } else {
      toast.success(response.message);
    }
    setEditLoding(false);
  }

  async function handleCLickEditBtn(id) {
    const response = await getData("category/" + id);
    if (response.success) {
      setEditDialogOpen(true);
      setFormData(response.data);
      setImage(response.data?.image);
    } else {
      toast.error(response.message);
    }
    console.log("response", response);
  }

  function handleFileChange(e) {
    setFormData({ ...formData, image: e.target.files[0] });
    let url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  }

  async function handleDelete(id) {
    const response = await deleteData("category/" + id);
    if (response.success) {
      fetchData();
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  const skilatonSty = {
    height: "50px",
  };

  return (
    <Layout>
      <div className="w-full">
        {loding && <LinearProgress />}

        <div className="flex items-center justify-between shadow-md  py-2 px-5 rounded-lg my-6 mx-8 bg-white">
          <Button id="addNewCategoryBtn">
            <Link to="/add-category"> Add Category </Link>
          </Button>
          <div className="flex items-center gap-3 font-semibold">
            <Link to="/" className="flex gap-1 items-center">
              <IoMdHome />
              Dashbord
            </Link>
            <span>/</span>
            <Link className="text-gray-500">Category</Link>
            <span>/</span>
            <Link className="text-gray-500">Categories </Link>
          </div>
        </div>

        <div className="bg-white mx-5 shadow-md rounded-md px-4 py-3">
          <table className="w-full ">
            <thead className="mb-4">
              <tr className="bg-blue-600 text-white">
                <th className="py-2">SI NO</th>
                <th>Image</th>
                <th>Catehory</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full ">
              {loding
                ? Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <tr key={i}>
                        <td className="">
                          <Skeleton style={skilatonSty} animation="wave" />
                        </td>
                        <td className="">
                          <Skeleton style={skilatonSty} animation="wave" />
                        </td>
                        <td className="">
                          <Skeleton style={skilatonSty} animation="wave" />
                        </td>
                        <td className="">
                          <Skeleton style={skilatonSty} animation="wave" />
                        </td>
                      </tr>
                    ))
                : categoriesData?.categories?.map((item, i) => (
                    <tr className="even:bg-gray-100" key={`row_${i}`}>
                      <td className="text-center">{i}</td>
                      <td className="flex justify-center ">
                        <img
                          className="w-[60px] h-[60px] rounded-lg py-1"
                          src={item.image}
                          alt="image"
                        />
                      </td>
                      <td className="text-center">{item.name}</td>
                      <td className=" flex gap-2 justify-center relative bottom-[20px] items-center ">
                        <Tooltip title="Delete" placement="top-start">
                          <IconButton>
                            <MdDelete
                              onClick={() => handleDelete(item._id)}
                              className="text-xl cursor-pointer text-red-600"
                            />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit" placement="top-start">
                          <IconButton>
                            <FaEdit
                              onClick={() => handleCLickEditBtn(item._id)}
                              className="text-xl cursor-pointer text-blue-600"
                            />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <div className=" flex justify-between my-5">
            <p>
              Showing <span className="font-semibold">4</span> of{" "}
              <span className="font-semibold">
                {categoriesData.totalResult}
              </span>{" "}
              resultes
            </p>

            <Pagination
              count={categoriesData.totalPage}
              defaultPage={1}
              page={pageNo}
              siblingCount={0}
              onChange={(e, val) => setPageNo(val)}
            />
          </div>
        </div>

        {/* edit modal */}

        <Dialog
          onClose={() => setEditDialogOpen(false)}
          open={editDialogOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="absolute right-2 top-2">
            <MdClose
              onClick={() => setEditDialogOpen(false)}
              className="text-2xl hover:text-red-600 hover:scale-110 cursor-pointer"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md  w-[60%] mx-auto px-5 py-5 rounded-md min-w-full"
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
              <Button disabled={editLoding} type="submit" id="addCategory">
                {editLoding ? (
                  <>
                    <Loader color="white" />{" "}
                    <span className="ml-4">Loading...</span>
                  </>
                ) : (
                  <>
                    <FaCloudUploadAlt className="mr-2 text-xl" />
                    Edit Category
                  </>
                )}
              </Button>
            </div>
          </form>
        </Dialog>
      </div>
    </Layout>
  );
}

export default Categories;
