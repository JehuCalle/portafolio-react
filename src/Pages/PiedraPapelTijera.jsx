import React, { useEffect,useRef,useState } from "react";

import BtnPiePapTijRnd from '../Componentes/PiePapTijRnd.jsx';

import '../Css/PiedraPapelTijera.css';

import GatoTriste from '../Img/PiedraPapelTijera/GatoTriste.jpg';
import NoHaceNadaHD from '../Img/PiedraPapelTijera/NoHaceNadaHD.png';
import GatoPerdiste from '../Img/PiedraPapelTijera/GatoPerdiste.png';
import GatoGanaste from '../Img/PiedraPapelTijera/GatoGanaste.jpg';

import Vidas3 from '../Img/PiedraPapelTijera/Vidas3.png';
import Vidas2 from '../Img/PiedraPapelTijera/Vidas2.png';
import Vidas1 from '../Img/PiedraPapelTijera/Vidas1.png';
import Vidas0 from '../Img/PiedraPapelTijera/Vidas0.png';

import PiedraBot from '../Img/PiedraPapelTijera/PiB.png';
import PiedraPlayer from '../Img/PiedraPapelTijera/PiP.png';
import PapelBot from '../Img/PiedraPapelTijera/PaB.png';
import PapelPlayer from '../Img/PiedraPapelTijera/PaP.png';
import TijeraBot from '../Img/PiedraPapelTijera/TiB.png';
import TijeraPlayer from '../Img/PiedraPapelTijera/TiP.png';
import RandomPiPaTi from '../Img/PiedraPapelTijera/RNDB.png';

function PiedraPapelTijera() {

  const divImagenIzq = useRef(null);
  const divImagenDer = useRef(null);
  const divEmpate = useRef(null);

  const neutro = useRef(null);
  const piedra1 = useRef(null);
  const papel1 = useRef(null);
  const tijera1 = useRef(null);

  const divAlertaGanar = useRef(null);
  const divAlertaPerder = useRef(null);


  const [ piePapTijRND, setpiePapTijRND ] = useState("");
  const [ mountedH, setMountedH ] = useState(false);

  const [ idDelBoton, setIdDelBoton ] = useState("");


  const random = (id) => {
    const calculo = Math.floor(Math.random() * 3) + 1;
    if (calculo === 1){
      setpiePapTijRND("Piedra");
    } else if (calculo === 2) {
      setpiePapTijRND("Papel");
    }else if (calculo === 3){
      setpiePapTijRND("Tijera");
    };
    setMountedH(true);

    setIdDelBoton(`${id}`);
  }

  const [ VidasEnemigo, setVidasEnemigos] = useState(3);
  const [ ImgVidasEnemigo, setImgVidasEnemigos] = useState(Vidas3);

  const [ VidasPlayer, setVidasPlayer ] = useState(3);
  const [ ImgVidasPlayer, setImgVidasPlayer ] = useState(Vidas3);



  function CambioVidasEnemigo() {
    //preVidas OBTIENE EL VALOR DE VidasEnemigo PORQUE SE ESTÁ USANDO setVidasEnemigos
    setVidasEnemigos((prevVidasEnemigo) => {
      const nuevaVidaEnemigo = prevVidasEnemigo - 1;
  
      if (nuevaVidaEnemigo === 2) {
        setImgVidasEnemigos(Vidas2);
      } else if (nuevaVidaEnemigo === 1) {
        setImgVidasEnemigos(Vidas1);
      } else if (nuevaVidaEnemigo === 0) {
        setImgVidasEnemigos(Vidas0);
        divAlertaGanar.current.classList.remove("ocultar");
      }
      console.log("Vida Actual Enemigo: " + nuevaVidaEnemigo);
      return nuevaVidaEnemigo;
    });
  };


  function CambioVidasPlayer(){
    //preVidas OBTIENE EL VALOR DE VidasEnemigo PORQUE SE ESTÁ USANDO setVidasEnemigos
    setVidasPlayer((preVidasPlayer) => {
      const nuevaVidaPlayer = preVidasPlayer - 1;

      if (nuevaVidaPlayer === 2){
        setImgVidasPlayer(Vidas2);
      } else if (nuevaVidaPlayer === 1){
        setImgVidasPlayer(Vidas1);
      } else if (nuevaVidaPlayer === 0){
        setImgVidasPlayer(Vidas0);
        divAlertaPerder.current.classList.remove("ocultar");
      };
      console.log("Vida Actual Player: "+ nuevaVidaPlayer);
      return nuevaVidaPlayer;
    });
  };

  
  function ReiniciarJuego(){
    setVidasEnemigos(3);
    setImgVidasEnemigos(Vidas3);
    setVidasPlayer(3);
    setImgVidasPlayer(Vidas3);
    divImagenIzq.current.classList.add("ocultar");
    divImagenDer.current.classList.add("ocultar");
    divAlertaGanar.current.classList.add("ocultar");
    divAlertaPerder.current.classList.add("ocultar");
    neutro.current.classList.remove("ocultar");
    piedra1.current.classList.add("ocultar");
    papel1.current.classList.add("ocultar");
    tijera1.current.classList.add("ocultar");
  }



  useEffect(() => {
    if (mountedH === true && piePapTijRND !== "" && idDelBoton !== "" && VidasEnemigo !== "" && VidasPlayer !== ""){
      setMountedH(false);
      console.log("BOT: " + piePapTijRND);

      let eleccionPlayer = "";

      if (idDelBoton === "idPiedra2"){
        eleccionPlayer = "Piedra";
      } else if (idDelBoton === "idPapel2"){
        eleccionPlayer = "Papel";
      } else if (idDelBoton === "idTijera2"){
        eleccionPlayer = "Tijera";
      };
      console.log("Escogiste: " + eleccionPlayer);

      /* BOT BOT BOT BOT BOT BOT BOT */
      neutro.current.classList.add("ocultar");

      if (piePapTijRND === "Piedra"){
        piedra1.current.classList.remove("ocultar");
        papel1.current.classList.add("ocultar");
        tijera1.current.classList.add("ocultar");
      } else if (piePapTijRND === "Papel") {
        piedra1.current.classList.add("ocultar");
        papel1.current.classList.remove("ocultar");
        tijera1.current.classList.add("ocultar");
      }else if (piePapTijRND === "Tijera"){
        piedra1.current.classList.add("ocultar");
        papel1.current.classList.add("ocultar");
        tijera1.current.classList.remove("ocultar");
      };
      /* BOT BOT BOT BOT BOT BOT BOT */


      if (eleccionPlayer === piePapTijRND) {
        console.log("Estado: EMPATE 🐈");
        divEmpate.current.classList.remove("ocultar");
        divImagenDer.current.classList.add("ocultar");
        divImagenIzq.current.classList.add("ocultar");
      } else if ((eleccionPlayer === "Piedra" && piePapTijRND === "Papel") || (eleccionPlayer === "Papel" && piePapTijRND === "Tijera") || (eleccionPlayer === "Tijera" && piePapTijRND === "Piedra")){
        console.log("Estado: Perdiste 😾");
        CambioVidasPlayer()
        divImagenIzq.current.classList.remove("ocultar")
        divImagenDer.current.classList.add("ocultar");
        divEmpate.current.classList.add("ocultar");
      } else if ((eleccionPlayer === "Piedra" && piePapTijRND === "Tijera") || (eleccionPlayer === "Papel" && piePapTijRND === "Piedra") || (eleccionPlayer === "Tijera" && piePapTijRND === "Papel")){
        console.log("Estado: Ganaste 😼");
        CambioVidasEnemigo();
        divImagenDer.current.classList.remove("ocultar");
        divImagenIzq.current.classList.add("ocultar");
        divEmpate.current.classList.add("ocultar");
      }
    };
  }, [piePapTijRND, mountedH, idDelBoton, piedra1, papel1, tijera1, neutro, divImagenDer, divImagenIzq, VidasEnemigo, VidasPlayer, divEmpate]);


  const grandeOChico = capTamaño => {
    return(capTamaño <= 575);
  }


  return(
    <div className={`cuerpo ${grandeOChico(window.innerWidth) ? 'cuerpoAlturaChico' : 'cuerpoAlturaGrande'}`}>
      <div className="contContenedores col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11 col-xxl-10">
        <div className="contenedorCentro col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 col-xxl-12">
          <div
            className="contVidasEnemigo">
              <label>VIDAS:</label>
              <img
                className="tamañoVidas"
                src={ImgVidasEnemigo}
                alt="ImgVidasEnemigo"/>
          </div>
          

          <div className={`cont1 col-10 ${grandeOChico(window.innerWidth) ? 'cont1AlturaChico' : 'cont1AlturaGrande'}`}>
            <div className={`contenedorIzquierda ${grandeOChico(window.innerWidth) ? 'eleccionCotn1Chiquito' : ''}`}>
              <div
                className="divImagenIzq ocultar"
                ref={divImagenIzq}>
                <label>PERDISTE</label>
                <img
                  className="tamañoIMG"
                  src={GatoTriste}
                  alt="GatoTriste"/>
              </div>
            </div>


            <div
              className={`neutro ${grandeOChico(window.innerWidth) ? 'eleccionCotn1Chiquito' : ''}`}
              ref={neutro}>
              <img
                className="tamañoIMG"
                src={RandomPiPaTi}
                alt="RandomPiPaTi"/>
            </div>
            <div
              className={`piedra1 ${grandeOChico(window.innerWidth) ? 'eleccionCotn1Chiquito' : ''} ocultar`}
              ref={piedra1}>
              <img
                className="tamañoIMG"
                src={PiedraBot}
                alt="PiedraBot"/>
            </div>
            <div
              className={`papel1 ${grandeOChico(window.innerWidth) ? 'eleccionCotn1Chiquito' : ''} ocultar`}
              ref={papel1}>
              <img
                className="tamañoIMG"
                src={PapelBot}
                alt="PapelBot"/>
            </div>
            <div
              className={`tijera1 ${grandeOChico(window.innerWidth) ? 'eleccionCotn1Chiquito' : ''} ocultar`}
              ref={tijera1}>
              <img
                className="tamañoIMG"
                src={TijeraBot}
                alt="TijeraBot"/>
            </div>


            <div className={`contenedorDerecha ${grandeOChico(window.innerWidth) ? 'eleccionCotn1Chiquito' : ''}`}>
              <div
                className="divImagenDer ocultar"
                ref={divImagenDer}>
                <label>GANASTE</label>
                <img
                  className="tamañoIMG"
                  src={NoHaceNadaHD}
                  alt="NoHaceNadaHD"/>
              </div>
            </div>


          </div>
          <div
            className="cont2 ocultar"
            ref={divEmpate}>
            <label>EMPATE</label>
          </div>
          <div className={`cont3 ${grandeOChico(window.innerWidth) ? 'cont3AlturaChico' : 'cont3AlturaGrande'}`}>
            <BtnPiePapTijRnd
              id="idPiedra2"
              classNameBTN={`piedra2 ${grandeOChico(window.innerWidth) ? 'piePapTij2Chiquito' : ''}`}
              onClick={(id) => random(id)}
              classNameIMG="tamañoIMG"
              src={PiedraPlayer}
              alt="PiedraPlayer"/>
            <BtnPiePapTijRnd
              id="idPapel2"
              classNameBTN={`papel2 ${grandeOChico(window.innerWidth) ? 'piePapTij2Chiquito' : ''}`}
              onClick={(id) => random(id)}
              classNameIMG="tamañoIMG"
              src={PapelPlayer}
              alt="PapelPlayer"/>
            <BtnPiePapTijRnd
              id="idTijera2"
              classNameBTN={`tijera2 ${grandeOChico(window.innerWidth) ? 'piePapTij2Chiquito' : ''}`}
              onClick={(id) => random(id)}
              classNameIMG="tamañoIMG"
              src={TijeraPlayer}
              alt="TijeraPlayer"/>
          </div>
          <div
            className="contVidasPlayer">
            <label>VIDAS:</label>
            <img
              className="tamañoVidas"
              src={ImgVidasPlayer}
              alt="ImgVidasPlayer"/>
          </div>
        </div>


        <div
          className={`alertaGanar col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 col-xxl-12 ocultar ${grandeOChico(window.innerWidth) ? 'alertaGanarChico' : 'alertaGanarGrande'}`}
          ref={divAlertaGanar}>
          <label>Has derrotado al enemigo </label>
          <img
            className="tamañoImgAlertaGanaste"
            src={GatoGanaste}
            alt="GatoGanaste"/>
          <button
            onClick={ReiniciarJuego}>
            Reiniciar
          </button>
        </div>
        <div
          className={`alertaPerder col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 col-xxl-12 ocultar ${grandeOChico(window.innerWidth) ? 'alertaPerderChico' : 'alertaPerderGrande'}`}
          ref={divAlertaPerder}>
          <label>Te has quedado sin vidas</label>
          <img
            className="tamañoImgAlertaPerdiste"
            src={GatoPerdiste}
            alt="GatoPerdiste"/>
          <button
            onClick={ReiniciarJuego}>
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PiedraPapelTijera;