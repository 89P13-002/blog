const express = require("express");
const router = express.Router();
const { getAllBlog, getBlog, addBlog, deleteBlog } = require("../controller/blog-controller");
const multer = require('multer');
const path = require('path');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });

// GET all blogs
router.get('/', getAllBlog);

// GET a single blog by ID
router.get('/:id', getBlog);

// POST create a new blog with image upload
router.post('/add', upload.single('image'), addBlog);

// DELETE a blog by ID
router.delete('/:id', deleteBlog);

module.exports = router;
