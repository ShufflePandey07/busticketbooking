import React from "react";
import "./WhyChooseUs.css"; // You'll need to create this CSS file

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <div className="why-choose-us-image">
        <img
          src="https://images.unsplash.com/photo-1512554225227-89e158d18198?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cyUyMHBhc3NlbmdlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Happy travelers"
        />
      </div>
      <div className="why-choose-us-content">
        <h3 className="subtitle">Why Choose Us</h3>
        <h1 className="title">
          We Are Experts In Bus Charter Service Company Since 1997
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Buses Ready</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2,640+</span>
            <span className="stat-label">Satisfied Customer</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2,836+</span>
            <span className="stat-label">Booking Done</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">75+</span>
            <span className="stat-label">Professional Team</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
