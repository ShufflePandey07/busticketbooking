import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookingDetails from "./pages/BookingDetails/BusBookingDetails";
import BusBookingPage from "./pages/BookingPage/BusBookingPage";
import BusBookingForm from "./pages/BusBookingForm/BusBookingForm";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/bookingdetails" element={<BookingDetails />} />
          <Route path="/bookingpage" element={<BusBookingPage />} />
          <Route path="/bookingform" element={<BusBookingForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
