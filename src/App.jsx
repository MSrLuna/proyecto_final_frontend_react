// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import About from './components/About';
import NotFound from './components/NotFound';

// Componente principal que maneja la navegación de la aplicación
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/countries/:id" element={<CountryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Descripción:
// import React from 'react';: Importa React.
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';: Importa herramientas para manejar la navegación en la aplicación.
// function App() { ... }: Define el componente principal que organiza qué componentes mostrar según la URL.
// <Router>: Permite la navegación entre diferentes páginas dentro de la aplicación.
// <Routes>: Define las rutas (direcciones web) disponibles.
// <Route path="/" element={<Home />} />: Muestra el componente Home cuando la URL es /.
// <Route path="/countries" element={<CountryList />} />: Muestra la lista de países cuando la URL es /countries.
// <Route path="/countries/:id" element={<CountryDetail />} />: Muestra los detalles de un país específico según el ID en la URL.
// <Route path="/about" element={<About />} />: Muestra la página "Acerca de" cuando la URL es /about.
// <Route path="*" element={<NotFound />} />: Muestra una página de error 404 para URLs que no están definidas.