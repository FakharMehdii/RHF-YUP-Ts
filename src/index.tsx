import React from "react";
import ReactDOM from "react-dom/client";
import "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/index.css";
import App from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/App";

//ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
