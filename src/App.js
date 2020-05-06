import React from "react";
import "./App.css";
import LogiqueModale from "./LogiqueModale.jsx";
import Modale from "./Modale.jsx";

function App() {
  const { revele, toggle } = LogiqueModale();
  return (
    <div className="App">
      <button className="button" onClick={toggle}>
        About Us
      </button>
      <Modale revele={revele} cache={toggle} />
    </div>
  );
}

export default App;
