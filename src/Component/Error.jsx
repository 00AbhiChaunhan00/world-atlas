import React from "react";
// import "./ErrorPage.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-text">Page Not Found</p>
      <a href="/" className="error-btn">Go Home</a>
    </div>
  );
};

export default Error;
