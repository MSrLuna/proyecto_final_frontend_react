// src/components/About.jsx

import React from "react";
import { useNavigate } from "react-router-dom"; // Día 2: Para el botón "atrás".
import "../components/styles/main.css"; // Importar CSS general

// Componente que muestra la información sobre el proyecto
function About() {
  // Día 2: Cambiado de un "const" a "function" para mayor facilidad para agregar el botón.
  const navigate = useNavigate(); // Día 2: Hook para la navegación

  return (
    <div>
      <button onClick={() => navigate("/")}>Ir hacia atrás</button>{" "}
      {/* Botón para volver a la página de inicio */}
      <h1>Acerca del Proyecto</h1>
      <p>
        A continuación, presento un resumen detallado del progreso realizado en
        el desarrollo del proyecto, siguiendo los requisitos establecidos y las
        tareas realizadas cada día, junto con la ubicación de los archivos
        correspondientes:
      </p>
      <h2>
        Día 1: Configuración, Estructura Inicial, Funcionalidades CRUD, Sistema
        de Búsqueda y Gestión de Datos Locales
      </h2>
      <p>
        <strong>Configuración del Entorno:</strong> Se creó la estructura
        inicial del proyecto utilizando Create React App. El archivo principal
        de entrada es src/index.js.
      </p>
      <p>
        <strong>Repositorio en GitHub:</strong> Se configuró el repositorio en
        GitHub y se realizó el primer commit con la estructura inicial del
        proyecto.
      </p>
      <p>
        <strong>Elección del Tema:</strong> Se eligió el tema de "Países y
        Capitales" para el proyecto. Esta elección está documentada en el
        archivo Excel del repositorio.
      </p>
      <p>
        <strong>Navegación:</strong> Se implementó la navegación entre
        diferentes vistas utilizando react-router. Las vistas implementadas son:
      </p>
      <ul>
        <li>
          <strong>Home:</strong> Mostrada en src/components/Home.jsx
        </li>
        <li>
          <strong>Country List:</strong> Mostrada en
          src/components/CountryList.jsx
        </li>
        <li>
          <strong>Country Detail:</strong> Mostrada en
          src/components/CountryDetail.jsx
        </li>
        <li>
          <strong>About:</strong> Mostrada en src/components/About.jsx
        </li>
      </ul>
      <p>
        <strong>Configuración de API:</strong> Se configuraron las llamadas a la
        API usando fetch en src/api.js para obtener los datos iniciales de los
        países y sus capitales.
      </p>
      <p>
        <strong>Operaciones CRUD:</strong> Se implementaron las funcionalidades
        de Crear, Leer, Actualizar y Eliminar utilizando useState y useEffect.
        Los archivos relevantes son:
      </p>
      <ul>
        <li>
          src/components/CountryList.jsx: Para mostrar la lista de países.
        </li>
        <li>
          src/components/CountryDetail.jsx: Para mostrar los detalles de un país
          específico.
        </li>
      </ul>
      <p>
        <strong>Visualización de Datos:</strong> Los datos se actualizan y
        muestran correctamente en los componentes mencionados.
      </p>
      <p>
        <strong>Sistema de Búsqueda:</strong> Se implementó un sistema de
        búsqueda en src/components/CountryList.jsx que permite a los usuarios
        filtrar la lista de países según sus necesidades.
      </p>
      <p>
        <strong>Gestión de Datos:</strong> Se implementó el almacenamiento de
        datos usando localStorage en src/api.js y en el componente CountryList
        para persistir los datos.
      </p>
      <h4>Cómo se Cumplen los Requisitos Técnicos:</h4>
      <ul>
        <li>
          <strong>useState y useEffect:</strong> Se utilizan en
          src/components/CountryList.jsx y src/components/CountryDetail.jsx para
          manejar el estado de los datos y los efectos secundarios como la carga
          de datos de la API.
        </li>
        <li>
          <strong>react-router:</strong> Implementado en src/App.jsx para la
          navegación entre vistas, permitiendo a los usuarios cambiar entre la
          lista de países, los detalles de un país y la página de "About". Las
          vistas incluyen:
          <ul>
            <li>
              <strong>Home:</strong> En src/components/Home.jsx
            </li>
            <li>
              <strong>Country List:</strong> En src/components/CountryList.jsx
            </li>
            <li>
              <strong>Country Detail:</strong> En
              src/components/CountryDetail.jsx
            </li>
            <li>
              <strong>About:</strong> En src/components/About.jsx
            </li>
          </ul>
        </li>
        <li>
          <strong>localStorage:</strong> Usado para almacenar y gestionar datos
          localmente en src/api.js y en src/components/CountryList.jsx,
          permitiendo que los datos persistan entre sesiones.
        </li>
        <li>
          <strong>fetch:</strong> Utilizado para hacer peticiones a la API en
          src/api.js y obtener los datos iniciales de los países.
        </li>
        <li>
          <strong>CRUD:</strong> Implementado en src/components/CountryList.jsx
          y src/components/CountryDetail.jsx para las operaciones de Crear,
          Leer, Actualizar y Eliminar datos.
        </li>
        <li>
          <strong>Sistema de Búsqueda:</strong> Implementado en
          src/components/CountryList.jsx, permitiendo a los usuarios buscar
          entre los países cargados.
        </li>
      </ul>
      <h2>Día 2: Testing, Reparación de Errores y Mejoras</h2>
      <ul>
        <li>
          <strong>Corrección de Errores:</strong>
        </li>
        <ul>
          <li>
            <strong>CountryList.jsx:</strong> Se solucionó un problema de
            filtrado en la búsqueda, que no consideraba la capital de los
            países. Ahora, la búsqueda filtra correctamente tanto por nombre del
            país como por capital.
          </li>
          <li>
            <strong>CountryList.jsx:</strong> Se encontró error grave, no
            existía el CRUD que se creía agregado en el día uno, no se podía
            agregar, eliminar o actualizar países en la LocalStorage, solo se
            puede ver los países de la API, se intentó solucionar agregandolo,
            pero hubieron muchos más errores, por el momento no se logró
            solucionar. INTENTO FALLIDO.
          </li>
        </ul>
        <li>
          <strong>Mejoras:</strong>
        </li>
        <ul>
          <li>
            <strong>CountryDetail.jsx:</strong> Se añadió un botón "Ir hacia
            atrás" para mejorar la navegación del usuario.
          </li>
          <li>
            <strong>CountryList.jsx:</strong> Se añadió un botón "Ir hacia
            atrás" para permitir a los usuarios volver a la página de inicio.
          </li>
          <li>
            <strong>About.jsx:</strong> Se actualizó la sección de "Acerca del
            Proyecto" para reflejar los cambios y avances del Día 2.
          </li>
        </ul>
      </ul>
      <h2>Día 3: Corrección de Errores y Faltas, más Archivos CSS Hechos por IA Agregados</h2>
      <ul>
        <li>
          Se agregó la funcionalidad de edición completa en el componente{" "}
          <code>EditCountry</code>, permitiendo a los usuarios modificar los
          detalles de los países. Se añadió la opción de modificar los campos de
          nombre, capital, población, idioma y moneda.
        </li>
        <li>
          Se implementaron dos métodos auxiliares,{" "}
          <code>getLocalCountries</code> y <code>saveLocalCountries</code>, en
          el archivo <code>api.js</code> para manejar la obtención y
          almacenamiento de los países guardados en <code>localStorage</code>.
        </li>
        <li>
          Se ajustó el componente <code>CountryList</code> para combinar los
          países obtenidos de la API con los países guardados localmente,
          asegurando que se muestren ambos tipos de datos.
        </li>
        <li>
          Se mejoró la interfaz de usuario para que el enlace "Editar" se vea
          como un botón mediante el uso de CSS.
        </li>
        <li>
          Se corrigió el problema del CRUD que antes estaba marcado como intento
          fallido. Ahora la funcionalidad de creación, lectura, actualización y
          eliminación de países está completamente operativa.
        </li>
        <li>
          Se añadió un archivo CSS específico para cada componente dentro de la
          carpeta <code>styles</code>, proporcionando estilos creativos y
          coloridos para una mejor experiencia de usuario. Los estilos incluyen
          mejoras en el diseño de botones, campos de entrada, y listados de
          países.
        </li>
      </ul>
      <h2>Día 4:</h2>
      <p>Nada Aún</p>
      <h2>Día 5:</h2>
      <p>Nada Aún</p>
      <h5>Atentamente, Franco Luna</h5>
    </div>
  );
}

export default About;

// Modificación Día 2: Añadido un botón "Ir hacia atrás" para permitir al usuario volver a la página de inicio.
