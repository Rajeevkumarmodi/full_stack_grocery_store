import uploader from "../middleware/multerConfig.js";
import multer from "multer";
import { uploadFilesOnCloudinary } from "../utils/cloudinary.js";
import Product from "../models/product.model.js";

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
