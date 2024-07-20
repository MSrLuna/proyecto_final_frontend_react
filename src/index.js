// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Crear el punto de entrada de la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar el componente principal 'App' en el elemento con id 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Descripción:
// import React from 'react';: Importa React, que es una biblioteca que ayuda a construir la interfaz de usuario.
// import ReactDOM from 'react-dom/client';: Importa ReactDOM, que conecta React con el HTML de la página.
// import './index.css';: Importa el archivo CSS para aplicar estilos (colores, fuentes, etc.) a la aplicación.
// const root = ReactDOM.createRoot(document.getElementById('root'));: Crea un lugar en la página web con el id root donde se mostrará la aplicación.
// root.render(<React.StrictMode><App /></React.StrictMode>);: Muestra el componente App en el lugar creado. React.StrictMode ayuda a identificar problemas en el código mientras desarrollas.