import React, { useEffect, useRef, useState } from "react";

import JRDeletrear from '../Componentes/JuegosRND/JRDeletrear.jsx';
import JRPiPaTi from "../Componentes/JuegosRND/JRPiPaTi.jsx";
import JRPatron from "../Componentes/JuegosRND/JRPatron.jsx";
import JRAhorcado from "../Componentes/JuegosRND/JRAhorcado.jsx";
import JRBotonRND from "../Componentes/JuegosRND/JRBotonRND.jsx";


import '../Css/JuegosRNDcss/JuegosRND.css'; 


function JuegosRND(){
  const [ JRDelOcultar, setJRDelOcultar] = useState(false);
  const [ activarDeletrear, setActivarDeletrear ] = useState(false);

  const [ JRPiPaTiOcultar, setJRPiPaTiOcultar ] = useState(true);
  const [ activarPiPaTi, setActivarPiPaTi ] = useState(false);

  const [ JRPatronOcultar, setJRPatronOcultar ] = useState(true);
  const [ activarPatron, setActivarPatron ] = useState(false);

  const [ JRAhorcadoOcultar, setJRAhorcadoOcultar ] = useState(true);
  const [ activarAhorcado, setActivarAhorcado ] = useState(false);

  const [ JRBotonRndOcultar, setJRBotonRndOcultar ] = useState(true)
  const [ activarBotonRnd, setActivarBotonRnd ] = useState(false);;

  const [ estadoContGen, setEstadoContGen ] = useState(false);
  const [ contPartida, setContadorPartida ] = useState(110.00);

  const [ puntos, setPuntos ] = useState(0);
  const [ historialPuntos, setHistorialPuntos ] = useState([]);

  const [ juegoTerminado, setJuegoTerminado ] = useState(true);

  const [ btnCerrarGuia, setBtnCerrarGuia ] = useState(false);

  const guiaRef = useRef(null);

  const guiaBtnCerrar = () => {
    guiaRef.current.classList.add('guiaAnim');
    setTimeout(() => {
      setBtnCerrarGuia(true);
    }, 500);
  };

  const sumarPuntos = () => {
    setPuntos(puntos+1);
  };

  const cambiosActContGlob = (inicioContGlobOno) => {
    if( inicioContGlobOno === true){
      setEstadoContGen(true);
    };
  }; 

  const [ finDelOno, setFinDelOno ] = useState(null);
  const cambiosDeletrear = (finDelOno) => {
    setFinDelOno(finDelOno);
  };
  const [ finPPTOno, setFinPPTOno ] = useState(null);
  const cambiosPiPaTi = (finPPTOno) => {
    setFinPPTOno(finPPTOno);
  };
  const [ finPatronOno, setFinPatronOno ] = useState(null);
  const cambiosPatron = (finPatronOno) => {
    setFinPatronOno(finPatronOno);
  };
  const [ finAhorcadoOno, setFinAhorcadoOno ] = useState(null);
  const cambiosAhorcado = (finAhorcadoOno) => {
    setFinAhorcadoOno(finAhorcadoOno);
  };

  
  const BtnJRDelOcultar = () => {
    setJRDelOcultar((prev) => !prev);
  };
  const BtnJRPiPaTiOcultar = () => {
    setJRPiPaTiOcultar((prev) => !prev);
  };
  const BtnJRPatron = () => {
    setJRPatronOcultar((prev)=> !prev);
    setActivarPatron((prev) => !prev);
  };
  const BtnJRAhorcado = () => {
    setJRAhorcadoOcultar((prev) => !prev);
    setActivarAhorcado((prev) => !prev);
  };
  const BtnJRBotonRnd = () => {
    setJRBotonRndOcultar((prev) => !prev);
    setActivarBotonRnd((prev) => !prev);
  };

  useEffect(()=>{
    if(finDelOno === true){
      console.log('INICIO PIEDRA PAPEL TIJERA');
      setActivarDeletrear(true);
      setEstadoContGen(true)
      setJRDelOcultar((prev) => !prev);
      setJRPiPaTiOcultar((prev) => !prev);
      setActivarPiPaTi((prev) => !prev);
      setFinDelOno(false);
    }
    if(finPPTOno === true){
      console.log('INICIO PATRON');
      setJRPiPaTiOcultar((prev) => !prev);
      setActivarPiPaTi((prev) => !prev);
      setFinPPTOno(false);

      setJRPatronOcultar((prev)=> !prev);
      setActivarPatron((prev) => !prev);
    }
    if(finPatronOno === true){
      console.log('INICIO AHORCADO');
      setJRPatronOcultar((prev)=> !prev);
      setActivarPatron((prev) => !prev);
      setFinPatronOno(false);

      setJRAhorcadoOcultar((prev) => !prev);
      setActivarAhorcado((prev) => !prev);
    }
    if(finAhorcadoOno === true) {
      console.log('INICIO BOTON RANDOM');
      setJRAhorcadoOcultar((prev) => !prev);
      setActivarAhorcado((prev) => !prev);
      setFinAhorcadoOno(false);

      setJRBotonRndOcultar((prev) => !prev);
      setActivarBotonRnd((prev) => !prev);
    };
  },[finDelOno, finPPTOno, finPatronOno, finAhorcadoOno]);


  useEffect(()=>{
    let inicioCont;
    if( estadoContGen === true && contPartida > 0 ){
      inicioCont = setInterval(() => {
        setContadorPartida((prevContadorPartida) => Math.max(prevContadorPartida - 0.01, 0));
      }, 10);
    }else if (contPartida === 0){
      setEstadoContGen(false);
      clearInterval(inicioCont);

      setJRDelOcultar(false);
      setActivarDeletrear(true);
      setTimeout(() => {
        setActivarDeletrear(false);
      }, 500);
  
      setJRPiPaTiOcultar(true);
      setActivarPiPaTi(false);
  
      
      setJRPatronOcultar(true);
      setActivarPatron(false);
  
      setJRAhorcadoOcultar(true);
      setActivarAhorcado(false);
  
      setJRBotonRndOcultar(true);
      setActivarBotonRnd(false);
  
      setEstadoContGen(false);
      setContadorPartida(110.00);
  
      setFinDelOno(false);
      setFinPPTOno(false);
      setFinPatronOno(false);
      setFinAhorcadoOno(false);
      setJuegoTerminado(false);
  
      if(historialPuntos.length === 0){
        setHistorialPuntos([puntos]);
      }else{
        setHistorialPuntos((prevHistorialPuntos) => [...prevHistorialPuntos,', '+ puntos]);
      };
      console.log('CONTADOR TERMINADO');
    };

    return () => clearInterval(inicioCont);
  },[estadoContGen, contPartida, historialPuntos, puntos]);


  //  PONER UN BOTON PARA REINICIAR LA PARTIDA EN CUALQUIER MOMENTO Y AL TERMINAR LA PARTIDA

  const btnReiniciar = (e) => {
    e.preventDefault();
    console.log(e.target);

    setJRDelOcultar(false);
    setActivarDeletrear(true);
    setTimeout(() => {
      setActivarDeletrear(false);
    }, 500);

    setJRPiPaTiOcultar(true);
    setActivarPiPaTi(false);

    
    setJRPatronOcultar(true);
    setActivarPatron(false);

    setJRAhorcadoOcultar(true);
    setActivarAhorcado(false);

    setJRBotonRndOcultar(true);
    setActivarBotonRnd(false);

    setEstadoContGen(false);
    setContadorPartida(110.00);

    setFinDelOno(false);
    setFinPPTOno(false);
    setFinPatronOno(false);
    setFinAhorcadoOno(false);

    setJuegoTerminado(true);

    setPuntos(0);
    console.log('BTN REINICIAR');
  };


  //  HACER TODO EL SITIO RESPONSIVE PARA DISPOSITIVOS MOBILES
  

  return(
    <div className="compAll">
      <div className={`contTerminado ${juegoTerminado ? 'd-none' : ''}`}>
        PUNTOS BOTENIDOS: {puntos}
        <button
          className="rndReintentarBtn"
          onClick={btnReiniciar}>
          REINTENTAR
        </button>
      </div>
      {/*
      <div className="d-flex position-absolute">
        <button
          onClick={BtnJRDelOcultar}>
            Deletrear
        </button>
        <button
          onClick={BtnJRPiPaTiOcultar}>
          PiPaTi
        </button>
        <button
          onClick={BtnJRPatron}>
          Patron
        </button>
        <button
          onClick={BtnJRAhorcado}>
          Ahorcado
        </button>
        <button
          onClick={BtnJRBotonRnd}>
          BotonRnd
        </button>
        <button>
          TEST
        </button>
      </div>
      */}
      <div className="col-12 puntos">
        <div className="contTxtPuntos">
          <label className="txtPuntos">Puntos: {puntos}</label>
        </div>
        <button
          className="btnReiniciarJR"
          onClick={btnReiniciar}>
            Reiniciar
        </button>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="contContadorPartida">
          Tiempo: {contPartida.toFixed(2)}
        </div>
      </div>
      <div
        className={`guia ${btnCerrarGuia ? 'd-none' : ''}`}
        ref={guiaRef}>
        <div className="guiaHijo">
          <div
            className="guiaBtnCerrar">
            <button
              onClick={guiaBtnCerrar}
              >「X」
            </button>
          </div>
          <div className="guiaInt">
            <h1>Juegos 🐈‍⬛</h1>
            <h5>En 110 segundos intenta completar todos los juegos y obtener la mayor cantidad de puntos posibles.</h5>
            <div className="col-12 guiaIntF1">
              <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xxl-2 guiaNotitas">
                <h1>Deletrear</h1>
                <label>Deletrea la mayor cantidad de palabras que puedas en 15 segundos.</label>
              </div>
              <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xxl-2 guiaNotitas">
                <h1>Piedra Papel Tijera</h1>
                <label>Derrota al enemigo acertando 3 veces para quitarle 1 de las 3 vidas al enemigos para ganar.</label>
              </div>
              <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xxl-2 guiaNotitas">
                <h1>Botón</h1>
                <label>Sigue al botón y dale click lo mas rapido posible para hacer mucho mas puntos hasta que se acabe el tiempo</label>
              </div>
            </div>
            <div className="guiaIntF1">
              <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 guiaNotitas">
                <h1>Patrón</h1>
                <label>Memoriza el patrón 6 veces en donde cada vez aumenta 1 color.</label>
              </div>
              <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 guiaNotitas">
                <h1>Ahorcado</h1>
                <label>Adivina la palabra ingresando con enter 1 letra</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JRDeletrear
        deletrearOcultar={`${JRDelOcultar ? 'd-none' : ''}`}
        deletrarFin={cambiosDeletrear}
        activarContGlob={cambiosActContGlob}
        pasarSumarPuntos={sumarPuntos}
        activar={activarDeletrear}>
      </JRDeletrear>
      <JRPiPaTi
        piPaTiOcultar={`${JRPiPaTiOcultar ? 'd-none' : ''}`}
        piPaTiFin={cambiosPiPaTi}
        pasarSumarPuntos={sumarPuntos}      
        activar={activarPiPaTi}>
      </JRPiPaTi>
      <JRPatron
        patronOcultar={`${JRPatronOcultar ? 'd-none' : ''}`}
        patronFin={cambiosPatron}
        pasarSumarPuntos={sumarPuntos}
        activar={activarPatron}>
      </JRPatron>
      <JRAhorcado
        ahorcadoOcultar={`${JRAhorcadoOcultar ? 'd-none' : ''}`}
        ahorcadoFin={cambiosAhorcado} 
        pasarSumarPuntos={sumarPuntos}
        activar={activarAhorcado}>
      </JRAhorcado>
      <JRBotonRND
        botonRndOcultar={`${JRBotonRndOcultar ? 'd-none' : ''}`}
        pasarSumarPuntos={sumarPuntos}
        activar={activarBotonRnd}>
      </JRBotonRND>
      <div>
        {historialPuntos}
      </div>
    </div>
  );
};

export default JuegosRND;