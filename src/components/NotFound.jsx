// src/components/NotFound.jsx

import React from 'react';

// Componente para manejar rutas no definidas (páginas 404)
function NotFound() {
  return (
    <div>
      <h1>404 - No Encontrado</h1>
      <p>La página que estás buscando no existe.</p>
      <br />
      <img 
        src="https://giphy.com/clips/ThisIsMashed-animation-gaming-cartoon-1hGu7ketlpuuWjwvMA" 
        alt="Not Found" 
        className="notfound-gif" 
      />
    </div>
  );
}

export default NotFound;

// Descripción:
// useNavigate: Permite manejar la navegación. En este caso, para redirigir al usuario a la página de inicio cuando la URL no se encuentra.
// Botón de retroceso: Permite regresar a la página principal de la aplicación.
// <h1> y <p>: Muestran un mensaje de error indicando que la página no fue encontrada.