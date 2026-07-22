import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";

document.documentElement.style.setProperty(
  "--hero-image",
  `url("${import.meta.env.BASE_URL}images/hero-research-workbench.png")`,
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
