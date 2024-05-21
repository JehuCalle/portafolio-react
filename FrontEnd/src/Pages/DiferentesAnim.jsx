import React, {useState, useEffect, useRef} from "react";

import mostrarPass from '../Img/Proyecto4Form/MostrarPass.png'
import ocultarPass from '../Img/Proyecto4Form/OcultarPass.png'

import { Alert, fabClasses } from "@mui/material";
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

  const verifCondicion = estadoAlerIzq => {
    return (estadoAlerIzq === true);
  }
  const ocultarONoAlerta = ocultar => {
    return (ocultar === true);
  }

  /* #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA #### IZQUIERDA */

/* BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 BTN 1 */

  const refAnimBtn1 = useRef(null);

  const btnIzq1 = () => {
    refAnimBtn1.current.classList.add('animBtn1');
    if (inputAlmacenado.current.value === 'Angora') {
      alertaAlmacenada.current.textContent = 'Bien hecho, botón N°1 completado!!!';
      setCumpleCondicion(true);
      setOcultarAlertONo(false);
    } else {
      alertaAlmacenada.current.textContent = 'Tienes que escribir "Angora" :]';
      setCumpleCondicion(false);
      setOcultarAlertONo(false);
    }

    setTimeout(() => {
      if(refAnimBtn1.current === null) {
        console.log('refAnimBtn1 null');
      }else if (refAnimBtn1.current !== null){
        refAnimBtn1.current.classList.remove('animBtn1')
      }
    },500)
  };

/* BTN 2 BTN 2 BTN 2 BTN 2 BTN 2 BTN 2 */

  const [ resBtn2, setResBtn2 ] = useState('');
  const [ estadoUEBtn2, setEstadoUEBtn2 ] = useState(false);

  const refAnimBtn2 = useRef(null);

  const btnIzq2 = () => {
    setEstadoUEBtn2(true);
    setResBtn2(inputAlmacenado.current.value);
    refAnimBtn2.current.classList.add('animBtn2');
    setTimeout(() => {
      if(refAnimBtn2.current === null) {
        console.log('refAnimBtn2 null');
      } else if (refAnimBtn2.current !== null) {
        refAnimBtn2.current.classList.remove('animBtn2');
      }
    },800);
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

  const refAnimBtn3 = useRef(null);

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
        refAnimBtn3.current.classList.add('animBtn3Correcto');
        setTimeout(()=>{
          if(refAnimBtn3.current === null) {
            console.log('refAnimBtn3 null');
          }else if(refAnimBtn3.current !== null) {
            refAnimBtn3.current.classList.remove('animBtn3Correcto');
          }
        },900);
      } else {
        alertaAlmacenada.current.textContent = 'Tienes que escribir "Guallaby" :]';
        setCumpleCondicion(false);
        refAnimBtn3.current.classList.add('animBtn3Incorrecto');
        setTimeout(()=>{
          if(refAnimBtn3.current === null) {
            console.log('refAnimBtn3 null');
          }else if(refAnimBtn3.current !== null) {
            refAnimBtn3.current.classList.remove('animBtn3Incorrecto');
          }
        },900);
      };

      setEstadoUEBtn3(false);
    }
  }, [estadoUEBtn3, resBtn3]);

/* BTN 4 BTN 4 BTN 4 BTN 4 BTN 4 BTN 4 */

  const regexSoloNumYSpaBla = /^[0-9\s]+$/;
  const [ estadoUEBtn4, setEstadoUEBtn4 ] = useState(false);
  const [ estadoResBtn4, setEstadoResBtn4 ] = useState(false);

  const refAnimBtn4 = useRef(null);

  const btnIzq4 = () => {
    setEstadoUEBtn4(true);
    setEstadoResBtn4(regexSoloNumYSpaBla.test(inputAlmacenado.current.value));
    refAnimBtn4.current.classList.add('animBtn4');
    setTimeout(() => {
      if(refAnimBtn4.current === null) {
        console.log('refAnimBtn4 null');
      }else if(refAnimBtn4.current !== null) {
        refAnimBtn4.current.classList.remove('animBtn4');
      }
    }, 2000);
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

  const refAnimBtn5 = useRef(null);

  const btnIzq5 = () => {
    setEstadoUEBtn5(true);
    setEstadoResBtn5(regexSoloLetYSpaBla.test(inputAlmacenado.current.value));
    refAnimBtn5.current.classList.add('animBtn5');
    setTimeout(()=>{
      if(refAnimBtn5.current === null) {
        console.log('refAnimBtn5 null');
      }else if(refAnimBtn5 !== null) {
        refAnimBtn5.current.classList.remove('animBtn5');
      }
    },900);
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

  const refNombre = useRef(null);
  const [ nombre, setNombre ] = useState("");

  const refApellido = useRef(null);
  const [ apellido, setApellido ] = useState("");

  const validRut = /^\d{7,8}-[0-9kK]$/;
  const refRut = useRef(null);
  const [ rut, setRut ] = useState("");

  const validCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const refCorreo = useRef(null);
  const [ correo, setCorreo ] = useState("");

  const [ sexo, setSexo ] = useState("");

  const validPass = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  const refPass = useRef(null);
  const [ pass, setPass ] = useState("");
  const [ tipoPass, setTipoPass ] = useState('password');

  const [ imgPass, setImgPass ] = useState(ocultarPass);

  const [ estadoUEForm, setEstadoUEForm ] = useState(false);

  const [ usuarios, setUsuarios ] = useState([]);

  const nombreChange = () => {
    setNombre(refNombre.current.value);
  };

  const apellidoChange = () => {
    setApellido(refApellido.current.value);
  };

  const rutChange = () => {
    setRut(refRut.current.value);
  };

  const correoChange = () => {
    setCorreo(refCorreo.current.value);
  };

  const sexoChange = (e) => {
    setSexo(e.target.value);
  };

  const passChange = () => {
    setPass(refPass.current.value);
  };

  const oculMostPass = () => {
    if (imgPass === mostrarPass) {
      setImgPass(ocultarPass);
      setTipoPass('password');
    } else if (imgPass === ocultarPass) {
      setImgPass(mostrarPass);
      setTipoPass('text');
    }
  }

  const envioFormulario = (e) => {
    e.preventDefault();

    setEstadoUEForm(true);
  };

  useEffect(()=>{
    if(estadoUEForm === true){
      setOpen(true);
      if (nombre !== "" && apellido !== "" && validRut.test(refRut.current.value) === true && validCorreo.test(refCorreo.current.value) === true && sexo !== "" && validPass.test(refPass.current.value) === true) {
        setMsgAlertDer('Registrado!!!')
        setEstadoAlertaDer(true);
        setEstiloSvrty('success');

        const nuevoUsuario = {
          Nombre: nombre,
          Apellido: apellido,
          Rut: rut,
          Correo: correo,
          Sexo: sexo,
          Pass: pass
        };

        setUsuarios(prevUsuarios => [...prevUsuarios, nuevoUsuario]);

        console.log([...usuarios, nuevoUsuario]);

      } else {
        setMsgAlertDer('Tienes que completar el formulario :]')
        setEstadoAlertaDer(false);
        setEstiloSvrty('error')
      }
      setEstadoUEForm(false);
    }
  },[estadoUEForm, nombre, apellido, rut, correo, sexo, pass, usuarios]);

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
        <div className="contContCont col-12">
          {/* IZQUIERDA IZQUIERDA IZQUIERDA IZQUIERDA IZQUIERDA */}
          <div className="contAnimIzq col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3">
            <label className="tituloAlerVanilla col-6 col-sm-5"> ALERTAS VANILLA</label>
            <div className="contBtnDifAnim">
              <div className="contAlertaVanilla col-12">
                <label
                  className={`alertaVanilla col-12 ${verifCondicion(cumpleCondicion) ? 'alerVaCorr' : 'alerVaInco'} ${ocultarONoAlerta(ocultarAlertONo) ? 'd-none' : ''}`}
                  ref={alertaAlmacenada}
                  >Alerta Vanilla tst
                </label>
              </div>
              <input
                id="inputMsg"
                className="col-8"
                ref={inputAlmacenado}/>


              <div className="contContBotones col-12">
                <div className="contBotones col-5">
                  <div className="contBtn">
                    <button
                      className="estiloBtnDifAnim col-12"
                      onClick={btnIzq1}>
                      <div className="conTxtBtn">
                        <label>Botón N°1</label>
                      </div>
                      <div className="contAnimBtn1">
                        <div
                          className=""
                          ref={refAnimBtn1}>
                        </div>
                      </div>
                    </button>
                  </div>
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
                  <div className="contBtn">
                    <button
                      className="estiloBtnDifAnim col-12"
                      onClick={btnIzq2}
                      ref={refAnimBtn2}>
                      <div className="conTxtBtn">
                        <label>Botón N°2</label>
                      </div>
                    </button>
                  </div>
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
                  <div className="contBtn">
                    <button
                      className="estiloBtnDifAnim animBtn3 col-12"
                      onClick={btnIzq3}
                      ref={refAnimBtn3}>
                      <div className="conTxtBtn">
                        <label>Botón N°3</label>
                      </div>
                    </button>
                  </div>
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
                  <div className="contBtn">
                    <button
                      className="estiloBtnDifAnim col-12"
                      onClick={btnIzq4}
                      ref={refAnimBtn4}>
                      <div className="conTxtBtn ">
                        <label>Botón N°4</label>
                      </div>
                    </button>
                  </div>
                  <ul className="paddingUl">
                    <li className="tamañoLi">
                      Solo escribir numeros
                    </li>
                  </ul>
                </div>
              </div>


              <div className="contContBotones col-12">
                <div className="contBotones col-5">
                  <div className="contBtn">
                    <button
                      className="estiloBtnDifAnim col-12"
                      onClick={btnIzq5}
                      ref={refAnimBtn5}>
                      <div className="conTxtBtn">
                        <label>Botón N°5</label>
                      </div>
                    </button>
                  </div>
                  <ul className="paddingUl">
                    <li className="tamañoLi">
                      Solo escribir letras
                    </li>
                  </ul>
                </div>


                <div className="contBotones col-5">
                  <div className="contBtn">
                    <button
                      className="estiloBtnDifAnim col-12"
                      onClick={btnIzq6}>
                      <div className="conTxtBtn">
                        <label>Botón N°6</label>
                      </div>
                    </button>
                  </div>
                  <ul className="paddingUl">
                    <li className="tamañoLi">
                      ¿?¿?¿?¿?¿?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CENTRO CENTRO CENTRO CENTRO CENTRO */}
          <div className="contAnimCen col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <label className="tituloAlerMUI col-6 col-md-7"> ALERTAS CON MUI CORE</label>
            <div className="contCentro col-11">
              <form
                className="estiloForm col-12"
                onSubmit={envioFormulario}>
                <div className="estiloForm">
                  <div className="miniContenedor col-6">
                  <label className="estiloLabel">Nombre</label>
                  <input
                    onChange={nombreChange}
                    ref={refNombre}/>
                  </div>
                  <div className="miniContenedor col-6">
                    <label className="estiloLabel">Apellido</label>
                    <input
                      onChange={apellidoChange}
                      ref={refApellido}/>
                  </div>
                  <div className="miniContenedor col-6">
                    <label className="estiloLabel">RUT</label>
                    <input
                      placeholder="Ej: 12345678-9"
                      onChange={rutChange}
                      ref={refRut}/>
                  </div>
                  <div className="miniContenedor col-6">
                    <label className="estiloLabel">Correo</label>
                    <input
                      onChange={correoChange}
                      ref={refCorreo}/>
                  </div>
                  <div className="miniContenedor col-6">
                    <label className="estiloLabel">Sexo</label>
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
                  <div className="miniContenedor col-6">
                    <label className="estiloLabel">Contraseña</label>
                    <div className="contPassComp">
                      <input
                        className="inputPass col-12"
                        type={tipoPass}
                        onChange={passChange}
                        ref={refPass}
                        />
                      <button
                        className="btnOcultarPass"
                        type="button"
                        onClick={oculMostPass}>
                        <img
                          className="imgBtnOcuMosPass"
                          src={imgPass}
                          alt="imgPass"/>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="contenedorBtnForm col-12">
                  <button
                    type="submit">
                      Registrarse
                  </button>
                </div>
              </form>
              <div className="contenedorReq colorTxtReq col-12">
                <label className="colorTxtReq col-12">La contraseña debe tener minimo:</label>
                <ul className="paddingUl">
                  <li className="tamañoLi">
                    Una letra mayuscula
                  </li>
                  <li className="tamañoLi">
                    Un numero
                  </li>
                  <li className="tamañoLi">
                    8 caracteres
                  </li>
                </ul>
              </div>
            </div>  
          </div>

          {/* DERECHA DERECHA DERECHA DERECHA DERECHA */}
          <div className=" col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 contAnimDer col-xxl-3">
            <label className="tituloAlerMUI col-6 col-md-7"> ALERTAS CON MUI CORE</label>
            <div className="contBtnDifAnim">
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