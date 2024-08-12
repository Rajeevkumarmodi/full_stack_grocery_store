import express from "express";
import uploader from "../utils/multerConfig.js";
import { allCategory, create } from "../controllers/category.controller.js";

const router = express.Router();

router.post("/create", uploader.single("image"), create);
router.get("/", allCategory);

export default router;
