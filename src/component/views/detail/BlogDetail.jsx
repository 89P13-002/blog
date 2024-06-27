import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${blog._id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }
      navigate("/blogs"); // Redirect after deletion
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  if (!blog) {
    return <div style={{backgroundColor:"#000"}}>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className="blog-detail-container">
      <main className="content">
        {blog.img && <img src={`http://localhost:3000${blog.img}`} alt={blog.title} />}
        <h1>{blog.title}</h1>
        <h3>{blog.subtitle}</h3>
        <p>{new Date(blog.createdAt).toLocaleString()}</p> 
        <p>{blog.body}</p>
        <p>------{blog.author}------</p>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </main>
    </div>
  );
};

export default BlogDetail;
