import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://127.0.0.1:5000/replace', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div className="app-container">
      <header>
        <h1>SurakshaSetu</h1>
      </header>

      <main>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        {response && <p className="response">{response}</p>}
      </main>

      <button className="sos-btn">SOS</button>

      <footer>
        <p>© 2025 SurakshaSetu</p>
      </footer>
    </div>
  );
}

export default App;

