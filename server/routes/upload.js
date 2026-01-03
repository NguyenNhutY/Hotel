import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

// upload 1 ảnh
router.post("/single", upload.single("image"), (req, res) => {
  res.json({
    success: true,
    imageUrl: req.file.path, // URL cloudinary
  });
});

// upload nhiều ảnh
router.post("/multiple", upload.array("images", 10), (req, res) => {
  const urls = req.files.map((file) => file.path);
  res.json({
    success: true,
    images: urls,
  });
});

export default router;
