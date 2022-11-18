import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import DataProvider from "./redux/store";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
// "https://ly7sie.deta.dev/";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
