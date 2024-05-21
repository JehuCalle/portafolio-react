import React from "react";

import '../Css/GatoAPI.css';

function GatoAPI({imagen}){
  return(
    <div className="contenedor-imagen-API">
      <img className="tamaño-imagen" src={imagen} alt="" />
    </div>
  )
}

export default GatoAPI;