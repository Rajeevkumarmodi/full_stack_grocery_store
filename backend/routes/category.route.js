import uploader from "../middleware/multerConfig.js";
import express from "express";
import {
  allCategory,
  create,
  deleteCategory,
  singleCategory,
  updateCategory,
} from "../controllers/category.controller.js";
import multerErrorHandler from "../middleware/multerErrorHandler.js";

const router = express.Router();

// create category route
router.post(
  "/create",
  (req, res, next) => {
    uploader.single("image")(req, res, multerErrorHandler(req, res, next));
  },
  create
);

router.get("/", allCategory);
router.get("/:id", singleCategory);
router.delete("/:id", deleteCategory);

// update category route
router.put(
  "/:id",
  (req, res, next) => {
    uploader.single("image")(req, res, multerErrorHandler(req, res, next));
  },
  updateCategory
);

export default router;
