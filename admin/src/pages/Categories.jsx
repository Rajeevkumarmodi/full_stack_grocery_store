import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { Button, Pagination } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { getData } from "../api/api";
import Skeleton from "@mui/material/Skeleton";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";

function Categories() {
  const [categoriesData, setCategoriesData] = useState({});
  const [loding, setLoging] = useState(true);
  const [pageNo, setPageNo] = useState(1);

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
                      <td className=" flex gap-2 justify-center relative bottom-[25px] items-center ">
                        <Tooltip title="Delete" placement="top-start">
                          <IconButton>
                            <MdDelete className="text-xl cursor-pointer text-red-600" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit" placement="top-start">
                          <IconButton>
                            <FaEdit className="text-xl cursor-pointer text-blue-600" />
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
      </div>
    </Layout>
  );
}

export default Categories;
