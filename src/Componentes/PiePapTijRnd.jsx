import React, { useEffect,useState } from "react";

function PiePapTijRnd(props){

  return(
    /* HACER QUE AL PONER EL CURSOR SOBRE UNA OPCIÓN, LA IMAGEN SE HAGA GRANDE Y PEQUEÑO MIENTRAS EL CURSOS SIGUA SOBRE EL BOTON */
    <button
      id={props.id}
      className={props.classNameBTN}
      onClick={() => props.onClick(props.id)}>
        <img
          className={props.classNameIMG}
          src={props.src}
          alt={props.alt}/>
    </button>
  )
};

export default PiePapTijRnd;