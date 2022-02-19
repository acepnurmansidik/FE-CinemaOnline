import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// CSS Custome
import "./style/root.css";
import "./style/navbar.css";
import "./style/landing-page.css";
import "./style/detail-film.css";
import "./style/list-film.css";
import "./style/my-profile.css";
import "./style/create-film.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
