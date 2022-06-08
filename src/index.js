import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import Student from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Student/>
  </React.StrictMode>
);
// ReactDOM.render(<Student/>,document.getElementById('root'));
// reportWebVitals();