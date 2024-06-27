const Blog = require('../model/blog');

// Get all blogs
const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Get a single blog by ID
const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new blog
const addBlog = async (req, res) => {
  const { title, subtitle, body, author } = req.body;
  const imgPath = req.file ? '/uploads/' + req.file.filename : null; // Store relative path to image

  const newBlog = new Blog({ title, subtitle, body, author, img: imgPath });
  
  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlog,
  getBlog,
  addBlog,
  deleteBlog
};
