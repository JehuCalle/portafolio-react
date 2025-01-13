import React, {useState, useEffect, useRef} from "react";

import '../../Css/JuegosRNDcss/JRPatron.css';

function JRPatron({pasarSumarPuntos, patronOcultar, activar, patronFin}){

  const btnRojoRef = useRef(null);
  const btnAzulRef = useRef(null);
  const btnVerdeRef = useRef(null);
  const btnMoradoRef = useRef(null);
  const btnAmarilloRef = useRef(null);
  const btnCelesteRef = useRef(null);
  const btnNaranjaRef = useRef(null);

  const [ listaBtn, setListaBtn ] = useState([]);

  const [ juegoActivo, setJuegoActivo ] = useState(false);

  const [ listaPatron, setListaPatron ] = useState([]);
  const [ listaIngresados, setListaIngresados ] = useState([]);

  const [ turnoJugador, setTurnoJugador ] = useState('espera'); 
  const [ ingresar, setIngresar ] = useState(false);

  const [ txtEstado, setTxtEstado ] = useState('🐈‍⬛');

  const [ botonesAct, setBotonesAct ] = useState(true);  

  const [ clasTurno, setClasTurno ] = useState('turnoDesACT');

  const [ contAciertos, setContAciertos ] = useState(0);
  const [ puntosGanados, setPuntosGanados ] = useState(0);


  const posicionBtnPatron = () => {
    const posicion = Math.floor(Math.random() * 7) + 0;
    const btnEscogido = listaBtn[posicion];
    setListaPatron((prev) => [...prev, btnEscogido]);
  };

  useEffect(()=>{
    if(btnRojoRef?.current && btnAzulRef?.current && btnVerdeRef?.current && btnMoradoRef?.current && btnAmarilloRef?.current && btnCelesteRef?.current && btnNaranjaRef?.current){
      setListaBtn([btnRojoRef.current, btnAzulRef.current, btnVerdeRef.current, btnMoradoRef.current, btnAmarilloRef.current, btnCelesteRef.current, btnNaranjaRef.current]);
      console.log('😼');
    }else{
      console.log('🦝');
    };
  },[]);

  const agregarBtn = (e) => {
    setListaIngresados((prev) => [...prev, e.target]);
  };

  const compararListas = () => {
    if(listaPatron.length !== listaIngresados.length){
      return 'no';
    };
    
    let sonIguales = true;

    for(let contador = 0 ; contador < listaPatron.length ; contador++){
      if(listaPatron[contador] !== listaIngresados[contador]){
        sonIguales = false;
      };
    };
    return sonIguales ? 'si' : 'no';
  };

  useEffect(()=>{
    if(activar === true){
      console.log('inicio patron 🐈‍⬛');
      setJuegoActivo(true);
      posicionBtnPatron();
      setIngresar(false);
      setClasTurno('turnoDesAct');
    }else if (activar === false){
      console.log('Fin patron 🐈‍⬛');
      setJuegoActivo(false);
      setTurnoJugador('espera');
      setListaPatron([]);
      setListaIngresados([]);
      setTxtEstado('🐈‍⬛');
      setContAciertos(0);
      setPuntosGanados(0);
    };
  },[activar]);

  useEffect(()=>{
    if(juegoActivo === true){
      if(turnoJugador === 'espera'){
        if( ingresar === false){
          for( let contador = 0 ; contador < listaPatron.length ; contador++){
            setTimeout(() => {
              listaPatron[contador].classList.add((listaPatron[contador].textContent).toLowerCase() + 'Act');
              setTimeout(() => {
                listaPatron[contador].classList.remove((listaPatron[contador].textContent).toLowerCase() + 'Act');
              }, 600);
            }, contador * 1000);
            setTimeout(() => {
              setBotonesAct(false);
              setIngresar(true);
              setClasTurno('turnoAct');
              
            }, (listaPatron.length) * 1000);
          };
          console.log('en espera...')
        }else if(ingresar === true && botonesAct === false){
          if(listaPatron.length === listaIngresados.length){
            setTurnoJugador('si');
          };
        };
      }else if(turnoJugador === 'si' && listaIngresados.length !== 0){
        setBotonesAct(true);
        setClasTurno('turnoDesAct');
        if(compararListas() === 'no'){
          setTurnoJugador('espera');
          setListaIngresados([]);
          console.log('fallaste');
          setTxtEstado('Reintentalo 🐈‍⬛');
          setIngresar(false);
        }else if(compararListas() === 'si'){
          setTurnoJugador('no');
          console.log('lo lograste');
          setTxtEstado('Bien Hecho 🐈‍⬛');
          setContAciertos(contAciertos+1);
        };
      }else if(turnoJugador === 'no' && listaIngresados.length !== 0){
        posicionBtnPatron();
        setTurnoJugador('espera');
        console.log('es tu turno');
        setListaIngresados([]);
        setTimeout(() => {
          setTxtEstado('🐈‍⬛');
        }, 1000);
        setIngresar(false);
      };
    };
  },[juegoActivo, listaPatron, listaIngresados, turnoJugador, botonesAct, contAciertos, ingresar]);

  useEffect(()=>{
    if(contAciertos === 2){
      setContAciertos(0);
      pasarSumarPuntos();
      setPuntosGanados(puntosGanados+1);
    };
    if(puntosGanados === 3){
      console.log(puntosGanados);
      patronFin(true);
    }
  },[contAciertos, puntosGanados]);

  return(
    <div className={`col-12 patronGlobal ${clasTurno} ${patronOcultar}`}>
      <div className="contText">
        <label htmlFor="">{txtEstado}</label>
      </div>
      <div className="col-12 contBtnPatron">
        <button
          className="btnPatron"
          ref={btnRojoRef}
          onClick={agregarBtn}
          disabled={botonesAct}>
          ROJO
        </button>
        <button
          className="btnPatron"
          ref={btnAzulRef}
          onClick={agregarBtn}
          disabled={botonesAct}>
          AZUL
        </button>
        <button
          className="btnPatron"
          ref={btnVerdeRef}
          onClick={agregarBtn}
          disabled={botonesAct}>
          VERDE
        </button>
        <button
          className="btnPatron"
          ref={btnMoradoRef}
          onClick={agregarBtn}
          disabled={botonesAct}>
          MORADO
        </button>
        <button
          className="btnPatron"
          ref={btnAmarilloRef}
          onClick={agregarBtn}
          disabled={botonesAct}>
          AMARILLO
        </button>
        <button
          className="btnPatron"
          ref={btnCelesteRef}
          onClick={agregarBtn}
          disabled={botonesAct}>
          CAFE
        </button>
        <button
          className="btnPatron"
          ref={btnNaranjaRef}
          onClick={agregarBtn}
          disabled={botonesAct}>
          NARANJA
        </button>
      </div>
    </div>
    );
  };

export default JRPatron;