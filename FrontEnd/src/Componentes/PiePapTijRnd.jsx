import React, { useEffect,useState } from "react";

function PiePapTijRnd(props){

  return(
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