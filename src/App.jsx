// src/App.jsx

import React from "react"; // Importa la biblioteca React.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa componentes necesarios de react-router-dom para la navegación.

import Home from "./components/Home"; // Importa el componente Home.
import CountryList from "./components/CountryList"; // Importa el componente CountryList.
import CountryDetail from "./components/CountryDetail"; // Importa el componente CountryDetail.
import About from "./components/About"; // Importa el componente About.
import NotFound from "./components/NotFound"; // Importa el componente NotFound.
import EditCountry from "./components/EditCountry"; // Importa el componente EditCountry.

// Componente principal que maneja la navegación de la aplicación
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal que carga el componente Home */}
          <Route path="/" element={<Home />} />

          {/* Ruta para la lista de países */}
          <Route path="/countries" element={<CountryList />} />

          {/* Ruta para ver detalles de un país específico por ID */}
          <Route path="/countries/:id" element={<CountryDetail />} />

          {/* Ruta para la página de "Acerca de" */}
          <Route path="/about" element={<About />} />

          {/* Ruta para la edición de un país específico por ID */}
          <Route path="/countries/edit/:id" element={<EditCountry />} />

          {/* Ruta para manejar páginas no encontradas (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
