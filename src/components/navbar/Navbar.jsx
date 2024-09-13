import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://img.freepik.com/premium-photo/vibrant-bus-logo-white-background_1158260-16208.jpg"
          alt="BusSafari Logo"
          className="logo-img"
        />
        <span className="logo-text">BusSafari</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="mytickets">My Tickets</a>
        </li>
        <li>
          <a href="profile">My Profile</a>
        </li>
      </ul>
      <div className="navbar-auth">
        <button className="btn btn-login">Login</button>
        <button className="btn btn-register">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
