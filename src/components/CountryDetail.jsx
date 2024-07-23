// src/components/CountryDetail.jsx

import React, { useState, useEffect } from "react"; // Importa React y los hooks useState y useEffect
import { useParams, useNavigate } from "react-router-dom"; // Importa useParams para obtener parámetros de la URL y useNavigate para navegación
import { fetchCountries } from "../api"; // Importa la función fetchCountries para obtener datos de países desde la API
import "../components/styles/CountryDetail.css" // Importa el archivo CSS específico para estilos del componente

// Función auxiliar para obtener países desde el localStorage
const getLocalCountries = () => {
  const savedCountries = localStorage.getItem("countries"); // Obtiene los países guardados en localStorage
  return savedCountries ? JSON.parse(savedCountries) : []; // Si hay datos, los parsea de JSON a objeto; si no, retorna un array vacío
};

function CountryDetail() {
  const { id } = useParams(); // Obtiene el ID del país desde los parámetros de la URL
  const [country, setCountry] = useState(null); // Estado para almacenar la información del país seleccionado
  const navigate = useNavigate(); // Hook para la navegación programática

  // useEffect para cargar los detalles del país cuando el componente se monta o el ID cambia
  useEffect(() => {
    const loadCountry = async () => {
      const apiCountries = await fetchCountries(); // Obtiene la lista de países desde la API
      const localCountries = getLocalCountries(); // Obtiene la lista de países desde localStorage
      const allCountries = [...apiCountries, ...localCountries]; // Combina los países de la API y localStorage

      // Agrega console.log para depuración: muestra todos los países combinados
      console.log("All countries:", allCountries);
      
      const countryData = allCountries.find((country) => country.id === parseInt(id)); // Busca el país con el ID correspondiente
      
      // Agrega console.log para depuración: muestra el ID del país seleccionado y sus datos
      console.log("Selected country ID:", id);
      console.log("Selected country data:", countryData);

      setCountry(countryData); // Actualiza el estado con los datos del país seleccionado
    };
    loadCountry(); // Llama a la función para cargar el país
  }, [id]); // Dependencia en el ID para que se vuelva a ejecutar si el ID cambia

  // Muestra un mensaje de carga mientras se obtienen los datos del país
  if (!country) return <div>Loading...</div>; 

  // Renderiza los detalles del país una vez que se han cargado
  return (
    <div>
      <button onClick={() => navigate(-1)}>Ir hacia atrás</button>{" "} {/* Botón para volver a la página anterior */}
      <h1>{country.nombre}</h1> {/* Muestra el nombre del país */}
      <p>Capital: {country.capital}</p> {/* Muestra la capital del país */}
      <p>Población: {country.datos.poblacion}</p> {/* Muestra la población del país */}
      <p>Idioma: {country.datos.idioma}</p> {/* Muestra el idioma del país */}
      <p>Moneda: {country.datos.moneda}</p> {/* Muestra la moneda del país */}
    </div>
  );
}

export default CountryDetail;
