import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

function EventList({ events }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search input

  // Handle event click to navigate to event details page
  const handleEventClick = (id) => {
    navigate(`/event/${id}`);
  };

  // Filter events based on search input (case-insensitive)
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-list">
      <h2>Available Events</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by event title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* List of filtered events */}
      <ul>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>
                {event.category} - {event.date}
              </p>
              <p>Seats Available: {event.availableSeats}</p>
              {event.availableSeats > 0 ? (
                <button onClick={() => handleEventClick(event.id)}>
                  Book Ticket
                </button>
              ) : (
                <p>This event is fully booked.</p>
              )}
            </li>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </ul>
    </div>
  );
}

export default EventList;
