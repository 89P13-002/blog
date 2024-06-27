import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <section className="error">
        <div className="error-content">
          <h1>404 Page Not Found</h1>
          <p>We're sorry, but the page you were looking for doesn't exist.</p>
          <a href="/" className="home-button">Go to Home</a>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
