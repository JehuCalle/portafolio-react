import React, { useEffect, useRef, useState } from "react";

import '../Css/ExperimentoConBD.css';

function ExperimentoConBD (){

  const [ UEFormBD, setUEFormBD ] = useState(false);
  //PRIMERA PARTE
  const refTexto = useRef(null);
  const [ texto, setTexto ] = useState('');
  const refPass = useRef(null);
  const [ pass, setPass ] = useState('');
  const refNumeros = useRef(null);
  const [ numeros, setNumeros ] = useState('');
  const refEmail = useRef(null);
  const [ email, setEmail ] = useState('');
  //SEGUNDA PARTE
  const [ primerCheck, setPrimerCheck ] = useState(false);
  const [ segundoCheck, setSegundoCheck ] = useState(false);
  const [ tercerCheck, setTerceroCheck ] = useState(false);
  const [ cuartoCheck, setCuartoCheck ] = useState(false);
  const [ opcionRadio, setOpcionRadio ] = useState('');
  //TERCERA PARTE
  const refFecha = useRef(null);
  const [ fecha, setFecha ] = useState('');
  const refHora = useRef(null);
  const [ hora, setHora ] = useState('');
  const refArchivo = useRef('');
  const [ archivos, setArchivos ] = useState('');
  //CUARTA PARTE
  const refTextTarea = useRef(null);
  const [ textTarea, setTextTarea ] = useState('');

  // INGRESO DE DATOS
  const textoCaptura = (e) => {
    setTexto(refTexto.current.value);
  };
  const passCaptura = (e) => {
    setPass(refPass.current.value);
  };
  const numerosCaptura = (e) => {
    setNumeros(refNumeros.current.value);
  };
  const emailCaptura = (e) => {
    setEmail(refEmail.current.value);
  };
  // SELECCION CHECKBOX
  const primerCheckCaptura = (e) => {
    setPrimerCheck(!primerCheck);
  };
  const segundoCheckCaptura = (e) => {
    setSegundoCheck(!segundoCheck);
  };
  const tercerCheckCaptura = (e) => {
    setTerceroCheck(!tercerCheck);
  };
  const cuartoCheckCaptura = (e) => {
    setCuartoCheck(!cuartoCheck);
  };
  // SELECCION CHECK RADIO
  const detectarCambioRadio = (e) => {
    setOpcionRadio(e.target.value);
  };
  // INGRESO FECHA - HORA - ARCHIVO/S
  const fechaCambio = (e) => {
    setFecha(e.target.value);
  };
  const horaCambio = (e) => {
    setHora(e.target.value);
  };
  const archivoCambio = (e) => {
    setArchivos(e.target.files[0]);
  };
  // DESCRIPCION
  const textTareaCambio = (e) => {
    setTextTarea(e.target.value);
  };

  const [ datos, setDatos ] = useState([]);

  useEffect(()=>{
    if(UEFormBD === true){
      const nuevosDatosBD = {
        Texto: texto,
        Pass: pass,
        Numeros: numeros,
        Email: email,
        Primero: primerCheck,
        Segundo: segundoCheck,
        tercero: tercerCheck,
        Cuarto: cuartoCheck,
        Opcion: opcionRadio,
        Fecha: fecha,
        Hora: hora,
        Archivo: archivos,
        Descripcion: textTarea
      };

      setDatos(prevDatos => [...prevDatos, nuevosDatosBD]);

      console.log([...datos, nuevosDatosBD]);
      setUEFormBD(false);
    };
  }, [UEFormBD, texto, pass, numeros, email, datos, primerCheck, segundoCheck, tercerCheck, cuartoCheck, opcionRadio, fecha, hora, archivos, textTarea]);

  const envioFormMongoBD = (e) => {
    e.preventDefault();

    setUEFormBD(true);
  }

  return(
    <div
      className="col-12 cuerpoBD">
        
      <div className="col-12 contFormBD">
        <div className="col-12 tituloFormBD">
            Formulario para probar BD
        </div>
        <div className="col-4 estiloFormBD">          
          <form className="col-12 formBD">
            <div className="col-12 miniContFormBD">
              <input ref={refTexto} onChange={textoCaptura} type="text" placeholder="Cualquier texto :]"/>
              <input ref={refPass} onChange={passCaptura} type="password" placeholder="Contraseña :]"/>
              <input ref={refNumeros} onChange={numerosCaptura} type="number" placeholder="Solo numeros :]"/>
              <input ref={refEmail} onChange={emailCaptura} type="email" placeholder="Email :]"/>
            </div>
            <div className="col-12 miniContFormBD">
              <label className="col-12">Selecciona las que quieras :]</label>
              <div>
                primero
                <input value='primero' checked={primerCheck} onChange={primerCheckCaptura} type="checkbox"/>
                segundo
                <input value='segundo' checked={segundoCheck} onChange={segundoCheckCaptura} type="checkbox"/>
                tercero
                <input value='tercero' checked={tercerCheck} onChange={tercerCheckCaptura} type="checkbox"/>
                cuarto
                <input value='cuarto' checked={cuartoCheck} onChange={cuartoCheckCaptura} type="checkbox"/>
              </div>
            </div>
            <div className="col-12 miniContFormBD">
              <label className="col-12">Selecciona solo una opcion :]</label>
              <div>
                1
                <input type="radio" value='1' checked={opcionRadio === '1'} onChange={detectarCambioRadio}/>
                2
                <input type="radio" value='2' checked={opcionRadio === '2'} onChange={detectarCambioRadio}/>
                3
                <input type="radio" value='3' checked={opcionRadio === '3'} onChange={detectarCambioRadio}/>
                4
                <input type="radio" value='4' checked={opcionRadio === '4'} onChange={detectarCambioRadio}/>
              </div>
            </div>
            <div className="col-12 miniContFormBD">
              <label className="col-12">Ingresa fecha, hora y archivo/s :]</label>
              <input type="date" ref={refFecha} onChange={fechaCambio}/>
              <input type="time" ref={refHora} onChange={horaCambio}/>
              <input type="file" ref={refArchivo} onChange={archivoCambio}/>
            </div>
            <label>Descripcion</label>
            <input className="textareaFormBD" ref={refTextTarea} onChange={textTareaCambio} type="textarea"/>
          </form>
        </div>
      </div>
      <div
        className="col-6 contBasesDeDatos">
          <button onClick={envioFormMongoBD} type="submit">Enviar Formulario a MongoDB</button>
          MongoDB
      </div>
      <div
        className="col-6 contBasesDeDatos">
          <button type="submit">Enviar Formulario a MySQL</button>
          MySQL
      </div>
    </div>
  )
};

export default ExperimentoConBD;