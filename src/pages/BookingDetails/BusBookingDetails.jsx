import React from "react";
import "./BookingDetails.css";

const BusBookingPage = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Bus Booking Information</h1>
          <p className="card-subtitle">
            View and manage your bus booking details below.
          </p>
        </div>
        <div className="card-content">
          <ul className="booking-list">
            <BookingDetail icon="map-pin" label="From" value="New York" />
            <BookingDetail icon="map-pin" label="To" value="Washington D.C." />
            <BookingDetail icon="seat" label="Seat Number" value="23A" />
            <BookingDetail
              icon="clock"
              label="Departure Time"
              value="10:00 AM"
            />
            <BookingDetail icon="bus" label="Bus Number" value="BX123" />
          </ul>
        </div>
        <div className="card-footer">
          <button className="edit-button">
            <span className="edit-icon">✏️</span>
            Edit Booking
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingDetail = ({ icon, label, value }) => (
  <li className="booking-item">
    <div className="booking-label">
      <span className="booking-icon">{getIcon(icon)}</span>
      <span className="booking-label-text">{label}</span>
    </div>
    <span className="booking-value">{value}</span>
  </li>
);

const getIcon = (iconName) => {
  switch (iconName) {
    case "bus":
      return "🚌";
    case "map-pin":
      return "📍";
    case "clock":
      return "🕒";
    case "seat":
      return "💺";
    default:
      return "ℹ️";
  }
};

export default BusBookingPage;
