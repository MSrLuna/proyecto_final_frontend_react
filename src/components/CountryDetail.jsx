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
      <h1>{country.nombre}</h1>
      <p>Capital: {country.capital}</p>
      <p>Población: {country.datos.poblacion}</p>
      <p>Idioma: {country.datos.idioma}</p>
      <p>Moneda: {country.datos.moneda}</p>
    </div>
  );
}

export default CountryDetail;

// Descripción:
// useParams: Permite acceder a los parámetros de la URL, como el ID del país.
// useNavigate: Permite manejar la navegación hacia atrás.
// setCountry: Actualiza el estado con los detalles del país seleccionado.
// Condición de carga: Muestra un mensaje de "Cargando..." mientras se obtienen los datos del país.