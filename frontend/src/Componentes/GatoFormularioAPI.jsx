import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import '../Css/GatoFormularioAPI.css';

function GatoFormularioAPI(props){

  const [data, setData] = useState(null);

  function a() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }
        return response.json();
      })
      .then((responseData) => {
        // Almacena los datos obtenidos en el estado
        setData(responseData);

        const nuevoGatitoAPI = {
          id : uuidv4(),
          imagen : responseData[0].url
        };
        props.onSubmit(nuevoGatitoAPI);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const manejarEnvioForm = e => {
    e.preventDefault();
    a();
  };

  return(
    <div>
      <form
        onSubmit={manejarEnvioForm}>
        <button>Agregar Gatito</button>
        
      </form>
    </div>
  )
};

export default GatoFormularioAPI;