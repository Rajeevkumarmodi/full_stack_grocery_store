import express from "express";
import { storage } from "../utils/cloudinary";
import multer from "multer";

const router = express.Router();

const uploader = multer({ storage });

router.get("/create", (req, res) => {
  res.send("category created");
});

export default router;
