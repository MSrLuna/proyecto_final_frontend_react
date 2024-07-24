// src/components/Home.jsx

import React from "react"; // Importa la biblioteca React, que es necesaria para crear componentes React.
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom, que se utiliza para la navegación interna en la aplicación.
import "../components/styles/main.css"; // Importa el archivo CSS general para aplicar estilos a este componente.

// Componente de inicio con enlaces a otras secciones de la aplicación
function Home() {
  return (
    <div>
      <h1>Bienvenido a mi Página Web de Países y Capitales</h1>{" "}
      {/* Encabezado principal de la página */}
      <nav>
        <ul>
          <li>
            <Link to="/countries">Lista de Países</Link>{" "}
            {/* Enlace a la página de lista de países */}
          </li>
          <li>
            <Link to="/about">Acerca de</Link>{" "}
            {/* Enlace a la página de "Acerca de" */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home; // Exporta el componente Home para que pueda ser utilizado en otros archivos.
