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

// Descripción:
// import axios from 'axios';: Importa la biblioteca axios, que facilita hacer solicitudes a servidores para obtener datos.
// fetchCountries: Es una función que obtiene la lista de países desde una API.
// await axios.get('http://45.236.130.191/paises.php');: Envía una solicitud al servidor para obtener datos. await se usa para esperar a que la solicitud se complete.
// response.data: Los datos que obtenemos de la API.
// catch (error): Maneja errores si algo sale mal durante la solicitud.