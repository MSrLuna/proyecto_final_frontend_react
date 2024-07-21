// src/components/CountryDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCountries } from '../api';

// Componente que muestra los detalles de un país seleccionado
function CountryDetail() {
  const { id } = useParams(); // Obtener el ID del país desde la URL
  const [country, setCountry] = useState(null);
  const navigate = useNavigate(); // Hook para la navegación

  // Cargar los detalles del país cuando el componente se monta o el ID cambia
  useEffect(() => {
    const loadCountry = async () => {
      const data = await fetchCountries();
      const countryData = data.find(country => country.id === parseInt(id));
      setCountry(countryData);
    };
    loadCountry();
  }, [id]);

  if (!country) return <div>Loading...</div>; // Mostrar "Cargando..." mientras se obtienen los datos

  return (
    <div>
      <button onClick={() => navigate(-1)}>Ir hacia atrás</button> {/* Botón para volver a la página anterior */}
      <h1>{country.nombre}</h1>
      <p>Capital: {country.capital}</p>
      <p>Población: {country.datos.poblacion}</p>
      <p>Idioma: {country.datos.idioma}</p>
      <p>Moneda: {country.datos.moneda}</p>
    </div>
  );
}

export default CountryDetail;

// Modificación Día 2: 
// - Verificado el uso de useParams y useEffect para manejar correctamente los detalles del país.
// - Añadido un comentario explicativo sobre la carga y visualización de los detalles del país.
// - Añadido un botón "Ir hacia atrás" para permitir al usuario volver a la página anterior.
