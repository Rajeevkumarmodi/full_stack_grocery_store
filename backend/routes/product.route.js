import express from "express";
import {
  create,
  deleteSingleProduct,
  getAllProduct,
  getSingleProduct,
  update,
} from "../controllers/product.controllers.js";
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

router.get("/", getAllProduct);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteSingleProduct);
router.put(
  "/:id",
  (req, res, next) => {
    uploader.array("images", 5)(req, res, multerErrorHandler(req, res, next));
  },
  update
);
export default router;
