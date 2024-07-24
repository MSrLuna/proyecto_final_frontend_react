// src/components/CountryList.jsx

import React, { useState, useEffect } from "react"; // Importa React, y los hooks useState y useEffect
import { Link, useNavigate } from "react-router-dom"; // Importa Link y useNavigate para navegación
import { fetchCountries } from "../api"; // Importa la función fetchCountries para obtener países desde la API
import "../components/styles/CountryList.css"; // Importa el archivo CSS específico para estilos del componente

// Función auxiliar para obtener países desde el localStorage
const getLocalCountries = () => {
  const savedCountries = localStorage.getItem("countries"); // Obtiene los países guardados en localStorage
  return savedCountries ? JSON.parse(savedCountries) : []; // Si hay datos, los parsea de JSON a objeto; si no, retorna un array vacío
};

// Función auxiliar para guardar países en el localStorage
const saveLocalCountries = (countries) => {
  localStorage.setItem("countries", JSON.stringify(countries)); // Guarda los países en localStorage, convirtiéndolos a JSON
};

// Componente que muestra una lista de países con un campo de búsqueda
function CountryList() {
  const [countries, setCountries] = useState([]); // Estado para manejar la lista de países
  const [searchTerm, setSearchTerm] = useState(""); // Estado para manejar el término de búsqueda
  const [newCountry, setNewCountry] = useState({
    // Estado para manejar la información del nuevo país
    id: "",
    nombre: "",
    capital: "",
    datos: {
      poblacion: "",
      idioma: "",
      moneda: "",
    },
  });
  const navigate = useNavigate(); // Hook para navegación programática

  // useEffect para cargar los países cuando el componente se monta
  useEffect(() => {
    const loadCountries = async () => {
      const apiCountries = await fetchCountries(); // Obtiene los países desde la API
      const localCountries = getLocalCountries(); // Obtiene los países desde localStorage

      // Combina los países de la API y localStorage, eliminando duplicados
      const allCountries = [
        ...apiCountries,
        ...localCountries.filter(
          (localCountry) =>
            !apiCountries.some(
              (apiCountry) => apiCountry.id === localCountry.id
            )
        ),
      ];

      setCountries(allCountries); // Actualiza el estado con la lista combinada de países
    };
    loadCountries(); // Llama a la función para cargar los países
  }, []); // Dependencias vacías, se ejecuta solo una vez cuando el componente se monta

  // Filtra los países basados en el término de búsqueda
  const filteredCountries = countries.filter(
    (country) =>
      country.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || // Compara el nombre del país
      country.capital.toLowerCase().includes(searchTerm.toLowerCase()) // Compara la capital del país
  );

  // Función para manejar la adición de un nuevo país
  const handleAddCountry = () => {
    const newCountries = [...countries, { ...newCountry, id: Date.now() }]; // Crea un nuevo país con un id único
    setCountries(newCountries); // Actualiza el estado con la nueva lista de países
    saveLocalCountries(newCountries); // Guarda la lista actualizada en localStorage
    setNewCountry({
      // Resetea el formulario de nuevo país
      id: "",
      nombre: "",
      capital: "",
      datos: {
        poblacion: "",
        idioma: "",
        moneda: "",
      },
    });
  };

  // Función para manejar la eliminación de un país
  const handleDeleteCountry = (id) => {
    const newCountries = countries.filter((country) => country.id !== id); // Filtra el país a eliminar
    setCountries(newCountries); // Actualiza el estado con la lista filtrada
    saveLocalCountries(newCountries); // Guarda la lista actualizada en localStorage
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>Ir hacia atrás</button>{" "}
      {/* Botón para navegar a la página de inicio */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar país"
      />
      <h2>Añadir Nuevo País</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={newCountry.nombre}
        onChange={(e) =>
          setNewCountry({ ...newCountry, nombre: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Capital"
        value={newCountry.capital}
        onChange={(e) =>
          setNewCountry({ ...newCountry, capital: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Población"
        value={newCountry.datos.poblacion}
        onChange={(e) =>
          setNewCountry({
            ...newCountry,
            datos: { ...newCountry.datos, poblacion: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Idioma"
        value={newCountry.datos.idioma}
        onChange={(e) =>
          setNewCountry({
            ...newCountry,
            datos: { ...newCountry.datos, idioma: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Moneda"
        value={newCountry.datos.moneda}
        onChange={(e) =>
          setNewCountry({
            ...newCountry,
            datos: { ...newCountry.datos, moneda: e.target.value },
          })
        }
      />
      <button onClick={handleAddCountry}>Añadir País</button>
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>
            <Link to={`/countries/${country.id}`}>{country.nombre}</Link>{" "}
            {/* Enlace para ver detalles del país */}
            <Link to={`/countries/edit/${country.id}`} className="btn edit-btn">
              Editar
            </Link>{" "}
            {/* Enlace para editar el país */}
            <button
              onClick={() => handleDeleteCountry(country.id)}
              className="btn delete-button"
            >
              Eliminar
            </button>{" "}
            {/* Botón para eliminar el país */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
