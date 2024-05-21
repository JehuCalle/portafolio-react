import React from "react";

import '../Css/TextoColRND.css';

function TextoColRND({texto, color, colorRND}) {
  return(
    <div className="texto-color-random col-12 col-lg-6">
      <label
        className="texto col-11"
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