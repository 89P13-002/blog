import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">BlogSpot</a>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/create">New Blog</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
