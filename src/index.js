// src/index.js

import React from "react"; // Importa la biblioteca React, que es necesaria para utilizar JSX y crear componentes de React.
import ReactDOM from "react-dom/client"; // Importa el módulo ReactDOM para interactuar con el DOM y renderizar componentes React.
import App from "./App"; // Importa el componente principal de la aplicación, App, desde el archivo App.jsx.

// Crear el punto de entrada de la aplicación React
const root = ReactDOM.createRoot(document.getElementById("root")); 
// Utiliza ReactDOM para crear un nodo raíz en el elemento del DOM con id "root". 
// Este nodo raíz es donde se montará toda la aplicación React.

// Renderizar el componente principal 'App' en el elemento con id 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
