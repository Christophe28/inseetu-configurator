import react from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/style.scss";
import App from "./app";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);