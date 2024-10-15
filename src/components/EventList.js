import React from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

function EventList({ events }) {
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="event-list">
      <h2>Available Events</h2>
      <ul>
        {events.map((event) => (
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
        ))}
      </ul>
    </div>
  );
}

export default EventList;
