import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// upload file

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "grocery_store_images",
      resource_type: "auto",
    });
    return response;
  } catch (error) {
    return null;
  }
};

// delete file on cloudinary

export const deleteImageFromCloudinary = async (imageUrl) => {
  try {
    if (!imageUrl) return null;
    // Extract the public ID from the URL
    const publicId = imageUrl.split("/").pop().split(".")[0];

    const result = await cloudinary.uploader.destroy(
      `grocery_store_images/${publicId}`
    );
    return result;
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    throw error;
  }
};
