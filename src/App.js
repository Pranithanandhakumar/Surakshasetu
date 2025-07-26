
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse("Error connecting to server.");
    }
  };

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>React to Flask App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Send to Flask</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default App;
