import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>This page doesn't exist, bro 🫠</p>
      <Link to="/" className="home-link">Go Home</Link>
    </div>
  );
};

export default NotFound;

