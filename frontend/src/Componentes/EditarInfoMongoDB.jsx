import React from "react";
import "../Css/EditarInfoMongoDB.css";

function EditarInfoMongoDB({mostrar, btnCerrar, children}){

  const MostrarOcultar = mostrar ? "modal mostrarModal" : "modal ocultarModal"

  return(
    <div className={MostrarOcultar}>
      <div className="modalMain">
        <div className="contBtnCerrarModal col-12">
          <button
            onClick={btnCerrar}>
              X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default EditarInfoMongoDB;