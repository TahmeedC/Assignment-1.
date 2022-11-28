import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const numbers = [10, 11, 12, 13, 14];

  return (
    <>
      {numbers.map((item, i) => (
        <div className="box" key={uuidv4()}>
          <h2>Item {i}</h2>
          <div>{item}</div>
        </div>
      ))}
    </>
  );
}

export default App;
