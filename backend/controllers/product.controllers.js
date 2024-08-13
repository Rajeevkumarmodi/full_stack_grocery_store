import uploader from "../middleware/multerConfig.js";
import multer from "multer";
import {
  deleteImageFromCloudinary,
  uploadFilesOnCloudinary,
} from "../utils/cloudinary.js";
import Product from "../models/product.model.js";

// create product
export async function create(req, res) {
  const {
    name,
    description,
    brand,
    countInStock,
    rating,
    numReviews,
    isFeatured,
    price,
    categoryId,
    discountPrice,
  } = req.body;

  const files = req?.files;

  if (
    !name ||
    !description ||
    !brand ||
    !countInStock ||
    !price ||
    !categoryId
  ) {
    return res
      .status(404)
      .json({ success: false, message: "All fields are required" });
  }

  if (!files) {
    return res
      .status(404)
      .json({ success: false, message: "Please provide images" });
  }

  try {
    // upload image on cloudinary
    const allImageUrl = files.map((file) => file.path);
    const uploadResult = await uploadFilesOnCloudinary(allImageUrl);
    const cloudinaryResult = Array.isArray(uploadResult)
      ? uploadResult
      : [uploadResult];

    if (cloudinaryResult.length <= 0) {
      return res
        .status(404)
        .json({ success: false, message: "images not uploded" });
    }

    const allUplodedURl = cloudinaryResult?.map((url) => url?.secure_url);

    const newProduct = new Product({
      name,
      description,
      brand,
      countInStock,
      rating,
      numReviews,
      isFeatured,
      price,
      discountPrice,
      category: categoryId,
      images: allUplodedURl,
    });

    await newProduct.save();

    return res
      .status(201)
      .json({ success: true, message: "product created", data: newProduct });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
}

// get all product

export async function getAllProduct(req, res) {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 })
      .populate("category");
    return res
      .status(200)
      .json({ success: true, message: "data found", data: products });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// get single product

export async function getSingleProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await Product.findById(id).populate("category");

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "data not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "data found", data: product });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// delete product

export async function deleteSingleProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await Product.findById(id).populate("category");

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "data not found" });
    }

    const productAllImages = product.images;

    const cloudinaryResult = await deleteImageFromCloudinary(productAllImages);

    const productDeleted = await Product.findByIdAndDelete(id);

    return res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// update product

// create product
export async function update(req, res) {
  const {
    name,
    description,
    brand,
    countInStock,
    rating,
    isFeatured,
    price,
    categoryId,
    discountPrice,
  } = req.body;

  const { id } = req.params;
  const files = req?.files;

  if (
    !name ||
    !description ||
    !brand ||
    !countInStock ||
    !price ||
    !categoryId
  ) {
    return res
      .status(404)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }

    if (files.length <= 0) {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        {
          name,
          description,
          brand,
          countInStock,
          rating,
          isFeatured,
          price,
          discountPrice,
          category: categoryId,
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "product updated",
        data: updatedProduct,
      });
    }

    // upload image on cloudinary
    const allImageUrl = files.map((file) => file.path);
    const uploadResult = await uploadFilesOnCloudinary(allImageUrl);
    const cloudinaryResult = Array.isArray(uploadResult)
      ? uploadResult
      : [uploadResult];

    if (cloudinaryResult.length <= 0) {
      return res
        .status(404)
        .json({ success: false, message: "images not uploded" });
    }

    const allUplodedURl = cloudinaryResult?.map((url) => url?.secure_url);
    const prevProductImages = product.images;

    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        brand,
        countInStock,
        rating,
        isFeatured,
        price,
        discountPrice,
        category: categoryId,
        images: allUplodedURl,
      },
      { new: true }
    );

    if (!updateProduct) {
      return res
        .status(404)
        .json({ success: false, message: "product not update" });
    }

    const deleteProductImages = await deleteImageFromCloudinary(
      prevProductImages
    );

    return res
      .status(200)
      .json({ success: true, message: "product updated", data: updateProduct });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
}
