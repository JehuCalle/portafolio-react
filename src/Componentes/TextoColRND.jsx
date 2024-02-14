import React from "react";

import '../Css/TextoColRND.css';

function TextoColRND({texto, color, colorRND}) {
  return(
    <div className="texto-color-random">
      <label
        className="texto"
        style={color}>{texto}</label>
      <button
        className="btnColorRND"
        onClick={colorRND}>
        Cambiar Color
      </button>
    </div>
  );
  
};

export default TextoColRND;