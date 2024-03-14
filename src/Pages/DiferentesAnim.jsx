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

  const VerifCondicion = estadoAlerIzq => {
    return (estadoAlerIzq === true);
  }
  const ocultarONoAlerta = ocultar => {
    return (ocultar === true);
  }

  /* #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA */

/* BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 */

  const btnIzq1 = () => {

    if (inputAlmacenado.current.value === 'Angora') {
      alertaAlmacenada.current.textContent = 'Bien hecho, botón N°1 completado!!!';
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

  const btnIzq2 = () => {
    setEstadoUEBtn2(true);
    setResBtn2(inputAlmacenado.current.value);
  };

  useEffect(() => {
    const resBtn2Fix = resBtn2.charAt(0).toUpperCase() + resBtn2.slice(1); 

    if(estadoUEBtn2 === true){
      setOcultarAlertONo(false);
      if (resBtn2Fix === "Paralelo") {
        alertaAlmacenada.current.textContent = 'Bien hecho, botón N°2 completado!!!';
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

  const btnIzq3 = () => {
    setResBtn3(inputAlmacenado.current.value);
    setEstadoUEBtn3(true);
  };

  useEffect(()=> {

    const ResBtn3Fix = resBtn3.toLowerCase();

    if( estadoUEBtn3 === true) {
      setOcultarAlertONo(false);
      if (ResBtn3Fix === 'guallaby') {
        alertaAlmacenada.current.textContent = 'Bien hecho, botón N°3 completado!!!';
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

  const btnIzq4 = () => {
    setEstadoUEBtn4(true);
    setEstadoResBtn4(regexSoloNumYSpaBla.test(inputAlmacenado.current.value));
  };

  useEffect(() => {
    if( estadoUEBtn4 === true ) {
      setOcultarAlertONo(false);
      if (estadoResBtn4 === true) {
        alertaAlmacenada.current.textContent = 'Bien hecho, botón N°4 completado!!!'
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

  const btnIzq5 = () => {
    setEstadoUEBtn5(true);
    setEstadoResBtn5(regexSoloLetYSpaBla.test(inputAlmacenado.current.value));
  };

  useEffect(() => {
    if ( estadoUEBtn5 === true ) {
      setOcultarAlertONo(false);
      if (estadoResBtn5 === true) {
        setCumpleCondicion(true);
        alertaAlmacenada.current.textContent = 'Bien hecho, botón N°5 completado!!!'
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

  const btnIzq6 = () => {
    setActivAnim(true);
    setOcultarAnim(false);
    setBtn6Activado(true);
    setTimeout(() => {
      setActivAnim(false);
      setOcultarAnim(true);
      setBtn6Activado(false);
    }, 2900);
  };

  /* #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO #### CENTRO*/

  const [ sexo, setSexo ] = useState("");

  const sexoChange = (e) => {
    setSexo(e.target.value);
  };

  const envioFormulario = (e) => {
    e.preventDefault();

    console.log(sexo)
  };

  /* #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA #### DERECHA */

  const [open, setOpen] = useState(false);
  const inputDerAlmacenado = useRef(null);
  const [ textoInputDerAlmc, setTextoInputDerAlmc ] = useState('');
  
  const [ estadoAlertaDer, setEstadoAlertaDer ] = useState(false);
  const [ msgAlertDer, setMsgAlertDer ] = useState('')
  /* success - info - warning - error */
  const [ estiloSvrty, setEstiloSvrty ] = useState('')
  

  const verifEstado = estadoAlerDer => {
    return (estadoAlerDer === true);
  }

/* BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 */
const [ estadoBtnDer1, setEstadoBtnDer1 ] = useState('');

const btnDer1 = () => {
  setOpen(true);
  if (inputDerAlmacenado.current.value === 'Angora') {
    setMsgAlertDer('Bien hecho, botón derecho N°1 completado!!!')
    setEstadoAlertaDer(true);
    setEstadoBtnDer1('estiloBtnDifAnimCorr');
    setEstiloSvrty('success');
  }else {
    setMsgAlertDer('Tienes que escribir "Angora" :]')
    setEstadoAlertaDer(false);
    setEstadoBtnDer1('estiloBtnDifAnimIncorr');
    setEstiloSvrty('error')
  };
};

/* BTN 2 BTN 2 BTN 2 BTN 2 BTN 2 BTN 2 */
const [ estadoBtnDer2, setEstadoBtnDer2 ] = useState('');

const [ uEBtn2Der, setUEBtn2Der ] = useState(false);

const btnDer2 = () => {
  setOpen(true);
  setUEBtn2Der(true)
  setTextoInputDerAlmc(inputDerAlmacenado.current.value);
};


useEffect(()=>{
  if( uEBtn2Der === true){

    const textoBtn2DerFix = textoInputDerAlmc.charAt(0).toUpperCase() + textoInputDerAlmc.slice(1); 

    if(textoBtn2DerFix === 'Paralelo'){
      setMsgAlertDer('Bien hecho, botón derecho N°2 completado!!!')
      setEstadoAlertaDer(true);
      setEstadoBtnDer2('estiloBtnDifAnimCorr');
      setEstiloSvrty('success');
    } else {
      setMsgAlertDer('Tienes que escribir "Paralelo" :]')
      setEstadoAlertaDer(false);
      setEstadoBtnDer2('estiloBtnDifAnimIncorr');
      setEstiloSvrty('error')
    }
    setUEBtn2Der(false);
  }
},[uEBtn2Der, textoInputDerAlmc])

/* BTN 3 BTN 3 BTN 3 BTN 3 BTN 3 BTN 3 */
const [ estadoBtnDer3, setEstadoBtnDer3 ] = useState('');

const [ uEBtn3Der, setUEBtn3Der ] = useState(false);

const btnDer3 = () => {
  setOpen(true);
  setUEBtn3Der(true);
  setTextoInputDerAlmc(inputDerAlmacenado.current.value);
};

useEffect(()=>{

  const textoBtn3DerFix = textoInputDerAlmc.toLowerCase();
  if( uEBtn3Der===true ){
    if(textoBtn3DerFix === "guallaby"){
      setMsgAlertDer('Bien hecho, botón derecho N°3 completado!!!')
      setEstadoAlertaDer(true);
      setEstadoBtnDer3('estiloBtnDifAnimCorr');
      setEstiloSvrty('success');
    }else{
      setMsgAlertDer('Tienes que escribir "Guallaby" :]')
      setEstadoAlertaDer(false);
      setEstadoBtnDer3('estiloBtnDifAnimIncorr');
      setEstiloSvrty('error')
    }
    setUEBtn3Der(false);
  }
},[uEBtn3Der, textoInputDerAlmc])

/* BTN 4 BTN 4 BTN 4 BTN 4 BTN 4 BTN 4 */
const [ estadoBtnDer4, setEstadoBtnDer4 ] = useState('');

const [ uEBtn4Der, setUEBtn4Der] = useState(false);
const rGxSoloNumDer = /^[0-9\s]+$/;
const [ estadoRgxSoloNumDer, seEstadoRgxSoloNumDert ] = useState(false);


const btnDer4 = () => {
  setOpen(true);
  setUEBtn4Der(true);
  seEstadoRgxSoloNumDert(rGxSoloNumDer.test(inputDerAlmacenado.current.value));
};

useEffect(()=>{
  if( uEBtn4Der === true ){
    if( estadoRgxSoloNumDer === true ){
      setMsgAlertDer('Bien hecho, botón derecho N°4 completado!!!')
      setEstadoAlertaDer(true);
      setEstadoBtnDer4('estiloBtnDifAnimCorr');
      setEstiloSvrty('success');
    } else {
      setMsgAlertDer('Tienes que escribir solo numeros :]')
      setEstadoAlertaDer(false);
      setEstadoBtnDer4('estiloBtnDifAnimIncorr');
      setEstiloSvrty('error')
    }
    setUEBtn4Der(false);
  }
},[uEBtn4Der, estadoRgxSoloNumDer]);


/* BTN 5 BTN 5 BTN 5 BTN 5 BTN 5 BTN 5 */
const [ estadoBtnDer5, setEstadoBtnDer5 ] = useState('');

const rGxSoloLetDer = /^[a-zA-Z\s]+$/;
const [ estadoRgxSoloLetDer, seEstadoRgxSoloLetDert ] = useState(false);
const [ uEBtn5Der, setUEBtn5Der ] = useState(false);

const btnDer5 = () => {
  setOpen(true);
  setUEBtn5Der(true);
  seEstadoRgxSoloLetDert(rGxSoloLetDer.test(inputDerAlmacenado.current.value));
};

useEffect(()=>{
  if( uEBtn5Der === true ){
    if (estadoRgxSoloLetDer === true) {
      setMsgAlertDer('Bien hecho, botón derecho N°5 completado!!!')
      setEstadoAlertaDer(true);
      setEstadoBtnDer5('estiloBtnDifAnimCorr');
      setEstiloSvrty('success');
    }else {
      setMsgAlertDer('Tienes que escribir solo letras :]')
      setEstadoAlertaDer(false);
      setEstadoBtnDer5('estiloBtnDifAnimIncorr');
      setEstiloSvrty('error')
    }
    setUEBtn5Der(false);
  }
},[uEBtn5Der, estadoRgxSoloLetDer]);

/* BTN 5 BTN 5 BTN 5 BTN 5 BTN 5 BTN 5 */

const btnDer6 = () => {
  setEstadoBtnDer1('');
  setEstadoBtnDer2('');
  setEstadoBtnDer3('');
  setEstadoBtnDer4('');
  setEstadoBtnDer5('');
}

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
                  onClick={btnIzq1}
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
                  onClick={btnIzq2}>
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
                  onClick={btnIzq3}>
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
                onClick={btnIzq4}>
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
                  onClick={btnIzq5}>
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
                  onClick={btnIzq6}
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
          <div className="contCentro contAnimCen col-3">
            <form
              className="testC col-10"
              onSubmit={envioFormulario}>
                <div className="testC">
                  <div className="miniContenedor col-6">
                  <label className="estiloLabel">Nombre</label>
                  <input></input>
                  </div>
                  <div className="miniContenedor col-6">
                    <label>Apellido</label>
                    <input></input>
                  </div>
                  <div className="miniContenedor col-6">
                    <label>RUT</label>
                    <input></input>
                  </div>
                  <div className="miniContenedor col-6">
                    <label>Correo</label>
                    <input></input>
                  </div>
                  <div className="miniContenedor col-6">
                    <label>Sexo</label>
                    <select
                      className="estiloSelect"
                      value={sexo}
                      onChange={sexoChange}>
                      <option value="">Seleccionar sexo</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
              <button
                type="submit">
                  Registrarse
              </button>
            </form>
          </div>

          {/* DERECHA DERECHA DERECHA DERECHA DERECHA */}
          <div className="contBtnDifAnim contAnimDer col-3">
            <input
              className="col-8"
              ref={inputDerAlmacenado}/>
            
            <Snackbar
              open={open}
              onClose={handleClose}
              autoHideDuration={5000}>
              <Alert
                className={`alertaDer ${verifEstado(estadoAlertaDer) ? 'alertaDerCorr' : 'alertaDerIncorr'}`}
                onClose={handleClose}
                variant="filled"
                severity={estiloSvrty}
                icon={<DoneAllIcon color={`${verifEstado(estadoAlertaDer) ? 'secondary' : 'action'}`} fontSize="inherit"/>}
                >
                {msgAlertDer}
              </Alert>
            </Snackbar>
            <div className="contContBotones col-12">
              <div className="contBotones col-5">
                <Button
                  className={`estiloBtnDifAnim col-12 ${estadoBtnDer1}`}
                  onClick={btnDer1}>
                    Boton Derecho N°1
                </Button>
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
                <Button
                  className={`estiloBtnDifAnim col-12 ${estadoBtnDer2}`}
                  onClick={btnDer2}>
                    Boton Derecho N°2
                </Button>
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
                <Button
                  className={`estiloBtnDifAnim col-12 ${estadoBtnDer3}`}
                  onClick={btnDer3}>
                    Boton Derecho N°3
                </Button>
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
                <Button
                  className={`estiloBtnDifAnim col-12 ${estadoBtnDer4}`}
                  onClick={btnDer4}>
                    Boton Derecho N°4
                </Button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Solo escribir numeros
                  </li>
                </ul>
              </div>
            </div>

            <div className="contContBotones col-12">
              <div className="contBotones col-5">
                <Button
                  className={`estiloBtnDifAnim col-12 ${estadoBtnDer5}`}
                  onClick={btnDer5}>
                    Boton Derecho N°5
                </Button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                  Solo escribir letras
                  </li>
                </ul>
              </div>
              <div className="contBotones col-5">
                <Button
                  className="estiloBtnDifAnim col-12"
                  onClick={btnDer6}>
                    Reiniciar botones
                </Button>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Escribir "paralelo"
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <label
          className={`alertaAnimVanilla ${activAnim ? 'anim' : ''} ${ocultarAnim ? 'd-none' : ''}`}
          ref={refAlerAnim}>
            ALERTA VANILLA 😼
        </label>
      </div>
    </div>
  )
};

export default DiferentesAnim;