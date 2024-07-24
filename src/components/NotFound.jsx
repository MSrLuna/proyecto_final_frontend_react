// src/components/NotFound.jsx

import React from "react"; // Importa React para crear el componente
import "../components/styles/main.css"; // Importa el CSS general para estilos globales
import "../components/styles/NotFound.css"; // Importa el CSS específico para el componente NotFound

// Componente para manejar rutas no definidas (páginas 404)
function NotFound() {
  return (
    <div>
      <h1>404 - No Encontrado</h1>{" "}
      {/* Título que indica que la página no fue encontrada */}
      <p>La página que estás buscando no existe.</p>{" "}
      {/* Mensaje informativo para el usuario */}
      <br />{" "}
      {/* Salto de línea para separar el mensaje del contenido siguiente */}
      <img
        src="https://giphy.com/clips/ThisIsMashed-animation-gaming-cartoon-1hGu7ketlpuuWjwvMA" // URL de la imagen GIF que se muestra
        alt="Not Found" // Texto alternativo para la imagen, usado si la imagen no se puede cargar
        className="notfound-gif" // Clase CSS para aplicar estilos específicos a la imagen
      />
    </div>
  );
}

export default NotFound; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
