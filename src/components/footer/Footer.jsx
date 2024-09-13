import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About BusSafari</h3>
          <p>Your trusted partner for safe and comfortable bus travel.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#tickets">My Tickets</a>
            </li>
            <li>
              <a href="#profile">My Profile</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@bussafari.com</p>
          <p>Phone: (+62) 81587 6218</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BusSafari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
