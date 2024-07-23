// src/components/EditCountry.jsx

import React, { useState, useEffect } from "react"; // Importa React y los hooks useState y useEffect
import { useParams, useNavigate } from "react-router-dom"; // Importa useParams para obtener parámetros de la URL y useNavigate para navegación
import { fetchCountries, getLocalCountries, saveLocalCountries } from "../api"; // Importa funciones para manejar datos de países
import "../components/styles/main.css"; // Importa el CSS general
import "../components/styles/EditCountry.css"; // Importa el CSS específico para el componente EditCountry

// Componente para editar un país existente
function EditCountry() {
  const { id } = useParams(); // Obtiene el ID del país desde los parámetros de la URL
  const [country, setCountry] = useState(null); // Estado para almacenar los datos del país cargado
  const [editCountry, setEditCountry] = useState({ 
    nombre: '', 
    capital: '', 
    datos: { poblacion: '', idioma: '', moneda: '' } 
  }); // Estado para almacenar los datos del país que se está editando
  const navigate = useNavigate(); // Hook para la navegación programática

  // Efecto para cargar los detalles del país cuando el componente se monta o el ID cambia
  useEffect(() => {
    // Función asíncrona para cargar los datos del país
    const loadCountry = async () => {
      const apiCountries = await fetchCountries(); // Obtiene los países desde la API
      const localCountries = getLocalCountries(); // Obtiene los países almacenados localmente
      const allCountries = [...apiCountries, ...localCountries]; // Combina los países de la API y los locales

      const countryData = allCountries.find((country) => country.id === parseInt(id)); // Busca el país correspondiente al ID en la lista combinada
      setCountry(countryData); // Actualiza el estado con los datos del país encontrado
      if (countryData) {
        setEditCountry(countryData); // Si se encuentra el país, establece el estado para edición
      }
    };
    loadCountry(); // Llama a la función para cargar los datos del país
  }, [id]); // Dependencia en el ID para volver a cargar los datos si cambia

  // Función asíncrona para manejar la actualización del país
  const handleUpdateCountry = async () => {
    const apiCountries = await fetchCountries(); // Vuelve a obtener los países de la API
    const localCountries = getLocalCountries(); // Obtiene los países locales
    const updatedCountries = localCountries.map((c) =>
      c.id === parseInt(id) ? { ...editCountry, id: parseInt(id) } : c // Actualiza el país editado en la lista de países locales
    );
    saveLocalCountries(updatedCountries); // Guarda la lista actualizada de países locales
    navigate(`/countries/${id}`); // Redirige a la vista de detalles del país editado
  };

  // Muestra un mensaje de carga mientras se obtienen los datos
  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Ir hacia atrás</button> {/* Botón para volver a la página anterior */}
      <h1>Editar País</h1>
      {/* Campo de entrada para editar el nombre del país */}
      <input
        type="text"
        placeholder="Nombre"
        value={editCountry.nombre}
        onChange={(e) => setEditCountry({ ...editCountry, nombre: e.target.value })}
      />
      {/* Campo de entrada para editar la capital del país */}
      <input
        type="text"
        placeholder="Capital"
        value={editCountry.capital}
        onChange={(e) => setEditCountry({ ...editCountry, capital: e.target.value })}
      />
      {/* Campo de entrada para editar la población del país */}
      <input
        type="text"
        placeholder="Población"
        value={editCountry.datos.poblacion}
        onChange={(e) => setEditCountry({ ...editCountry, datos: { ...editCountry.datos, poblacion: e.target.value } })}
      />
      {/* Campo de entrada para editar el idioma del país */}
      <input
        type="text"
        placeholder="Idioma"
        value={editCountry.datos.idioma}
        onChange={(e) => setEditCountry({ ...editCountry, datos: { ...editCountry.datos, idioma: e.target.value } })}
      />
      {/* Campo de entrada para editar la moneda del país */}
      <input
        type="text"
        placeholder="Moneda"
        value={editCountry.datos.moneda}
        onChange={(e) => setEditCountry({ ...editCountry, datos: { ...editCountry.datos, moneda: e.target.value } })}
      />
      {/* Botón para guardar los cambios realizados en el país */}
      <button onClick={handleUpdateCountry}>Actualizar País</button>
    </div>
  );
}

export default EditCountry; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
