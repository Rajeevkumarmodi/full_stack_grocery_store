import express from "express";
import uploader from "../utils/multerConfig.js";
import {
  allCategory,
  create,
  deleteCategory,
  updateCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.post("/create", uploader.single("image"), create);
router.get("/", allCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", uploader.single("image"), updateCategory);

export default router;
