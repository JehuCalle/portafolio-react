import React from "react";

import '../Css/Gato.css';

function Gato({ id, nombre, edad, clase, imagen, arma, vida, mana, verID1, verID2, verID3, verID4 }){

  return(
    <div
    className="contenedor-gato">
      <div
        className="contenedor-ImagenGato">
        <img
          className="imagenGato"
          src={imagen}
          alt="ImagenGato" />
      </div>

      <div
        className="contenedor-DatosTextoGato">
        <label>Nombre: </label>
        <label>Edad: </label>
        <label>Clase: </label>
        <label>Arma: </label>
      </div>
      <div
        className="contenedor-DatosGato">
        <label>{nombre}</label>
        <label>{edad}</label>
        <label>{clase}</label>
        <label>{arma}</label>
      </div>

      <div
        className="contenedor-VidaHabilidadesGato">
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