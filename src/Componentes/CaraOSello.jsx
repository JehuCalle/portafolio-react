import React from 'react';


import "../Css/CaraOSello.css";

function CaraOSello({ enviar, cara, sello, resultadoCalculo, respuesta, historial, ref}){
  return(
    <div className="cara-o-sello col-12 col-lg-6">
      <div className="contenedor-respuestas col-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
        <div className='contenedor-imputs'>
          <label>Nombre </label>
          <input
            className='inputCaraOSello'
            type="text"
            id="nombre" />
          <label>respuesta</label>
          <input
            className='inputCaraOSello'
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
      </div>
    
      <div className="contenedor-resultados col-5 col-md-5 col-lg-6 col-xl-6 col-xxl-6">
        <label>Adivine si sale cara o sello, primero escriba su nombre y escoga su respuesta escribiendola o presionando uno de los botones</label>
        <br></br>
        <label>Ha salido: {resultadoCalculo}</label>
        <br></br>
        <label>
            Resultado: {respuesta}
        </label>
      </div>

      <div className="contenedor-historial col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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

