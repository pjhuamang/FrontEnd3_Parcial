import React, { useState } from "react";
import Card from "./Card";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length < 3 || name.trim().startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
    } else if (color.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingresa tu color favorito (formato HEX)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">ENVIAR</button>
      </form>
      {error && <p>{error}</p>}
      {submitted && <Card name={name} color={color} />}
    </div>
  );
}

export default App;
