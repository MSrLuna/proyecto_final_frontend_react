import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>Acerca del Proyecto</h1>
      <p>A continuación, presento un resumen detallado del progreso realizado en el desarrollo del proyecto, siguiendo los requisitos establecidos y las tareas realizadas cada día, junto con la ubicación de los archivos correspondientes:</p>
      
      <h2>Día 1: Configuración, Estructura Inicial, Funcionalidades CRUD, Sistema de Búsqueda y Gestión de Datos Locales</h2>
      <ul>
        <li><strong>Configuración del Entorno</strong>: Se creó la estructura inicial del proyecto utilizando Create React App. El archivo principal de entrada es <code>src/index.js</code>.</li>
        <li><strong>Repositorio en GitHub</strong>: Se configuró el repositorio en GitHub y se realizó el primer commit con la estructura inicial del proyecto.</li>
        <li><strong>Elección del Tema</strong>: Se eligió el tema de "Países y Capitales" para el proyecto. Esta elección está documentada en el archivo Excel del repositorio.</li>
        <li><strong>Navegación</strong>: Se implementó la navegación entre diferentes vistas utilizando <code>react-router</code>. Las vistas implementadas son:
          <ul>
            <li><strong>Home</strong>: Mostrada en <code>src/components/Home.jsx</code></li>
            <li><strong>Country List</strong>: Mostrada en <code>src/components/CountryList.jsx</code></li>
            <li><strong>Country Detail</strong>: Mostrada en <code>src/components/CountryDetail.jsx</code></li>
            <li><strong>About</strong>: Mostrada en <code>src/components/About.jsx</code></li>
          </ul>
        </li>
        <li><strong>Configuración de API</strong>: Se configuraron las llamadas a la API usando <code>fetch</code> en <code>src/api.js</code> para obtener los datos iniciales de los países y sus capitales.</li>
      </ul>
      <ul>
        <li><strong>Operaciones CRUD</strong>: Se implementaron las funcionalidades de Crear, Leer, Actualizar y Eliminar utilizando <code>useState</code> y <code>useEffect</code>. Los archivos relevantes son:
          <ul>
            <li><code>src/components/CountryList.jsx</code>: Para mostrar la lista de países.</li>
            <li><code>src/components/CountryDetail.jsx</code>: Para mostrar los detalles de un país específico.</li>
          </ul>
        </li>
        <li><strong>Visualización de Datos</strong>: Los datos se actualizan y muestran correctamente en los componentes mencionados.</li>
      </ul>
      <ul>
        <li><strong>Sistema de Búsqueda</strong>: Se implementó un sistema de búsqueda en <code>src/components/CountryList.jsx</code> que permite a los usuarios filtrar la lista de países según sus necesidades.</li>
        <li><strong>Gestión de Datos</strong>: Se implementó el almacenamiento de datos usando <code>localStorage</code> en <code>src/api.js</code> y en el componente <code>CountryList</code> para persistir los datos.</li>
      </ul>

      <h3>Cómo se Cumplen los Requisitos Técnicos:</h3>
      <ul>
        <li><strong>useState y useEffect</strong>: Se utilizan en <code>src/components/CountryList.jsx</code> y <code>src/components/CountryDetail.jsx</code> para manejar el estado de los datos y los efectos secundarios como la carga de datos de la API.</li>
        <li><strong>react-router</strong>: Implementado en <code>src/App.jsx</code> para la navegación entre vistas, permitiendo a los usuarios cambiar entre la lista de países, los detalles de un país y la página de "About". Las vistas incluyen:
          <ul>
            <li><strong>Home</strong>: En <code>src/components/Home.jsx</code></li>
            <li><strong>Country List</strong>: En <code>src/components/CountryList.jsx</code></li>
            <li><strong>Country Detail</strong>: En <code>src/components/CountryDetail.jsx</code></li>
            <li><strong>About</strong>: En <code>src/components/About.jsx</code></li>
          </ul>
        </li>
        <li><strong>localStorage</strong>: Usado para almacenar y gestionar datos localmente en <code>src/api.js</code> y en <code>src/components/CountryList.jsx</code>, permitiendo que los datos persistan entre sesiones.</li>
        <li><strong>fetch</strong>: Utilizado para hacer peticiones a la API en <code>src/api.js</code> y obtener los datos iniciales de los países.</li>
        <li><strong>CRUD</strong>: Implementado en <code>src/components/CountryList.jsx</code> y <code>src/components/CountryDetail.jsx</code> para las operaciones de Crear, Leer, Actualizar y Eliminar datos.</li>
        <li><strong>Sistema de Búsqueda</strong>: Implementado en <code>src/components/CountryList.jsx</code>, permitiendo a los usuarios buscar entre los países cargados.</li>
      </ul>      
      
      <h2>Día 2: Testing, Reparación de Errores y Mejoras</h2>
      <p>Nada Aún</p>
  
      <h2>Día 3: Simplificación del Código para Mayor Entendimiento General</h2>
      <p>Nada Aún</p>

      <h2>Día 4: Búsqueda de Mejoras y Reparaciones</h2>
      <p>Nada Aún</p>

      <h2>Día 5: Último Testing y Entrega de Trabajo Final</h2>
      <p>Nada Aún</p>

      <h2>Extra: Creación de Archivos CSS para Mejora Visual</h2>
      <p>Nada Aún</p>

      <p><strong>Atentamente,</strong> Franco Luna</p>
    </div>
  );
};

export default About;
