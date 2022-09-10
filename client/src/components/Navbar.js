import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <input type="checkbox" id="check" />
      <header>
        <h2 className="logo">
          Furever <i className="fa-solid fa-paw"></i> Friends
        </h2>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/adopt">Adopt</Link>
          <Link to="/donate">Donate Here</Link>
          <Link to="/team">Our Team</Link>
        </div>
        <label for="check">
          <i className="fas fa-bars menu-btn"></i>
          <i className="fas fa-times close-btn"></i>
        </label>
      </header>
    </div>
  );
}

export default Navbar;
