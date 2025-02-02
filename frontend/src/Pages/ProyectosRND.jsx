import React, { useEffect, useState, useRef} from "react";

import TextoColRND from '../Componentes/TextoColRND.jsx';
import CaraOSello from "../Componentes/CaraOSello.jsx";
import ListaDeGatos from "../Componentes/ListaDeGatos.jsx";
import ListaGatoAPI from "../Componentes/ListaGatoAPI.jsx";
import ListaChat from "../Componentes/ListaChat.jsx";

import '../Css/ProyectosRND.css';


function ProyectosRND({oculto}){

  /* COLOR RND COLOR RND COLOR RND */
  const [colorRND, setColorRND] = useState({});
  const aplicarEstilo = () => {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
  
    const color = `rgb(${rojo}, ${verde}, ${azul})`;

    const nuevoEstilo = {
      color: color
    };

    setColorRND(nuevoEstilo);
  };

  /* CARA O SELLO CARA O SELLO CARA O SELLO CARA O SELLO */
  const [historial, setHistorial] = useState([]);

  const [calculoResultado, setcalculoResultado] = useState('');
  const caraOSelloRandom = () => {
    const calculo = Math.floor(Math.random() * 2);

    if(calculo === 0){
      setcalculoResultado("Cara");
    }else if(calculo === 1){
      setcalculoResultado("Sello");
    };
    setMountedH(true);
  };
  const [mountedH, setMountedH] = useState(false);
  useEffect(() => {
    if (mountedH === true){
      setHistorial([...historial, calculoResultado]);
      setMountedH(false);
    };
  }, [historial, calculoResultado, mountedH]); // Establece las dependencias

  const [resultado, setresultado] = useState('');

  const [respuestaCaraOSello, setrespuestaCaraOSello] = useState('');
  const [nombre, setnombre] = useState('');
  



// 4- SE LLAMA LA FUNCIÓN ESTABLECIDA PARA USARLA
  const manejarFuncionB = (funcionB) => {
    // Llama a funcionB cuando sea necesario desde el componente A
    if (funcionB) {
      funcionB();
    }
  };

  const [ activarFuncionEx, setActivarFuncionEx ] = useState(true);

  const nombreTxt = useRef(null);
  const respuestaTxt = useRef(null);
  const enviar = () => {
    setnombre(nombreTxt.current.value);
    setrespuestaCaraOSello(respuestaTxt.current.value);

    caraOSelloRandom();
    setMounted1(true);
    
    // 5- SE LLAMA LA FUNCIÓN PARA USARLA
    manejarFuncionB();
    setActivarFuncionEx(true);

  };

  const [mounted1, setMounted1] = useState(false);
  useEffect(() => {
    // Esta función se ejecuta cuando caraOSelloTxt cambia

    const respuestaPrimMayus = respuestaCaraOSello.charAt(0).toUpperCase() + respuestaCaraOSello.slice(1);

    if (mounted1 === true) {
      if (nombre !== '' && respuestaCaraOSello !== '') {
        console.log('Nombre: ' + nombre)
        console.log('Respuesta: ' + respuestaCaraOSello)
        console.log('Salió: ' + calculoResultado)
        if(respuestaPrimMayus === calculoResultado){
          console.log("Estado: Ha acertado");
          setresultado(`La respuesta de ${nombre} ha sido ${respuestaCaraOSello} y ha acertado`);
          setMounted1(false);
        }else if (respuestaPrimMayus !== calculoResultado){
          console.log("Estado; Ha fallado");
          setresultado(`La respuesta de ${nombre} ha sido ${respuestaCaraOSello} y ha fallado`);
          setMounted1(false);
        };
        console.log('//////////////')
      } else {
        console.log("CAMPOS VACIOS");
      }
    };
  }, [respuestaCaraOSello, nombre, calculoResultado, mounted1]); // Establece las dependencias

  const [caraOSelloTxt, setcaraOSello] = useState('');
  const cara = () => {
    console.log("cara");

    setcaraOSello("Cara");

    caraOSelloRandom();
    setMounted(true);
  };

  const sello = () => {
    console.log("sello");
    setcaraOSello("Sello");

    caraOSelloRandom();
    setMounted(true);
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Esta función se ejecuta cuando caraOSelloTxt cambia
    if (mounted === true) {
      if((caraOSelloTxt === calculoResultado)){
        console.log("acertado");
        setresultado(`Tu respuesta ha sido ${caraOSelloTxt} y has acertado`);
        setMounted(false);
      }else{
        console.log("fallado");
        setresultado(`Tu respuesta ha sido ${caraOSelloTxt} y has fallado`);
        setMounted(false);
      };
    };
  }, [caraOSelloTxt, calculoResultado, mounted]); // Establece las dependencias

  return(
    <div>
      <div className='contenedor-experimentos col-12'>
        <TextoColRND
          texto = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          color = {colorRND}
          colorRND={aplicarEstilo} />
        <CaraOSello
          enviar={enviar}
          cara={cara}
          sello={sello}
          respuesta={`${resultado}`}
          resultadoCalculo={`${calculoResultado}`}
          historial={`${historial}`}
          refInputNom={nombreTxt}
          refInputRes={respuestaTxt}
          onFuncionB={manejarFuncionB}
          activarFuncionEx = {`${activarFuncionEx}`} />
        <ListaDeGatos/>
        <ListaGatoAPI/>
        <ListaChat/>
      </div>
    </div>
  );
};

export default ProyectosRND;