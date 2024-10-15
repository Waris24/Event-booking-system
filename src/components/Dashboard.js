import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure this line is included to import the CSS

function Dashboard() {
  const navigate = useNavigate();

  const handleBrowseEvents = () => {
    navigate("/events");
  };

  return (
    <div className="dashboard-container">
      <div className="welcome-banner">
        <h2>Welcome to the Event Booking Dashboard</h2>
        <p>Find and book the best events happening near you!</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Browse Events</h3>
          <p>Explore events happening in your area.</p>
          <button className="action-btn" onClick={handleBrowseEvents}>
            Explore
          </button>
        </div>
        <div className="feature-card">
          <h3>Recent Bookings</h3>
          <p>Check your recently booked events.</p>
          <button className="action-btn">View Bookings</button>
        </div>
        <div className="feature-card">
          <h3>Manage Account</h3>
          <p>Update your profile and account settings.</p>
          <button className="action-btn">Go to Account</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
