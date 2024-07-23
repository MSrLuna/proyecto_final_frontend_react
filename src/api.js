import axios from "axios"; // Importa la biblioteca axios para realizar solicitudes HTTP.

// Función para obtener la lista de países desde la API
export const fetchCountries = async () => { // Define una función asíncrona llamada fetchCountries.
  try { // Intenta ejecutar el bloque de código.
    const response = await axios.get("http://45.236.130.191/paises.php"); // Realiza una solicitud GET a la URL especificada y espera su respuesta.
    return response.data; // Devuelve los datos obtenidos de la respuesta de la API.
  } catch (error) { // Captura cualquier error que ocurra durante la solicitud.
    console.error("Error fetching countries:", error); // Muestra un mensaje de error en la consola.
    return []; // Devuelve un array vacío en caso de error.
  }
};

// Día 3: Funciones auxiliares para manejar el localStorage
export const getLocalCountries = () => { // Define una función para obtener la lista de países almacenados en localStorage.
  const savedCountries = localStorage.getItem("countries"); // Obtiene el valor asociado a la clave 'countries' desde localStorage.
  return savedCountries ? JSON.parse(savedCountries) : []; // Si hay datos guardados, los analiza como JSON y los devuelve. Si no, devuelve un array vacío.
};

export const saveLocalCountries = (countries) => { // Define una función para guardar una lista de países en localStorage.
  localStorage.setItem("countries", JSON.stringify(countries)); // Guarda los datos bajo la clave 'countries' en localStorage, convirtiéndolos a una cadena JSON.
};
