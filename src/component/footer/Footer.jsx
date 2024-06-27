import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>BlogSpot</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo
            vel sequi aperiam delectus voluptatem quisquam debitis unde voluptas
            ipsam molestias consequuntur nam recusandae, soluta in illo.
            Dignissimos, soluta tenetur?
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/term">Terms</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} BlogSpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
