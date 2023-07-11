import "src/index.css";
import React from "react";
import ToDoApp from "src/App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>
);
