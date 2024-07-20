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

// Descripción:
// useState: Permite crear variables que guardan el estado (datos que cambian) dentro del componente.
// useEffect: Permite ejecutar código cuando el componente se monta o actualiza, como cargar datos de una API.
// fetchCountries: Función para obtener la lista de países desde un servidor.
// navigate(-1): Permite volver a la página anterior.
// Campo de búsqueda: Permite filtrar la lista de países según lo que escribas.