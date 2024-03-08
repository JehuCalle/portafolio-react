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
    setEstadoUEBtn2(true);
    setResBtn2(inputAlmacenado.current.value);
  };

  useEffect(() => {
    const resBtn2Fix = resBtn2.charAt(0).toUpperCase() + resBtn2.slice(1); 

    if(estadoUEBtn2 === true){
      setOcultarAlertONo(false);
      if (resBtn2Fix === "Paralelo") {
        alertaAlmacenada.current.textContent = 'Bien Hecho, Botón N°2 completado!!!';
        setCumpleCondicion(true);
      } else {
        alertaAlmacenada.current.textContent = 'Tienes que escribir "Paralelo" :]';
        setCumpleCondicion(false)
      };
      setEstadoUEBtn2(false);
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
      setOcultarAlertONo(false);
      if (ResBtn3Fix === 'guallaby') {
        alertaAlmacenada.current.textContent = 'Bien Hecho, Botón N°3 completado!!!';
        setCumpleCondicion(true);
      } else {
        alertaAlmacenada.current.textContent = 'Tienes que escribir "Guallaby" :]';
        setCumpleCondicion(false);
      };
      setEstadoUEBtn3(false);
    }
  }, [estadoUEBtn3, resBtn3]);

/* BTN 4 BTN 4 BTN 4 BTN 4 BTN 4 BTN 4 */

  const regexSoloNumYSpaBla = /^[0-9\s]+$/;
  const [ estadoUEBtn4, setEstadoUEBtn4 ] = useState(false);
  const [ estadoResBtn4, setEstadoResBtn4 ] = useState(false);

  const btn4 = () => {
    setEstadoUEBtn4(true);
    setEstadoResBtn4(regexSoloNumYSpaBla.test(inputAlmacenado.current.value));
  };

  useEffect(() => {
    if( estadoUEBtn4 === true ) {
      setOcultarAlertONo(false);
      if (estadoResBtn4 === true) {
        alertaAlmacenada.current.textContent = 'Bien Hecho, Botón N°4 completado!!!'
        setCumpleCondicion(true)
      }else {
        alertaAlmacenada.current.textContent = 'Tienes que escribir solo numeros :]'
        setCumpleCondicion(false)
      };
      setEstadoUEBtn4(false);
    };
  },[estadoUEBtn4, estadoResBtn4]);

/* BTN 5 BTN 5 BTN 5 BTN 5 BTN 5 BTN 5 */

  const regexSoloLetYSpaBla = /^[a-zA-Z\s]+$/;
  const [ estadoUEBtn5, setEstadoUEBtn5 ] = useState(false);
  const [ estadoResBtn5, setEstadoResBtn5 ] = useState(false);

  const btn5 = () => {
    setEstadoUEBtn5(true);
    setEstadoResBtn5(regexSoloLetYSpaBla.test(inputAlmacenado.current.value));
  };

  useEffect(() => {
    if ( estadoUEBtn5 === true ) {
      setOcultarAlertONo(false);
      if (estadoResBtn5 === true) {
        setCumpleCondicion(true);
        alertaAlmacenada.current.textContent = 'Bien Hecho, Botón N°5 completado!!!'
      }else {
        setCumpleCondicion(false);
        alertaAlmacenada.current.textContent = 'Tienes que escribir solo letras :]'
      };
      setEstadoUEBtn5(false);
    };
  },[estadoUEBtn5, estadoResBtn5]);

/* BTN 6 BTN 6 BTN 6 BTN 6 BTN 6 BTN 6 */

  const refAlerAnim = useRef(null);
  const [ activAnim, setActivAnim ] = useState(false);
  const [ ocultarAnim, setOcultarAnim ] = useState(true);
  const [ btn6Activado, setBtn6Activado ] = useState(false);

  const btn6 = () => {
    setActivAnim(true);
    setOcultarAnim(false);
    setBtn6Activado(true);
    setTimeout(() => {
      setActivAnim(false);
      setOcultarAnim(true);
      setBtn6Activado(false);
    }, 2900);
  };

  /* #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA */

  const inputDerAlmacenado = useRef(null);

/* BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 */
const [open, setOpen] = useState(false);

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
      <div className="cuerpoAnim col-12">
        <div className="col-9">
          <label className="tituloAlerVanilla col-4"> ALERTAS VANILLA</label>
          <label className="tituloAlerMUI col-8"> ALERTAS CON MUI </label>
        </div>
        <div className="contContCont col-12">
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


            <div className="contContBotones col-12">
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
                  <li className="tamañoLi">
                    Sin espacios
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
                  <li className="tamañoLi">
                    Sin espacios
                  </li>
                </ul>
              </div>
            </div>


            <div className="contContBotones col-12">
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
                  <li className="tamañoLi">
                    Sin espacios
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
            </div>


            <div className="contContBotones col-12">
              <div className="contBotones col-5">
                <button
                  className="estiloBtnDifAnim col-12"
                  onClick={btn5}>
                    Botón N°5
                </button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Solo escribir letras
                  </li>
                </ul>
              </div>


              <div className="contBotones col-5">
                <button
                  className="estiloBtnDifAnim col-12"
                  onClick={btn6}
                  disabled={btn6Activado}>
                    Botón N°6
                </button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    ¿?¿?¿?¿?¿?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CENTRO CENTRO CENTRO CENTRO CENTRO */}
          <div className="contBtnDifAnim contAnimCen col-3">
            COMPROBAR DATOS MEDIANTE REGEX Y NOTIFICACION DE ERROR CON MUI
          </div>

          {/* DERECHA DERECHA DERECHA DERECHA DERECHA */}
          <div className="contBtnDifAnim contAnimDer col-3">
            <input
              className="col-8"
              ref={inputDerAlmacenado}/>
            <div className="contContBotones col-12">
              <div className="contBotones col-5">
                <Button
                  className="estiloBtnDifAnim d-flex col-12"
                  onClick={handleClick}>
                    Boton Desplegable 5s
                </Button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
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
                <button className="estiloBtnDifAnim col-12">ejemplo 2</button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                </ul>
              </div>
            </div>

            <div className="contContBotones col-12">
              <div className="contBotones col-5">
                <button className="estiloBtnDifAnim col-12">ejemplo 3</button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                </ul>
              </div>
              <div className="contBotones col-5">
                <button className="estiloBtnDifAnim col-12">ejemplo 4</button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                </ul>
              </div>
            </div>

            <div className="contContBotones col-12">
              <div className="contBotones col-5">
                <button className="estiloBtnDifAnim col-12">ejemplo 5</button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                </ul>
              </div>
              <div className="contBotones col-5">
                <button className="estiloBtnDifAnim col-12">ejemplo 6</button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <label
          className={`AlertaAnimVanilla ${activAnim ? 'anim' : ''} ${ocultarAnim ? 'd-none' : ''}`}
          ref={refAlerAnim}>
            ALERTA VANILLA 😼
        </label>
      </div>
    </div>
  )
};

export default DiferentesAnim;