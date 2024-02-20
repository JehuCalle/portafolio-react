import React, { useEffect, useState} from "react";

import TextoColRND from '../Componentes/TextoColRND.jsx';
import CaraOSello from "../Componentes/CaraOSello.jsx";
import ListaDeGatos from "../Componentes/ListaDeGatos.jsx";
import ListaGatoAPI from "../Componentes/ListaGatoAPI.jsx";
import ListaChat from "../Componentes/ListaChat.jsx";

import '../Css/ProyectosRND.css';


function ProyectosRND(){

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

  
  const [historial, setHistorial] = useState([]);

  const [calculoResultado, setcalculoResultado] = useState('');
  const caraOSelloRandom = () => {
    const calculo = Math.floor(Math.random() * 2);
    console.log(calculo);

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

  const enviar = () => {
    const nombreTxt = document.querySelector("#nombre");
    setnombre(nombreTxt.value);

    const respuestaTxt = document.querySelector("#respuesta");
    setrespuestaCaraOSello(respuestaTxt.value);
    console.log(respuestaCaraOSello);

    caraOSelloRandom();
    console.log(calculoResultado);
    console.log();
    setMounted1(true);
  };
  const [mounted1, setMounted1] = useState(false);
  useEffect(() => {
    // Esta función se ejecuta cuando caraOSelloTxt cambia
    if (mounted1 === true) {
      if((respuestaCaraOSello === calculoResultado)){
        console.log("acertado");
        setresultado(`La respuesta de ${nombre} ha sido ${respuestaCaraOSello} y ha acertado`);
      }else if (respuestaCaraOSello !== calculoResultado){
        console.log("fallado");
        setresultado(`La respuesta de ${nombre} ha sido ${respuestaCaraOSello} y ha fallado`);
      };
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
      }else{
        console.log("fallado");
        setresultado(`Tu respuesta ha sido ${caraOSelloTxt} y has fallado`);
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
          historial={`${historial}`} />
        <ListaDeGatos/>
        {/*
        <ListaGatoAPI/>
        <ListaChat/>
        */}
      </div>
    </div>
  );
};

export default ProyectosRND;