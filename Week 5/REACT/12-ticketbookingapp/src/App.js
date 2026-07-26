import { useState } from 'react';
import './App.css';

const flightDetails = [
  {
    flightNumber: 'FL-101',
    source: 'New York',
    destination: 'Los Angeles',
    departureTime: '08:00 AM',
    arrivalTime: '11:30 AM',
    ticketPrice: '$220',
  },
  {
    flightNumber: 'FL-202',
    source: 'Chicago',
    destination: 'Seattle',
    departureTime: '01:30 PM',
    arrivalTime: '05:00 PM',
    ticketPrice: '$180',
  },
];

function FlightDetails({ details }) {
  return (
    <div className="flight-card">
      <h3>Flight {details.flightNumber}</h3>
      <p>
        <strong>Route:</strong> {details.source} → {details.destination}
      </p>
      <p>
        <strong>Departure:</strong> {details.departureTime}
      </p>
      <p>
        <strong>Arrival:</strong> {details.arrivalTime}
      </p>
      <p>
        <strong>Ticket Price:</strong> {details.ticketPrice}
      </p>
    </div>
  );
}

function GuestPage({ onLogin }) {
  return (
    <div className="page-card">
      <h2>Guest Page</h2>
      <p>Browse flights,login to book tickets.</p>
      <div className="flight-list">
        {flightDetails.map((flight) => (
          <FlightDetails key={flight.flightNumber} details={flight} />
        ))}
      </div>
      <button className="action-button" onClick={onLogin}>
        Login
      </button>
    </div>
  );
}

function UserPage({ onLogout }) {
  return (
    <div className="page-card">
      <h2>User Page</h2>
      <p>Welcome! Logged-in users can book tickets.</p>
      <div className="flight-list">
        {flightDetails.map((flight) => (
          <FlightDetails key={flight.flightNumber} details={flight} />
        ))}
      </div>
      <div className="button-row">
        <button className="action-button primary">Book Ticket</button>
        <button className="action-button secondary" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-shell">
      <div className="app-card">
        <h1>Ticket Booking App</h1>
        {isLoggedIn ? (
          <UserPage onLogout={() => setIsLoggedIn(false)} />
        ) : (
          <GuestPage onLogin={() => setIsLoggedIn(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
