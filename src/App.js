import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import { AuthContext } from "./context/AuthContext";
import mockEvents from "./data/mockEvents.json";

function App() {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetch mock events on mount (simulating an API request)
  useEffect(() => {
    setEvents(mockEvents);
  }, []);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <AuthContext.Provider value={{ isAuthenticated, handleLogout }}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route path="/events" element={<EventList events={events} />} />
            <Route
              path="/event/:id"
              element={<EventDetails events={events} />}
            />
          </Routes>
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
