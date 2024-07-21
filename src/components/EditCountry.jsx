// src/components/EditCountry.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCountries, getLocalCountries, saveLocalCountries } from "../api"; // Día 3: Corrección de importaciones
import "../components/styles/main.css"; // Importar CSS general
import "../components/styles/EditCountry.css"

// Componente para editar un país existente
function EditCountry() {
  const { id } = useParams(); // Obtener el ID del país desde la URL
  const [country, setCountry] = useState(null);
  const [editCountry, setEditCountry] = useState({ nombre: '', capital: '', datos: { poblacion: '', idioma: '', moneda: '' } }); // Día 3: Estado para editar país
  const navigate = useNavigate(); // Hook para la navegación

  // Cargar los detalles del país cuando el componente se monta o el ID cambia
  useEffect(() => {
    const loadCountry = async () => {
      const apiCountries = await fetchCountries();
      const localCountries = getLocalCountries(); // Día 3: Corrección de obtener países locales
      const allCountries = [...apiCountries, ...localCountries]; // Combina países de la API y locales

      const countryData = allCountries.find((country) => country.id === parseInt(id));
      setCountry(countryData);
      if (countryData) {
        setEditCountry(countryData);
      }
    };
    loadCountry();
  }, [id]);

  // Día 3: Manejar la actualización del país
  const handleUpdateCountry = async () => { // Día 3: Marcado como 'async'
    const apiCountries = await fetchCountries(); // Re-obtener países de la API para evitar desincronización
    const localCountries = getLocalCountries(); // Obtener países locales
    const updatedCountries = localCountries.map((c) =>
      c.id === parseInt(id) ? { ...editCountry, id: parseInt(id) } : c
    );
    saveLocalCountries(updatedCountries);
    navigate(`/countries/${id}`); // Redirigir a la vista de detalles del país
  };

  if (!country) return <div>Loading...</div>; // Mostrar "Cargando..." mientras se obtienen los datos

  return (
    <div>
      <button onClick={() => navigate(-1)}>Ir hacia atrás</button> {/* Botón para volver a la página anterior */}
      <h1>Editar País</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={editCountry.nombre}
        onChange={(e) => setEditCountry({ ...editCountry, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Capital"
        value={editCountry.capital}
        onChange={(e) => setEditCountry({ ...editCountry, capital: e.target.value })}
      />
      <input
        type="text"
        placeholder="Población"
        value={editCountry.datos.poblacion}
        onChange={(e) => setEditCountry({ ...editCountry, datos: { ...editCountry.datos, poblacion: e.target.value } })}
      />
      <input
        type="text"
        placeholder="Idioma"
        value={editCountry.datos.idioma}
        onChange={(e) => setEditCountry({ ...editCountry, datos: { ...editCountry.datos, idioma: e.target.value } })}
      />
      <input
        type="text"
        placeholder="Moneda"
        value={editCountry.datos.moneda}
        onChange={(e) => setEditCountry({ ...editCountry, datos: { ...editCountry.datos, moneda: e.target.value } })}
      />
      <button onClick={handleUpdateCountry}>Actualizar País</button> {/* Botón para guardar los cambios */}
    </div>
  );
}

export default EditCountry;
    