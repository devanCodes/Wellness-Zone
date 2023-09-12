import React from "react";
import ReactDOM from "react-dom/client"; // used for Rendering React components into the DOM
import App from "./App.jsx";
import "./index.css";

// creates a new root React element; takes an HTML element with the id "root" (see index.html file) as an argument; it is a div where the React app will be rendered
ReactDOM.createRoot(document.getElementById("root")).render(
  // a tool for highlighting potential problems in an app; helps identify unsafe practices and deprecated APIs during the development phase
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
