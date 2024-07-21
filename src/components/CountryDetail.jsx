// src/components/CountryDetail.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCountries } from "../api";
import "../components/styles/CountryDetail.css"

// Día 3: Funciones auxiliares para manejar el localStorage
const getLocalCountries = () => {
  const savedCountries = localStorage.getItem("countries");
  return savedCountries ? JSON.parse(savedCountries) : [];
};

function CountryDetail() {
  const { id } = useParams(); // Obtener el ID del país desde la URL
  const [country, setCountry] = useState(null);
  const navigate = useNavigate(); // Hook para la navegación

  // Cargar los detalles del país cuando el componente se monta o el ID cambia
  useEffect(() => {
    const loadCountry = async () => {
      const apiCountries = await fetchCountries();
      const localCountries = getLocalCountries();
      const allCountries = [...apiCountries, ...localCountries]; // Día 3: Modificado para mayor claridad

      // Día 3: Agregar console.log para depuración
      console.log("All countries:", allCountries);
      
      const countryData = allCountries.find((country) => country.id === parseInt(id));
      
      // Día 3: Agregar console.log para depuración
      console.log("Selected country ID:", id);
      console.log("Selected country data:", countryData);

      setCountry(countryData);
    };
    loadCountry();
  }, [id]);

  if (!country) return <div>Loading...</div>; // Mostrar "Cargando..." mientras se obtienen los datos

  return (
    <div>
      <button onClick={() => navigate(-1)}>Ir hacia atrás</button>{" "}
      {/* Botón para volver a la página anterior */}
      <h1>{country.nombre}</h1>
      <p>Capital: {country.capital}</p>
      <p>Población: {country.datos.poblacion}</p>
      <p>Idioma: {country.datos.idioma}</p>
      <p>Moneda: {country.datos.moneda}</p>
    </div>
  );
}

export default CountryDetail;
