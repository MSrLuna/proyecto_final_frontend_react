// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Crear el punto de entrada de la aplicación React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizar el componente principal 'App' en el elemento con id 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
