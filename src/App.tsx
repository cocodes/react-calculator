import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="App">
      {numbers.map((val, key) => {
        return <div> {val}</div>;
      })}
    </div>
  );
}

export default App;
