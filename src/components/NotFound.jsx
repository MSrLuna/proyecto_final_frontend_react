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

