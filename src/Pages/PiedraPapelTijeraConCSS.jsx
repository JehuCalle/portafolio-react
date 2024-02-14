import React, {useState, useEffect} from "react";

import '../Css/PiedraPapelTijeraConCSS.css';

import rnd from '../Img/PiedraPapelTijera/RNDB.png'
import piedraP1 from '../Img/PiedraPapelTijera/PiP.png'
import papelP1 from '../Img/PiedraPapelTijera/PaP.png'
import tijeraP1 from '../Img/PiedraPapelTijera/TiP.png'
import piedraP2 from '../Img/PiedraPapelTijera/PiB.png'
import papelP2 from '../Img/PiedraPapelTijera/PaB.png'
import tijeraP2 from '../Img/PiedraPapelTijera/TiB.png'

import cestaIzq from '../Img/PiedraPapelTijeraConCSS/CestaIzq.png';
import cestaDer from '../Img/PiedraPapelTijeraConCSS/CestaDer.png';
import p1 from '../Img/PiedraPapelTijeraConCSS/P1.png';
import p2 from '../Img/PiedraPapelTijeraConCSS/P2.png';
import pelota from '../Img/PiedraPapelTijeraConCSS/Pelota.png';

function PiedraPapelTijeraConCSS(){

  const [ piPaTiRNDP1, setPiPaTiRNDP1 ] = useState("");
  const [ imgP1, setImgP1 ] = useState(rnd);
  const [ piPaTiRNDP2, setPiPaTiRNDP2 ] = useState("");
  const [ imgP2, setImgP2 ] = useState(rnd);
  const [ permitirUseEffect, setPermitirUseEffect ] = useState(false);

  const divP1 = document.querySelector(".contenedor21");
  const contAniP1 = document.querySelector(".contPelotaAniP1");
  const divP2 = document.querySelector(".contenedor31");
  const contAniP2 = document.querySelector(".contPelotaAniP2");

  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);

  function numeroRND(){
    return Math.floor(Math.random() * 3) + 1;
  };

  function BotonClick(){
    const calculoP1 = numeroRND();

    console.log(calculoP1);
    if ( calculoP1 === 1 ){
      setPiPaTiRNDP1("Piedra");
      setImgP1(piedraP1);
      setPermitirUseEffect(true);
    }else if ( calculoP1 === 2 ){
      setPiPaTiRNDP1("Papel");
      setImgP1(papelP1);
      setPermitirUseEffect(true);
    }else if ( calculoP1 === 3 ){
      setPiPaTiRNDP1("Tijera");
      setImgP1(tijeraP1);
      setPermitirUseEffect(true);
    };

    const calculoP2 = numeroRND();

    console.log(calculoP2);
    if ( calculoP2 === 1 ){
      setPiPaTiRNDP2("Piedra");
      setImgP2(piedraP2);
      setPermitirUseEffect(true);
    }else if ( calculoP2 === 2 ){
      setPiPaTiRNDP2("Papel");
      setImgP2(papelP2);
      setPermitirUseEffect(true);
    }else if ( calculoP2 === 3 ){
      setPiPaTiRNDP2("Tijera");
      setImgP2(tijeraP2);
      setPermitirUseEffect(true);
    };
  };

  useEffect((e) =>{
    if ( permitirUseEffect === true && piPaTiRNDP1 !== "" ){
      
      setBotonDeshabilitado(true);

      console.log(piPaTiRNDP1);
      console.log(piPaTiRNDP2);


      if ( piPaTiRNDP1 === piPaTiRNDP2){
        console.log("EMPATE");
        divP1.style.backgroundColor = "rgb(67, 66, 102)";
        divP2.style.backgroundColor = "rgb(67, 66, 102)";
      } else if ( (piPaTiRNDP1 === "Piedra" && piPaTiRNDP2 === "Tijera") || (piPaTiRNDP1 === "Papel" && piPaTiRNDP2 === "Piedra") || (piPaTiRNDP1 === "Tijera" && piPaTiRNDP2 === "Papel") ){
        console.log("Gana P1");
        console.log("Pierde P2");
        divP1.style.backgroundColor = "green";
        divP2.style.backgroundColor = "red";
        contAniP1.classList.add("animP1");
        setTimeout(() => {
          contAniP1.classList.remove("animP1");
        }, 4000);
      } else if ( (piPaTiRNDP2 === "Piedra" && piPaTiRNDP1 === "Tijera") || (piPaTiRNDP2 === "Papel" && piPaTiRNDP1 === "Piedra") || (piPaTiRNDP2 === "Tijera" && piPaTiRNDP1 === "Papel") ){
        console.log("Pierde P1");
        console.log("Gana P2");
        divP1.style.backgroundColor = "red";
        divP2.style.backgroundColor = "green";
        contAniP2.classList.add("animP2");
        setTimeout(() => {
          contAniP2.classList.remove("animP2");
        }, 4000);
      }

    // La función que se ejecutará después de 2 segundos
    const miCodigoDespuesDe2Segundos = () => {
      setBotonDeshabilitado(false);
      console.log("Ha pasado 2 segundo");
      divP1.style.backgroundColor = "rgb(37, 92, 92)";
      divP2.style.backgroundColor = "rgb(50, 99, 99)";
    };
    
    // Configura el temporizador con un retardo de 2000 milisegundos (4 segundos)
    const temporizador = setTimeout(miCodigoDespuesDe2Segundos, 4000);
    
    // Limpia el temporizador cuando el componente se desmonta para evitar fugas de memoria
    return () => clearTimeout(temporizador);

    };

  },[permitirUseEffect, piPaTiRNDP1, piPaTiRNDP2, divP1, contAniP1, divP2, contAniP2]);


  return(
    <div className="cuerpoPPTCSS">
      <div className="contenedorContenedores">
        {/* PRIMER CONTENEDOR */}
        <div className="contenedor1">
          <div className="contImgP1">
            <img
              className="tamañoCompleto"
              src={p1}
              alt="P1"/>
          </div>
        </div>
        {/* SEGUNDO CONTENEDOR */}
        <div>
          <div className="contenedor20">
            <div className="contPelotaAniP1">
              <img
                className="tamañoCompleto"
                src={pelota}
                alt="PelotaP1"/>
            </div>
            <img
              className="tamañoCompleto"
              src={cestaIzq}
              alt="cesta"/>
          </div>
          <div className="contenedor21">
            <img
              className="tamañoIMGPPTCSS"
              src={imgP1}
              alt="imgP1"/>
          </div>
        </div>
        {/* VS CONTENEDOR */}
        <div  className="contenedorVS">
          VS
        </div>
        {/* TERCER CONTENEDOR */}
        <div>
          <div className="contenedor30">
            <img
              className="tamañoCompleto"
              src={cestaDer}
              alt="cesta"/>
            <div className="contPelotaAniP2">
              <img
                className="tamañoCompleto"
                src={pelota}
                alt="PelotaP2"/>
            </div>
          </div>
          <div className="contenedor31">
            <img
              className="tamañoIMGPPTCSS"
              src={imgP2}
              alt="imgP2"/>
          </div>
        </div>
        {/* CUARTO CONTENEDOR */}
        <div className="contenedor4">
          <div className="contImgP2">
            <img
              className="tamañoCompleto"
              src={p2}
              alt="P2"/>
          </div>
        </div>
      </div>
      <div>
        <button
          className="tamañoBoton"
          onClick={BotonClick}
          disabled={botonDeshabilitado}>
          Iniciar
        </button>
      </div>
    </div>
  )
};

export default PiedraPapelTijeraConCSS;