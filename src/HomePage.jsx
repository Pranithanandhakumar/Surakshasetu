import React, { useState } from 'react';

function HomePage() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setResponse(data.message);
  };

  const handleSOS = () => {
    alert("🚨 SOS Alert Sent! Help is on the way.");
    // Later: Send SOS to Flask backend or external service
  };

  return (
    <div style={{
      background: "linear-gradient(to bottom right, #f0f4f8, #dceefb)",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "Segoe UI, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1 style={{ color: "#1a3c40", fontSize: "2.5rem", marginBottom: "0.5rem" }}>🛡 SurakshaSetu</h1>
      <p style={{ marginBottom: "2rem", color: "#444" }}>Support system for civilians in Jammu & Kashmir</p>

      <form onSubmit={handleSubmit} style={{ textAlign: "center", marginBottom: "2rem" }}>
        <label style={{ fontSize: "1.2rem" }}>Your Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            padding: "0.7rem",
            margin: "1rem 0",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
        <br />
        <button type="submit" style={{
          padding: "0.7rem 1.5rem",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          marginRight: "1rem"
        }}>
          Get Support Message
        </button>

        <button type="button" onClick={handleSOS} style={{
          padding: "0.7rem 1.5rem",
          backgroundColor: "#d32f2f",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem"
        }}>
          🚨 SOS
        </button>
      </form>

      {response && (
        <div style={{
          marginTop: "1rem",
          backgroundColor: "#e8f5e9",
          padding: "1rem 2rem",
          borderRadius: "8px",
          border: "1px solid #c8e6c9"
        }}>
          <strong>Message:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default HomePage;

