// src/api.js

import axios from 'axios';

// Función para obtener la lista de países desde la API
export const fetchCountries = async () => {
  try {
    const response = await axios.get('http://45.236.130.191/paises.php');
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};

