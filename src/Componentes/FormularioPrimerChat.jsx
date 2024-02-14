import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import '../Css/FormulariosChats.css';

function FormularioPrimerChat(props) {

  const [ textareaPrimMSG, setTextareaPrimMSG ] = useState("");

  const ManejarCambioPrimMSG = e => {
    setTextareaPrimMSG(e.target.value);
    console.log("Primer Mensaje Escribiendo.....");
  };

  const ManejarEnvioPrimForm = e => {
    e.preventDefault();
    console.log("b");

    const nuevoPrimerMensaje = {
      id: uuidv4(),
      fecha: 2000,
      tipo: "primero",
      mensaje: textareaPrimMSG
    };
    props.onSubmit(nuevoPrimerMensaje);
  };

  return(
    <form
      onSubmit={ManejarEnvioPrimForm}>
      <div className="ContenedorTexto">
        <textarea
          className="inputAncho"
          onChange={ManejarCambioPrimMSG}
          placeholder="ESCRIBE LO QUE QUIERAS"  />
        <button>Enviar</button>
      </div>
    </form>
  )
}

export default FormularioPrimerChat;