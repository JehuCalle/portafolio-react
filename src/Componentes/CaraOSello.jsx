import React from 'react';


import "../Css/CaraOSello.css";

function CaraOSello({ enviar, cara, sello, resultadoCalculo, respuesta, historial, ref}){
  return(
    <div className="cara-o-sello">
      <div className="contenedor-respuestas">
        <label>Nombre </label>
        <input
          type="text"
          id="nombre" />
        <label>respuesta</label>
        <input
          type="text"
          id="respuesta"/>
        <button
          onClick={enviar}>
          Enviar
        </button>

        <div className="contenedor-botones">
          <button
            onClick={cara}>
            Cara
          </button>
          <label>O</label>
          <button
            onClick={sello}>
            Sello
          </button>
        </div>
      </div>
    
      <div className="contenedor-resultados">
        <label>Adivine si sale cara o sello, primero escriba su nombre y escoga su respuesta escribiendola o presionando uno de los botones</label>
        <br></br>
        <label>Ha salido: {resultadoCalculo}</label>
        <br></br>
        <label>
            Resultado: {respuesta}
        </label>
      </div>

      <div className="contenedor-historial">
        <label>
          Historial
        </label>
        <div
          id='a'
          className="historial-resultados"
          >
            {historial}
        </div>
      </div>
    </div>
  );
};

export default CaraOSello;

