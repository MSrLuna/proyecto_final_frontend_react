// src/components/CountryList.jsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchCountries } from "../api";
import "../components/styles/CountryList.css"

// Día 3: Funciones auxiliares para manejar el localStorage
const getLocalCountries = () => {
  const savedCountries = localStorage.getItem("countries");
  return savedCountries ? JSON.parse(savedCountries) : [];
};

const saveLocalCountries = (countries) => {
  localStorage.setItem("countries", JSON.stringify(countries));
};

// Componente que muestra una lista de países con un campo de búsqueda
function CountryList() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCountry, setNewCountry] = useState({
    id: '',
    nombre: '',
    capital: '',
    datos: {
      poblacion: '',
      idioma: '',
      moneda: ''
    }
  }); // Día 3: Estado para manejar la creación de nuevos países
  const navigate = useNavigate(); // Hook para la navegación

  // Día 3: Cargar la lista de países cuando el componente se monta
  useEffect(() => {
    const loadCountries = async () => {
      const apiCountries = await fetchCountries(); // Día 3: Obtener países de la API
      const localCountries = getLocalCountries(); // Día 3: Obtener países del localStorage

      // Día 3: Combinar los países de la API y los del localStorage sin duplicados
      const allCountries = [
        ...apiCountries,
        ...localCountries.filter(
          (localCountry) => !apiCountries.some(apiCountry => apiCountry.id === localCountry.id)
        )
      ];

      setCountries(allCountries); // Día 3: Actualizar el estado con la lista combinada de países
    };
    loadCountries();
  }, []); // Dependencias vacías, se ejecuta solo una vez cuando el componente se monta

  // Filtrar países basados en el término de búsqueda
  const filteredCountries = countries.filter(
    (country) =>
      country.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Día 3: Manejar la creación de un nuevo país
  const handleAddCountry = () => {
    const newCountries = [...countries, { ...newCountry, id: Date.now() }];
    setCountries(newCountries);
    saveLocalCountries(newCountries);
    setNewCountry({
      id: '',
      nombre: '',
      capital: '',
      datos: {
        poblacion: '',
        idioma: '',
        moneda: ''
      }
    }); // Resetear el formulario
  };

  // Día 3: Manejar la eliminación de un país
  const handleDeleteCountry = (id) => {
    const newCountries = countries.filter((country) => country.id !== id);
    setCountries(newCountries);
    saveLocalCountries(newCountries);
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>Ir hacia atrás</button>{" "}
      {/* Botón para volver a la página de inicio */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar país"
      />

      {/* Día 3: Sección para añadir nuevos países */}
      <h2>Añadir Nuevo País</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={newCountry.nombre}
        onChange={(e) => setNewCountry({ ...newCountry, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Capital"
        value={newCountry.capital}
        onChange={(e) => setNewCountry({ ...newCountry, capital: e.target.value })}
      />
      <input
        type="text"
        placeholder="Población"
        value={newCountry.datos.poblacion}
        onChange={(e) => setNewCountry({
          ...newCountry,
          datos: { ...newCountry.datos, poblacion: e.target.value }
        })}
      />
      <input
        type="text"
        placeholder="Idioma"
        value={newCountry.datos.idioma}
        onChange={(e) => setNewCountry({
          ...newCountry,
          datos: { ...newCountry.datos, idioma: e.target.value }
        })}
      />
      <input
        type="text"
        placeholder="Moneda"
        value={newCountry.datos.moneda}
        onChange={(e) => setNewCountry({
          ...newCountry,
          datos: { ...newCountry.datos, moneda: e.target.value }
        })}
      />
      <button onClick={handleAddCountry}>Añadir País</button>

      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>
            <Link to={`/countries/${country.id}`}>{country.nombre}</Link>
            {/* Día 3: Añadido un enlace para editar países */}
            <Link to={`/countries/edit/${country.id}`} className="btn edit-btn">Editar</Link>
            <button onClick={() => handleDeleteCountry(country.id)} className="btn delete-button">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;

// Modificación Día 2:
// - Ajustado el filtrado de búsqueda para asegurar que el término de búsqueda se maneje de manera más eficiente.
// - Añadido un comentario explicativo sobre el filtrado y la búsqueda.
// - Añadido un botón "Ir hacia atrás" para permitir al usuario volver a la página de inicio.

// Modificación Día 3:
// - Añadida la funcionalidad para agregar un nuevo país con campos adicionales (población, idioma, moneda) y guardar los cambios en localStorage.
// - Añadida la funcionalidad para eliminar un país y actualizar localStorage.
// - Eliminación de duplicados entre países de la API y localStorage para una lista combinada sin repeticiones.
// - Añadido un enlace para editar países.
