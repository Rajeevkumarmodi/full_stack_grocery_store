import express from "express";
import { create } from "../controllers/product.controllers.js";
import multerErrorHandler from "../middleware/multerErrorHandler.js";
import uploader from "../middleware/multerConfig.js";
const router = express.Router();

router.post(
  "/create",
  (req, res, next) => {
    uploader.array("images", 5)(req, res, multerErrorHandler(req, res, next));
  },
  create
);

export default router;
