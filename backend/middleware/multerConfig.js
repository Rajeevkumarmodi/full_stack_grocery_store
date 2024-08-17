import multer from "multer";

// Set the maximum file size (500 KB)
const MAX_SIZE = 500 * 1024; // 500 KB in bytes

const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: MAX_SIZE },
  fileFilter: (req, file, cb) => {
    // Allowed extensions
    const allowedExtensions = /png|jpg|jpeg|webp/;

    // Get the file extension
    const extname = allowedExtensions.test(file.originalname.toLowerCase());
    const mimetype = allowedExtensions.test(file.mimetype);

    // Check extension and mimetype
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only .png, .jpg,.jpeg and .webp formats allowed!"));
    }
  },
});

export default uploader;
