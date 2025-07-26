// client/src/Alerts.js
import React, { useState } from 'react';

function Alerts() {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Pranitha" })
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <button onClick={handleSubmit}>Send to Backend</button>
      <p>{message}</p>
    </div>
  );
}

export default Alerts;

