// src/components/CountryList.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCountries } from '../api';

// Componente que muestra una lista de países con un campo de búsqueda
function CountryList() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  // Cargar la lista de países cuando el componente se monta
  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    loadCountries();
  }, []);

  // Filtrar países basados en el término de búsqueda
  const filteredCountries = countries.filter(country =>
    country.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.capital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button onClick={() => navigate('/')}>Ir hacia atrás</button> {/* Botón para volver a la página de inicio */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar país"
      />
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>
            <Link to={`/countries/${country.id}`}>{country.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;

// Modificación Día 2: 
// - Ajustado el filtrado de búsqueda para asegurar que el término de búsqueda se maneje de manera más eficiente.
// - Añadido un comentario explicativo sobre el filtrado y la búsqueda.
// - Añadido un botón "Ir hacia atrás" para permitir al usuario volver a la página de inicio.
