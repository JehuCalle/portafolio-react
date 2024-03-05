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

  const VerifCondicion = estadoAler => {
    return (estadoAler === true);
  }
  const ocultarONoAlerta = ocultar => {
    return (ocultar === true);
  }

  /* #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA */

/* BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 */

  const btn1 = () => {

    if (inputAlmacenado.current.value === 'Angora') {
      alertaAlmacenada.current.textContent = 'Bien Hecho, Botón N°1 completado!!!';
      setCumpleCondicion(true);
      setOcultarAlertONo(false);
    } else {
      alertaAlmacenada.current.textContent = 'Tienes que escribir "Angora" :]';
      setCumpleCondicion(false);
      setOcultarAlertONo(false);
    }
  };

/* BTN 2 BTN 2 BTN 2 BTN 2 BTN 2 BTN 2 */

  const [ resBtn2, setResBtn2 ] = useState('');
  const [ estadoUEBtn2, setEstadoUEBtn2 ] = useState(false);

  const btn2 = () => {
    setOcultarAlertONo(false);
    setEstadoUEBtn2(true);
    setResBtn2(inputAlmacenado.current.value);
  };

  useEffect(() => {
    const resBtn2Fix = resBtn2.charAt(0).toUpperCase() + resBtn2.slice(1); 

    if(estadoUEBtn2 === true){
      if (resBtn2Fix === "Paralelo") {
        alertaAlmacenada.current.textContent = 'Bien Hecho, Botón N°2 completado!!!';
        setCumpleCondicion(true);
        setEstadoUEBtn2(false);
      } else {
        alertaAlmacenada.current.textContent = 'Tienes que escribir "Paralelo" :]';
        setCumpleCondicion(false)
        setEstadoUEBtn2(false);
      };
    }
  },[resBtn2, estadoUEBtn2]);

/* BTN 3 BTN 3 BTN 3 BTN 3 BTN 3 BTN 3 */

  const [ resBtn3, setResBtn3 ] = useState('');
  const [ estadoUEBtn3, setEstadoUEBtn3 ] = useState(false);

  const btn3 = () => {
    setResBtn3(inputAlmacenado.current.value);
    setEstadoUEBtn3(true);
  };

  useEffect(()=> {

    const ResBtn3Fix = resBtn3.toLowerCase();

    if( estadoUEBtn3 === true) {
      if (ResBtn3Fix === 'guallaby') {
        alertaAlmacenada.current.textContent = 'Bien Hecho, Botón N°3 completado!!!';
        setCumpleCondicion(true);
        setOcultarAlertONo(false);
      } else {
        alertaAlmacenada.current.textContent = 'Tienes que escribir "Guallaby" :]';
        setOcultarAlertONo(false);
        setCumpleCondicion(false);
      };
    }
  }, [estadoUEBtn3, resBtn3]);

/* BTN 4 BTN 4 BTN 4 BTN 4 BTN 4 BTN 4 */

  const regexSoloNum = /^[0-9]+$/;
  const [ estadoUEBtn4, setEstadoUEBtn4 ] = useState(false);
  const [ estadoResBtn4, setEstadoResBtn4 ] = useState(false);

  const btn4 = () => {
    setEstadoUEBtn4(true);
    setEstadoResBtn4(regexSoloNum.test(inputAlmacenado.current.value));
  };

  useEffect(() => {
    if( estadoUEBtn4 === true ) {
      if (estadoResBtn4 === true) {
        alertaAlmacenada.current.textContent = 'Bien Hecho, Botón N°4 completado!!!'
        setCumpleCondicion(true)
        setOcultarAlertONo(false);
      }else {
        alertaAlmacenada.current.textContent = 'Tienes que escribir solo numeros :]'
        setCumpleCondicion(false)
        setOcultarAlertONo(false);
      };
    };
  },[estadoUEBtn4, estadoResBtn4]);
  /* #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA */

/* BTN 5 BTN 5 BTN 5 BTN 5 BTN 5 BTN 5 */



/* BTN 6 BTN 6 BTN 6 BTN 6 BTN 6 BTN 6 */



/* BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 */
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
              className={`alertaVanilla col-10 ${VerifCondicion(cumpleCondicion) ? 'alerVaCorr' : 'alerVaInco'} ${ocultarONoAlerta(ocultarAlertONo) ? 'd-none' : ''}`}
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
              className="estiloBtnDifAnim col-12"
              onClick={btn1}
              >Boton N°1
            </button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "Angora"
              </li>
            </ul>
          </div>


          <div className="contBotones col-5">
            <button
              className="estiloBtnDifAnim col-12"
              onClick={btn2}>
                Botón N°2
            </button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "paralelo"
              </li>
              <li className="tamañoLi">
                No importa si comienza con mayuscula o minuscula
              </li>
            </ul>
          </div>


          <div className="contBotones col-5">
            <button
              className="estiloBtnDifAnim col-12"
              onClick={btn3}>
                Botón N°3
            </button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "Guallaby"
              </li>
              <li className="tamañoLi">
                No importa si hay mayusculas entremedio
              </li>
            </ul>
          </div>


          <div className="contBotones col-5">
            <button
            className="estiloBtnDifAnim col-12"
            onClick={btn4}>
              Botón N°4
            </button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Solo escribir numeros
              </li>
            </ul>
          </div>


          <div className="contBotones col-5">
            <button className="estiloBtnDifAnim col-12">Botón N°5</button>
            <ul className="paddingUl">
              <li className="tamañoLi">
                Escribir "paralelo"
              </li>
            </ul>
          </div>


          <div className="contBotones col-5">
            <button className="estiloBtnDifAnim col-12">Botón N°6</button>
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