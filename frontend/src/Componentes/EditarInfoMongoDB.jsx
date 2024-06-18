import React from "react";
import "../Css/EditarInfoMongoDB.css";

function EditarInfoMongoDB({mostrar, btnCerrar, children}){

  const MostrarOcultar = mostrar ? "modal mostrarModal" : "modal ocultarModal"

  return(
    <div className={MostrarOcultar}>
      <div className="modalMain">
        <button
          onClick={btnCerrar}>
            X
        </button>
        {children}
      </div>
    </div>
  );
}

export default EditarInfoMongoDB;