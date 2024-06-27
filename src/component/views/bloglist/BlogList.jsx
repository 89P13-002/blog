import React, { useEffect, useState } from 'react';
import './BlogList.css';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs/');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list-container">
      {blogs.length > 0 ? (
        <div className="all">
          {blogs.map((blog) => (
              <div key={blog._id} className="single">
                {blog.img && <img src={`http://localhost:3000${blog.img}`} alt={blog.title} className="image"/>}
                <div className="item">
                  <h3>{blog.title}</h3>
                  <p>{blog.subtitle}</p>
                  <p className="author">By {blog.author}</p>
                  <Link to={`/blogs/${blog._id}`} className="read-more-button">
                    Read More
                  </Link>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-blogs">
          <p>No blogs available</p>
          <Link to="/create" className="create-new-button">
            Create New Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogList;
