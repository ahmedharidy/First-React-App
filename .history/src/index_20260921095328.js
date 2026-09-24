import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello react</h1>;
}

function Pizza() {
  return <h2>Pizza</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
