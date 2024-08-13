import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// upload single file
export const uploadFilesOnCloudinary = async (localFilePaths) => {
  try {
    // If localFilePaths is a single string, convert it to an array
    if (!localFilePaths) return null;
    if (!Array.isArray(localFilePaths)) {
      localFilePaths = [localFilePaths];
    }

    const uploadPromises = localFilePaths.map((filePath) => {
      return cloudinary.uploader.upload(filePath, {
        folder: "grocery_store_images",
        resource_type: "auto",
      });
    });

    // Wait for all uploads to complete
    const responses = await Promise.all(uploadPromises);

    // If only one file was uploaded, return the first response
    return responses.length === 1 ? responses[0] : responses;
  } catch (error) {
    console.error("Error uploading files:", error);
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
