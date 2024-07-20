// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Componente de inicio con enlaces a otras secciones de la aplicación
function Home() {
  return (
    <div>
      <h1>Bienvenido a mi Página Web de Países y Capitales</h1>
      <nav>
        <ul>
          <li><Link to="/countries">Lista de Países</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

// Descripción:
// Link: Componente de navegación que permite crear enlaces dentro de la aplicación.
// Enlaces de navegación: Permite a los usuarios acceder a la lista de países y la página de información.