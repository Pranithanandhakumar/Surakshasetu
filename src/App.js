import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to SurakshaSetu - Stay Safe</h1>

      {/* Your other components or SOS button here */}

      {/* Add Footer */}
      <footer style={footerStyle}>
        <p>© 2025 SurakshaSetu | Made for the people of Jammu & Kashmir</p>
      </footer>
    </div>
  );
}

const footerStyle = {
  backgroundColor: "#222",
  color: "#fff",
  textAlign: "center",
  padding: "1rem",
  position: "fixed",
  bottom: 0,
  width: "100%",
};

export default App;


