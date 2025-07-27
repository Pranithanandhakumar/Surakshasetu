import React, { useState } from 'react';

function HomePage() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [sosAlert, setSosAlert] = useState(false);

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

  const handleSos = () => {
    setSosAlert(true);
    alert("🚨 SOS Triggered! Help will reach you soon.");
    // Here you can also make a POST request to backend for SOS
  };

  return (
    <div style={{ 
      background: "#f0f4f8", 
      padding: "2rem", 
      fontFamily: "sans-serif",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#1a3c40", fontSize: "2.5rem" }}>🛡 SurakshaSetu</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        A Support System for Civilians in Jammu & Kashmir
      </p>

      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: "1rem" }}>Your Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            padding: "0.7rem",
            margin: "1rem 0",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <button type="submit" style={{
          padding: "0.7rem 1.2rem",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Get Support Message
        </button>
      </form>

      {response && (
        <div style={{ 
          marginTop: "2rem", 
          backgroundColor: "#e8f5e9", 
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #4caf50"
        }}>
          <strong>Message:</strong> {response}
        </div>
      )}

      <hr style={{ margin: "3rem 0" }} />

      <button onClick={handleSos} style={{
        padding: "1rem 2rem",
        backgroundColor: "#d32f2f",
        color: "#fff",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer"
      }}>
        🚨 SOS
      </button>

      {sosAlert && (
        <div style={{ 
          marginTop: "1rem", 
          color: "#d32f2f", 
          fontWeight: "bold" 
        }}>
          Emergency alert sent!
        </div>
      )}
    </div>
  );
}

export default HomePage;


