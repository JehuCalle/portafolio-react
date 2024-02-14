import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import '../Css/FormulariosChats.css';

function FormularioSegundoChat(props) {

  const [ textareaSegMSG, setTextareaSegMSG ] = useState("");

  const ManejarCambioSegMSG = e => {
    setTextareaSegMSG(e.target.value);
    console.log("Segundo Mensaje Escribiendo......");
  };

  const ManejarEnvioSegForm = e => {
    e.preventDefault();
    console.log("a");

    const nuevoSegundoMensaje = {
      id: uuidv4(),
      fecha: 1000,
      tipo: "segundo",
      mensaje: textareaSegMSG
    }
    props.onSubmit(nuevoSegundoMensaje);
  }

  return(
    <form
      onSubmit={ManejarEnvioSegForm}>
      <div className="ContenedorTexto">
        <textarea
          className="inputAncho"
          onChange={ManejarCambioSegMSG}
          placeholder="ESCRIBE LO QUE QUIERAS"  />
        <button>Enviar</button>
      </div>
    </form>
  )
}

export default FormularioSegundoChat;