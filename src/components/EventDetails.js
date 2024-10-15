import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Adjust the path based on your folder structure
import "./EventDetails.css";

function EventDetails({ events }) {
  const { id } = useParams(); // Get event ID from URL parameters
  const navigate = useNavigate(); // For navigation
  const { handleLogout } = useContext(AuthContext); // Get handleLogout from context
  const event = events.find((event) => event.id === parseInt(id)); // Find event by ID

  // Function to handle logout
  const handleLogoutAndRedirect = () => {
    handleLogout(); // Call handleLogout to update the authentication state
    navigate("/"); // Redirect to the home page
  };

  // If the event is not found, display a message
  if (!event) return <p>Event not found.</p>;

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      <p>Price: ${event.price}</p>
      <p>Seats Available: {event.availableSeats}</p>

      {event.availableSeats > 0 ? (
        <button>Book Now</button>
      ) : (
        <p>This event is fully booked.</p>
      )}
      <p></p>
      {/* Logout Button */}
      <button
        onClick={handleLogoutAndRedirect}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default EventDetails;
