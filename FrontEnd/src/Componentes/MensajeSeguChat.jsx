import React from "react";

import '../Css/MensajeSeguChat.css';

function MensajeSeguChat({mensaje}){
  return(
    <div className="ContenedorMsgChat2">
      <label className="MensajeSegundoChat">{mensaje}</label>
    </div>
  )
};

export default MensajeSeguChat;