  import React, {useState, useEffect, useRef} from "react";

import { Alert } from "@mui/material";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

//ICONOS MUI  ICONOS MUI  ICONOS MUI  ICONOS MUI  ICONOS MUI
import DoneAllIcon from '@mui/icons-material/DoneAll';

import '../Css/DiferentesAnim.css';


function DiferentesAnim(){

  const inputAlmacenado = useRef(null);
  const alertaAlmacenada = useRef(null);

  const [ cumpleCondicion, setCumpleCondicion ] = useState(false);
  const [ ocultarAlertONo, setOcultarAlertONo ] = useState(true);

/* BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 */

  const VerifCondicion = estadoAler => {
    return (estadoAler === true);
  }
  const ocultarONoAlerta = ocultar => {
    return (ocultar === true);
  }

  const btn1 = () => {
    setOcultarAlertONo(false);
    if (inputAlmacenado.current.value === "paralelo") {
      alertaAlmacenada.current.textContent = 'Bien Hecho!!!';
      setCumpleCondicion(true);
    } else {
      alertaAlmacenada.current.textContent = 'Tienes que escribir "paralelo" :] ';
      setCumpleCondicion(false)
    };
  };
  
/* BTN 2 BTN 2 BTN 2 BTN 2 BTN 2 BTN 2 */
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

/* BTN 3 BTN 3 BTN 3 BTN 3 BTN 3 BTN 3 */

  return(
    <div>
      <div className="tituloAnim col-12">
        <label> ALERTAS CON MUI </label>
      </div>
      <div className="cuerpoAnim col-12">

        {/* IZQUIERDA IZQUIERDA IZQUIERDA IZQUIERDA IZQUIERDA */}
        <div className="contBtnDifAnim contAnimIzq col-3">
          <div className="contAlertaVanilla col-12">
            <label
              className={`alertaVanilla col-8 ${VerifCondicion(cumpleCondicion) ? 'alerVaCorr' : 'alerVaInco'} ${ocultarONoAlerta(ocultarAlertONo) ? 'd-none' : ''}`}
              ref={alertaAlmacenada}
              >Alerta Vanilla
            </label>
          </div>
          <input
            id="inputMsg"
            className="col-8"
            ref={inputAlmacenado}/>


          <div className="contBotones col-5">
            <button 
              onClick={btn1}
              className="estiloBtnDifAnim col-12"
              >ejemplo 1</button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "paralelo"
              </li>
            </ul>
          </div>
          <div className="contBotones col-5">
            <Button className="estiloBtnDifAnim d-flex col-12" onClick={handleClick}>Boton Desplegable 5s</Button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "paralelo"
              </li>
            </ul>
            <Snackbar
              open={open}
              onClose={handleClose}
              autoHideDuration={5000}>
              <Alert
                onClose={handleClose}
                variant="filled"
                severity="warning"
                icon={<DoneAllIcon color="primary" fontSize="inherit"/>}
                className="text-info border rounded-4 border-5 border-dark">
                a
              </Alert>
            </Snackbar>
          </div>

          <div className="contBotones col-5">
            <button className="estiloBtnDifAnim col-12">ejemplo 1</button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "paralelo"
              </li>
            </ul>
          </div>
          <div className="contBotones col-5">
            <button className="estiloBtnDifAnim col-12">ejemplo 1</button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "paralelo"
              </li>
            </ul>
          </div>
          <div className="contBotones col-5">
            <button className="estiloBtnDifAnim col-12">ejemplo 1</button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "paralelo"
              </li>
            </ul>
          </div>
          <div className="contBotones col-5">
            <button className="estiloBtnDifAnim col-12">ejemplo 1</button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "paralelo"
              </li>
            </ul>
          </div>
        </div>

        {/* CENTRO CENTRO CENTRO CENTRO CENTRO */}
        <div className="contBtnDifAnim contAnimCen col-3">
          COMPROBAR DATOS MEDIANTE REGEX Y NOTIFICACION DE ERROR CON MUI
        </div>

        {/* DERECHA DERECHA DERECHA DERECHA DERECHA */}
        <div className="contBtnDifAnim contAnimDer col-3">
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