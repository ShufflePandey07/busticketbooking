import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-shuttle-container">
      <div className="about-shuttle-content">
        <h3 className="subtitle">About Shuttle</h3>
        <h1 className="title">
          More Than 25 Years We Provide Bus Charter Service For You
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi
        </p>
        <ul className="features-list">
          <li>Brilliant Client Service</li>
          <li>24/7 Support</li>
          <li>Free Consultations</li>
          <li>User Experience</li>
        </ul>
      </div>
      <div className="about-shuttle-images">
        <img
          src="https://www.q4solutions.com/wp-content/uploads/2020/09/get-right-people-on-bus.jpg"
          alt="Person boarding a bus"
          className="main-image"
        />
      </div>
    </div>
  );
};

export default AboutUs;
