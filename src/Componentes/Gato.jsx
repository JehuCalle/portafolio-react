import React from "react";

import '../Css/Gato.css';

function Gato({ id, nombre, edad, clase, imagen, arma, vida, mana, verID1, verID2, verID3, verID4 }){

  return(
    <div
    className="contenedor-gato col-12">
      <div
        className="contenedor-ImagenGato col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <img
          className="imagenGato"
          src={imagen}
          alt="ImagenGato" />
      </div>

      <div
        className="contenedor-DatosTextoGato col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <label>Nombre: </label>
        <label>Edad: </label>
        <label>Clase: </label>
        <label>Arma: </label>
      </div>
      <div
        className="contenedor-DatosGato col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <label>{nombre}</label>
        <label>{edad}</label>
        <label>{clase}</label>
        <label>{arma}</label>
      </div>

      <div
        className="contenedor-VidaHabilidadesGato col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div>
            <label>Vida: </label>
            <label>{vida}</label>
            <br/>
            <label>Mana: </label>
            <label>{mana}</label>
          </div>
          <div>
            <button
            onClick={() => verID1(id,nombre,vida)}>
              HABILIDAD N°1
            </button>
            <button
            onClick={() => verID2(id)}>
              HABILIDAD N°2
            </button>
          </div>
          <div>
            <button
            onClick={() => verID3(id)}>
              Mas Vida
            </button>
            <button
            onClick={() => verID4(id)}>
              Mas Mana
            </button>
          </div>
      </div>
    </div>
  );
}

export default Gato;