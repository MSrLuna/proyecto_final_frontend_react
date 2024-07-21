// src/api.js

import axios from "axios";

// Función para obtener la lista de países desde la API
export const fetchCountries = async () => {
  try {
    const response = await axios.get("http://45.236.130.191/paises.php");
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

// Día 3: Funciones auxiliares para manejar el localStorage
export const getLocalCountries = () => {
  const savedCountries = localStorage.getItem("countries");
  return savedCountries ? JSON.parse(savedCountries) : [];
};

export const saveLocalCountries = (countries) => {
  localStorage.setItem("countries", JSON.stringify(countries));
};
