import React, {useState, useEffect, useRef} from "react";

import '../../Css/JuegosRNDcss/JRBotonRND.css';

function JRBotonRND({pasarSumarPuntos, botonRndOcultar, activar}){

  const contGlob = useRef();

  const [ tamañoAlto, setTamañoAlto ] = useState('');
  const [ tamañoAncho, setTamañoAncho ] = useState('');

  const [ click, setclick ] = useState(false);

  const [ posicionBtn, setPosicionBtn ] = useState({
    top: '0px',
    left: '0px',
  });


  useEffect(()=>{
    const tamañoJRBtnRnd = () => {
      setTamañoAlto(contGlob.current.clientHeight);
      setTamañoAncho(contGlob.current.clientWidth);
    };
    window.addEventListener('resize', tamañoJRBtnRnd);
    return () => {
      window.removeEventListener('resize', tamañoJRBtnRnd);
    };
  },[]);


  const nuevoPosicionBtn = () => {
    const nuevaPosicionTop = (Math.floor(Math.random() * tamañoAlto));
    const nuevaPosicionLeft = (Math.floor(Math.random() * tamañoAncho));
    setPosicionBtn({
      top: nuevaPosicionTop+"px",
      left: nuevaPosicionLeft+'px',
    })
  };

  const botonEvento = () => {
    setclick(true);
  };

  useEffect(()=>{
    if(activar === true){
      if(tamañoAlto !== '' && tamañoAncho !== ''){
        nuevoPosicionBtn();
        console.log(tamañoAlto);
        console.log(tamañoAncho);
      }else if(tamañoAlto === '' && tamañoAncho === ''){
        setTamañoAlto(contGlob.current.clientHeight);
        setTamañoAncho(contGlob.current.clientWidth);
      }
    }else if(activar === false){
      setTamañoAlto('');
      setTamañoAncho('');
    };
  },[activar, tamañoAlto, tamañoAncho]);

  useEffect(()=> {
    if(click === true){
      nuevoPosicionBtn();
      setclick(false);
      pasarSumarPuntos();
    }
  },[click]);

  //  PONER QUE AL PRESIONAR EL BOTON SE INCREMENTEN LOS PUNTOS Y QUE SE PONGA VERDE O ALGUN SONIDO PARA SEÑALAR QUE SI SE LE DIO CLICK

  return(
    <div
      className={`contBtnGlob ${botonRndOcultar}`}>
        <div
          className="contBtnRnd"
          ref={contGlob}>
          <button
            className="botonRnd"
            style={posicionBtn}
            onClick={botonEvento}>
            PRESIONA
          </button>
        </div>
    </div>
  );
};

export default JRBotonRND;