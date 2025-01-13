import React, { useEffect, useState } from "react";

import '../../Css/JuegosRNDcss/JRPiPaTi.css';

import Default from '../../Img/JuegosRND/PiPaTi/Default.gif';
import Piedra from '../../Img/JuegosRND/PiPaTi/Piedra.gif';
import Papel from '../../Img/JuegosRND/PiPaTi/Papel.gif';
import Tijera from '../../Img/JuegosRND/PiPaTi/Tijera.gif';


//  PONER QUE TODO SE ACTIVE Y DESACTIVE MEDIANTE EL activar AL IGUAL QUE EL DELETREAR


function JRPiPaTi({pasarSumarPuntos, piPaTiOcultar, piPaTiFin, activar}) {

  const [ eleccionEnemigo, setEleccionEnemigo ] = useState('');
  const [ eleccionJugador, setEleccionJugador ] = useState('');
  const [ estadoPartida, setEstadoPartida ] = useState('...');
  const [ UEEleccion, setUEEleccion ] = useState(false);

  const [ contadorVicUs, setContadorVicUs ] = useState(0);
  const [ contadorJefeDerr, setContadorJefeDerr ] = useState(0);

  const [ btnPi, setBtnPi ] = useState(false);
  const [ btnPa, setBtnPa ] = useState(false);
  const [ btnTi, setBtnTi ] = useState(false);

  const [ ataqueUsSty, setAtaqueUsSty ] = useState({
    width: '0%'
  });

  const [ contadorVicEne, setContadorVicEne ] = useState(0) 
  const [ contadorUsDerr, setContadorUsDerr ] = useState(0);
  const [ ataqueEneSty, setAtaqueEneSty ] = useState({
    width: '0%'
  });  

  const [ vidasUs, setVidasUs ] = useState(3);
  const [ VidasEne, setVidasEne ] = useState(3);


  const [ tipoGifEn, setTipoGifEn ] = useState(Default);


  // HACER QUE AL ESCOGER UNA OPCIÓN SE DESACTIVEN LOS BOTONES HASTA QUE TERMINEN LAS ANIMACIONES


  const piPaTiRND = () => {
    const calculo = Math.floor(Math.random() * 3) + 1;
    if(calculo === 1){
      setEleccionEnemigo('piedra');
      setTipoGifEn(`${Piedra}?t=${new Date().getTime()}`);

      setTimeout(() => {
        setTipoGifEn(`${Default}?t=${new Date().getTime()}`);
      }, 1600);
    }else if(calculo === 2){
      setEleccionEnemigo('papel');
      setTipoGifEn(`${Papel}?t=${new Date().getTime()}`);

      setTimeout(() => {
        setTipoGifEn(`${Default}?t=${new Date().getTime()}`);
      }, 2000);
    }else if(calculo === 3){
      setEleccionEnemigo('tijera');
      setTipoGifEn(`${Tijera}?t=${new Date().getTime()}`);

      setTimeout(() => {
        setTipoGifEn(`${Default}?t=${new Date().getTime()}`);
      }, 2000);
    }
    setUEEleccion(true);
  };

  const btnPiedra = (e) => {
    setEleccionJugador('piedra');
    piPaTiRND();
    setBtnPi(true);
    setBtnPa(true);
    setBtnTi(true);
    setTimeout(() => {
      setBtnPi(false);
      setBtnPa(false);
      setBtnTi(false);
    }, 2000);
  };
  const btnPapel = (e) => {
    setEleccionJugador('papel');
    piPaTiRND();
    setBtnPi(true);
    setBtnPa(true);
    setBtnTi(true);
    setTimeout(() => {
      setBtnPi(false);
      setBtnPa(false);
      setBtnTi(false);
    }, 2000);
  };
  const btnTijera = (e) => {
    setEleccionJugador('tijera');
    piPaTiRND();
    setBtnPi(true);
    setBtnPa(true);
    setBtnTi(true);
    setTimeout(() => {
      setBtnPi(false);
      setBtnPa(false);
      setBtnTi(false);
    }, 2000);
  };

  useEffect(()=>{
    if(activar === false){
      setContadorVicUs(0);
      setContadorJefeDerr(0);
      setContadorVicEne(0);
      setContadorUsDerr(0);
      setVidasUs(3);
      setVidasEne(3);

      setAtaqueUsSty({
        width: '0%'
      });
      setAtaqueEneSty({
        width: '0%'
      });
    };
  },[activar]);

  useEffect(()=>{
    if(UEEleccion === true){
      if(eleccionEnemigo !== '' && eleccionJugador !== ''){
        if(eleccionEnemigo === eleccionJugador){
          setEstadoPartida('EMPATE');
          console.log('EMPATE');
        }else if((eleccionEnemigo === 'piedra' && eleccionJugador === 'papel') || (eleccionEnemigo === 'papel' && eleccionJugador === 'tijera') || (eleccionEnemigo === 'tijera' && eleccionJugador === 'piedra')){
          setEstadoPartida('GANASTE');
          console.log('GANASTE');
          setContadorVicUs(contadorVicUs+1)
        }else if((eleccionEnemigo === 'piedra' && eleccionJugador === 'tijera') || (eleccionEnemigo === 'papel' && eleccionJugador === 'piedra') || (eleccionEnemigo === 'tijera' && eleccionJugador === 'papel')){
          setEstadoPartida('PERDISTE');
          console.log('PERDISTE');
          setContadorVicEne(contadorVicEne+1);
        };
      };
      console.log('ENEMIGO: '+eleccionEnemigo)
      console.log('JUGADOR: '+eleccionJugador);
      setUEEleccion(false);
    };
  },[UEEleccion, eleccionEnemigo, eleccionJugador, contadorVicUs, contadorVicEne])

  useEffect(()=>{
    if(contadorVicUs === 1){
      setAtaqueUsSty({
        width: '33%'
      });
    }else if(contadorVicUs === 2){
      setAtaqueUsSty({
        width: '66%'
      });
    }else if(contadorVicUs === 3){
      setBtnPi(true);
      setBtnPa(true);
      setBtnTi(true);
      setVidasEne(VidasEne-1);
      setAtaqueUsSty({
        width: '100%'
      });
      setContadorVicUs(0);
      setContadorVicEne(0);
      setContadorJefeDerr(contadorJefeDerr+1);
      setTimeout(() => {
        setBtnPi(false);
        setBtnPa(false);
        setBtnTi(false);
        setAtaqueUsSty({
          width: '0%'
        });
        setAtaqueEneSty({
          width: '0%'
        });
      }, 2000);
    };

    if(contadorVicEne === 1){
      setAtaqueEneSty({
        width: '33%'
      });
    }else if(contadorVicEne === 2){
      setAtaqueEneSty({
        width: '66%'
      });
    }else if(contadorVicEne === 3){
      setBtnPi(true);
      setBtnPa(true);
      setBtnTi(true);
      setVidasUs(vidasUs-1);
      setAtaqueEneSty({
        width: '100%'
      });
      setContadorVicEne(0);
      setContadorVicUs(0);
      setContadorUsDerr(contadorUsDerr+1);
      setTimeout(() => {
        setBtnPi(false);
        setBtnPa(false);
        setBtnTi(false);
        setAtaqueEneSty({
          width: '0%'
        });
        setAtaqueUsSty({
          width: '0%'
        });
      }, 2000);
    };

  },[contadorVicUs, contadorJefeDerr, VidasEne, contadorVicEne, vidasUs, contadorUsDerr]);





  useEffect(()=>{
    if(contadorJefeDerr === 3){
      console.log("DERROTASTE AL JEFE");
      setContadorJefeDerr(0);
      setContadorUsDerr(0);
      setTimeout(() => {
        setVidasEne(3);
        setVidasUs(3);
      }, 2000);
      pasarSumarPuntos();
      piPaTiFin(true);
    };
    if(contadorUsDerr === 3){
      console.log('NO TE QUEDAN VIDAS');
      setContadorUsDerr(0);
      setContadorJefeDerr(0);
      setTimeout(() => {
        setVidasEne(3);
        setVidasUs(3);
      }, 2000);
    }
  },[contadorJefeDerr, pasarSumarPuntos, contadorUsDerr]);

  return(
    <div className={`contGlobPiPaTi ${piPaTiOcultar}`}>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 enemigo">
          <div className="col-9">
            <div
              className="pptUsAtaque"
              style={ataqueEneSty}>
            </div>
          </div>
          <img className={`imgEnemigo`} src={tipoGifEn} alt="Default"/>
          <label>{eleccionEnemigo}</label>
          <div>
            vidas: {VidasEne}
          </div>
        </div>
      </div>

      <label>
        {estadoPartida}
      </label>

      <div className="pptUsuario">
        <div>
          vidas: {vidasUs}
        </div>
        <div className="">
          <button
            onClick={btnPiedra}
            disabled={btnPi}>
            piedra
          </button>
          <button
            onClick={btnPapel}
            disabled={btnPa}>
            papel
          </button>
          <button
            onClick={btnTijera}
            disabled={btnTi}>
            tijera
          </button>
        </div>
        <div className="col-12">
          <div
            className="pptUsAtaque"
            style={ataqueUsSty}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JRPiPaTi;