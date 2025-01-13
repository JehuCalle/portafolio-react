import React, {useState, useEffect, useRef} from "react";

import '../../Css/JuegosRNDcss/JRAhorcado.css';

function JRAhorcado({pasarSumarPuntos, ahorcadoOcultar, activar, ahorcadoFin}){

  const primLetRef = useRef(null);
  const segLetRef = useRef(null);
  const terLetRef = useRef(null);
  const cuarLetRef = useRef(null);
  const quinLetRef = useRef(null);
  const sextLetRef = useRef(null);
  const septLetRef = useRef(null);

  const [ dejarIngresar, setDejarIngresar ] = useState(false);
  const [ letrasList, setLetrasList ] = useState([]);


  const ingresoLetraRef = useRef(null);
  const [ test, setTest ] = useState(false);

  const [ ingresoLetra, setIngresoLetra ] = useState('');
  const [ letraIngresada, setLetraIngresada ] = useState('');

  const [ palabra, setPalabra ] = useState('');

  const [ p1, setP1 ] = useState('P');
  const [ p2, setP2 ] = useState('A');
  const [ p3, setP3 ] = useState('L');
  const [ p4, setP4 ] = useState('A');
  const [ p5, setP5 ] = useState('B');
  const [ p6, setP6 ] = useState('R');
  const [ p7, setP7 ] = useState('A');

  //  HACER QUE CADA LETRA DE LA PALABRA OBTENIDA DE LA BD SE PONGA EN p1 - p2 - p3 - p4 - p5- p6 -p7


  const controlIngresoLetra = (e) => {
    setIngresoLetra(e.target.value);
  };

  const seleccionarPalabra = async () => {
    try {
      const respuesta = await fetch('https://raw.githubusercontent.com/words/an-array-of-spanish-words/master/index.json');
      const datosBD = await respuesta.json();
      const palabraAleatoria = datosBD[Math.floor(Math.random() * datosBD.length)]
      if(palabraAleatoria.length !== 7){
        return seleccionarPalabra();
      }else if (palabraAleatoria.length === 7){
        setPalabra(palabraAleatoria);
      }
    } catch (error) {
      console.log('ERROR BASE DE DATOS AHORCADO')
    }
  };

  const separarPalabra = () => {
    ingresoLetraRef.current?.focus();   
    const palabra2 = palabra.split('');
    console.log(palabra2);
    setP1(palabra2[0]);
    setP2(palabra2[1]);
    setP3(palabra2[2]);
    setP4(palabra2[3]);
    setP5(palabra2[4]);
    setP6(palabra2[5]);
    setP7(palabra2[6]);
  };

  //AL INICIAR LA PAGINA
  useEffect(()=>{
    if(dejarIngresar === false){
      if(primLetRef?.current && segLetRef?.current && terLetRef?.current && cuarLetRef?.current && quinLetRef?.current && sextLetRef?.current && septLetRef?.current){
        setLetrasList([primLetRef.current,segLetRef.current,terLetRef.current,cuarLetRef.current,quinLetRef.current,sextLetRef.current,septLetRef.current]);
        ingresoLetraRef.current?.focus();
      };
      setDejarIngresar(true);
    };
  },[dejarIngresar]); 

  useEffect(()=>{
    if(palabra === ''){
      seleccionarPalabra();
    }else if(palabra !== ''){

      separarPalabra();
    }
  },[palabra]);

  const ocultarLetras = () => {
    for(let a = 0 ; a < letrasList.length ; a++){
      letrasList[a].className = 'letras';
    };
  };
  //AL INICIAR LA PAGINA


  useEffect(()=>{
    if(activar === true){
      if(letrasList.length !== 0){
        if(letraIngresada !== '' ){
          for(let i = 0 ; i < letrasList.length ; i++){
            if((letrasList[i].textContent).toLowerCase() === letraIngresada){
              letrasList[i].classList.remove('letraIncorr');
              letrasList[i].classList.add('letraCorr');
            };
          };
        };
        if(letraIngresada !== '' && letrasList[0].className === 'letras letraCorr' && letrasList[1].className === 'letras letraCorr' && letrasList[2].className === 'letras letraCorr' && letrasList[3].className === 'letras letraCorr' && letrasList[4].className === 'letras letraCorr' && letrasList[5].className === 'letras letraCorr' && letrasList[6].className === 'letras letraCorr'){
          pasarSumarPuntos();
          console.log(3);
          ingresoLetraRef.current.value = '';
          setIngresoLetra('');
          setLetraIngresada('');
          setTest(true);
          setTimeout(() => {
            setPalabra('');
            ocultarLetras();
            setTest(false);
            console.log(4)
            ahorcadoFin(true);
          }, 1000);
        };
      };
    }else if(activar === false){
      ocultarLetras();
      ingresoLetraRef.current.value = '';
      setIngresoLetra('');
      setLetraIngresada('');
      setPalabra('');
    };
  },[activar, letrasList, letraIngresada]);

  const enviarForm = (e) => {
    e.preventDefault();
    setLetraIngresada(ingresoLetra);
  };


  //  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST
  useEffect(()=>{
  },[]);

  return(
    <div className={`divGlob col-12 ${ahorcadoOcultar}`}>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <label className={`letras`} ref={primLetRef}>{p1}</label>
        <label className={`letras`} ref={segLetRef}>{p2}</label>
        <label className={`letras`} ref={terLetRef}>{p3}</label>
        <label className={`letras`} ref={cuarLetRef}>{p4}</label>
        <label className={`letras`} ref={quinLetRef}>{p5}</label>
        <label className={`letras`} ref={sextLetRef}>{p6}</label>
        <label className={`letras`} ref={septLetRef}>{p7}</label>
        <div className="col-12 d-flex flex-row justify-content-center position-absolute">
          <label className="lineas">_</label>
          <label className="lineas">_</label>
          <label className="lineas">_</label>
          <label className="lineas">_</label>
          <label className="lineas">_</label>
          <label className="lineas">_</label>
          <label className="lineas">_</label>
        </div>
      </div>
      <div>
        <form
          onSubmit={enviarForm}>
          <input
            className="ingresarLetra"
            ref={ingresoLetraRef}
            onChange={controlIngresoLetra}
            maxLength={1}
            disabled={test}/>
        </form>
      </div>
    </div>
  )
};

export default JRAhorcado;