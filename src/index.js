import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// CSS Custome
import "./style/root.css";
import "./style/navbar.css";
import "./style/landing-page.css";
import "./style/detail-film.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
