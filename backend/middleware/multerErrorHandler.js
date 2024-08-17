import multer from "multer";

const multerErrorHandler = (req, res, next) => {
  return (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        // Handle Multer-specific errors
        if (err.code === "LIMIT_FILE_SIZE") {
          return res
            .status(400)
            .json({
              success: false,
              message: "File size should be less than 500 KB",
            });
        }
      } else if (
        err.message === "Only .png, .jpg,.jpeg and .webp formats allowed!"
      ) {
        // Handle custom file filter error
        return res.status(400).json({ success: false, message: err.message });
      } else {
        // Handle any other errors
        return res
          .status(500)
          .json({
            success: false,
            message: "An error occurred during the upload",
          });
      }
    }
    // If no errors, proceed to the next middleware/controller
    next();
  };
};

export default multerErrorHandler;
