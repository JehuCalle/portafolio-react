import React, { useState, useRef, useEffect } from "react";

import GatoFormularioAPI from "./GatoFormularioAPI";
import GatoAPI from "./GatoAPI";


import '../Css/ListaGatoAPI.css';

function ListaGatoAPI(){

  const [ gatosAPI, setGatosAPI ] = useState([]);
  const referenciaListaGatoAPI = useRef(null);
  const [ mountedAPI, setMountedAPI ] = useState(false);

  useEffect(() => {
    if( referenciaListaGatoAPI.current &&mountedAPI === true){
      setMountedAPI(false);
      console.log("BAJANDOOOO....");

      referenciaListaGatoAPI.current.scrollTop = referenciaListaGatoAPI.current.scrollHeight;
    };
  }, [ mountedAPI ]);

  const agregarGatoAPI = gatoAPI => {
    setMountedAPI(true);

    /* SI gatoAPI SE PONE AL FINAL DE LA LISTA SE AGREGARA EL NUEVO ELEMENTO AL FINAL Y SI gatoAPI SE PONE AL INICIO ENTONCES EL NUEVO ELEMENTO SE AGREGARA AL INICIO  */
    const gatosAPIActualizados = [ ...gatosAPI, gatoAPI];

    setGatosAPI(gatosAPIActualizados);
    console.log(gatosAPIActualizados);
  };

  return(
    <div className="imagen-random-gatoAPI">
      <div
        className="contenedor-imagenes"
        ref={referenciaListaGatoAPI}  >
        {
          gatosAPI.map((gatoAPI) => 
            <GatoAPI
              key={gatoAPI.id}
              imagen={gatoAPI.imagen}/>
          )
        }
      </div>
      <div>
        <GatoFormularioAPI
          onSubmit={agregarGatoAPI}/>
      </div>
    </div>
  )
}

export default ListaGatoAPI;