import React, { useState } from "react";
import "./BusBookingForm.css";

const BusBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    boardingPoint: "Kathmandu(07:30 PM)",
    dropPoint: "Lumbini",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="passenger-form">
        <h1>Passenger Details</h1>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNo">Contact No</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (Ticket will be sent on Email)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="boardingPoint">Boarding Point</label>
          <select
            id="boardingPoint"
            name="boardingPoint"
            value={formData.boardingPoint}
            onChange={handleChange}
            required
          >
            <option value="Kathmandu(07:30 PM)">Kathmandu(07:30 PM)</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dropPoint">Drop Point</label>
          <select
            id="dropPoint"
            name="dropPoint"
            value={formData.dropPoint}
            onChange={handleChange}
            required
          >
            <option value="Lumbini">Lumbini</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <button type="submit" className="submit-btn">
          NEXT
        </button>
      </form>
    </div>
  );
};

export default BusBookingForm;
