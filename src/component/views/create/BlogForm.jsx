import React, { useState } from 'react';
import './BlogForm.css'; 

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    body: '',
    author: ''
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('subtitle', formData.subtitle);
    data.append('body', formData.body);
    data.append('author', formData.author);
    if (image) {
      data.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:3000/blogs/add', {
        method: 'POST',
        body: data
      });
      if (response.ok) {
        alert('Blog added successfully!');
        // Clear form after successful submission
        setFormData({
          title: '',
          subtitle: '',
          body: '',
          author: ''
        });
        setImage(null);
      } else {
        throw new Error('Failed to add blog');
      }
    } catch (error) {
      console.error('Error adding blog:', error);
      alert('Failed to add blog. Please try again later.');
    }
  };

  return (
    <div className="blog-form-container">
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Blog Title:</label><br />
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br />
        
        <label htmlFor="subtitle">Blog Subtitle:</label><br />
        <input type="text" id="subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange} required /><br />
        
        <label htmlFor="body">Blog Body:</label><br />
        <textarea id="body" name="body" rows="4" cols="50" value={formData.body} onChange={handleChange} required></textarea><br />
        
        <label htmlFor="author">Author:</label><br />
        <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required /><br />
        
        <label htmlFor="image">Upload Image:</label><br />
        <input type="file" id="image" name="image" onChange={handleImageChange} /><br /><br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
