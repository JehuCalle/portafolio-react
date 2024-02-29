import React, {useState, useEffect} from "react";

import Alert from '@mui/material/Alert';


import '../Css/DiferentesAnim.css';

function DiferentesAnim(){



  return(
    <div>
      <div className="tituloAnim col-12">
        <label> ALERTAS CON MUI </label>
      </div>
      <div className="cuerpoAnim col-12">
        <div className="contBtnDifAnim col-3">
          <button className="estiloBtnDifAnim col-5">ejemplo 1</button>
          <Alert>ALERTA CON MUI</Alert>
          <button className="estiloBtnDifAnim col-5">ejemplo 2</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 3</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 4</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 5</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 6</button>
        </div>
        <div className="contBtnDifAnim col-3">
          <button className="estiloBtnDifAnim col-5">ejemplo 1</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 2</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 3</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 4</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 5</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 6</button>
        </div>
        <div className="contBtnDifAnim col-3">
          <button className="estiloBtnDifAnim col-5">ejemplo 1</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 2</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 3</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 4</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 5</button>
          <button className="estiloBtnDifAnim col-5">ejemplo 6</button>
        </div>
      </div>
    </div>
  )
};

export default DiferentesAnim;