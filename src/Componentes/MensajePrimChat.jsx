import React from "react";

import '../Css/MensajePrimChat.css';

function MensajePrimChat({mensaje}) {
  return(
    <div className="ContenedorMsgChat1">
      <label className="MensajePrimerChat">{mensaje}</label>
    </div>
  )
}

export default MensajePrimChat;