import path from "path";
import {
  deleteImageFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";
import Category from "../models/category.model.js";

// create category
export async function create(req, res) {
  const { name } = req.body;
  const file = req?.file;
  const extension = path.extname(file?.originalname);

  if (!name) {
    return res
      .status(201)
      .json({ success: false, message: "Please provide name" });
  }

  if (!file) {
    return res
      .status(201)
      .json({ success: false, message: "Please provide image" });
  }

  if (extension !== ".png" && extension !== ".jpg" && extension !== ".jpeg") {
    return res.status(201).json({
      success: false,
      message: "only .png , .jpeg , jpg formate allowed",
    });
  }

  if (req.file.size > 512000) {
    return res.status(404).json({
      success: false,
      message: "please provide image size less then 500kb",
    });
  }

  //   upload on cloudinary

  try {
    const result = await uploadOnCloudinary(file?.path);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "image not uploaded" });
    }

    const newCategory = Category({ name, image: result?.secure_url });
    await newCategory.save();

    return res
      .status(201)
      .json({ success: true, message: "New category created!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// read all category

export async function allCategory(req, res) {
  try {
    let allCategory = await Category.find();
    res
      .status(200)
      .json({ success: true, message: "data found", data: allCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// deletee category

export async function deleteCategory(req, res) {
  let { id } = req.params;
  try {
    const isCategory = await Category.findById(id);

    if (!isCategory) {
      return res
        .status(404)
        .json({ success: false, message: "category not found" });
    }

    const result = await deleteImageFromCloudinary(isCategory.image);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "image not deleted" });
    }

    const deleteCategory = await Category.findByIdAndDelete(id);

    return res.status(200).json({ success: true, message: "category deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// update category

export async function updateCategory(req, res) {
  let { id } = req.params;
  const { name } = req.body;
  const file = req?.file;
  const extension = file ? path.extname(file?.originalname) : "";

  if (!name) {
    return res
      .status(201)
      .json({ success: false, message: "Please provide name" });
  }

  try {
    const isCategory = await Category.findById(id);

    if (!isCategory) {
      return res
        .status(404)
        .json({ success: false, message: "category not found" });
    }

    if (!file) {
      //  update name
      isCategory.name = name;
      await isCategory.save();
      return res
        .status(200)
        .json({ success: true, message: "category update" });
    }

    // file is present

    if (extension !== ".png" && extension !== ".jpg" && extension !== ".jpeg") {
      return res.status(201).json({
        success: false,
        message: "only .png , .jpeg , jpg formate allowed",
      });
    }

    if (req.file.size > 512000) {
      return res.status(404).json({
        success: false,
        message: "please provide image size less then 500kb",
      });
    }

    // upload image
    const result = await uploadOnCloudinary(file?.path);
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "image not uploded" });
    }

    let prevImageUrl = isCategory.image;

    const updateCategory = await Category.findByIdAndUpdate(
      id,
      {
        name,
        image: result?.secure_url,
      },
      { new: true }
    );

    // delete image
    await deleteImageFromCloudinary(prevImageUrl);

    return res.status(200).json({ success: true, message: "category updated" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
