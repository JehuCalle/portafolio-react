import React, { useEffect,useState } from "react";

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

  const divImagenIzq = document.querySelector(".divImagenIzq");
  const divImagenDer = document.querySelector(".divImagenDer");
  const divEmpate = document.querySelector(".cont2");

  const neutro = document.querySelector(".neutro");
  const piedra1 = document.querySelector(".piedra1");
  const papel1 = document.querySelector(".papel1");
  const tijera1 = document.querySelector(".tijera1");

  const divAlertaGanar = document.querySelector(".alertaGanar");
  const divAlertaPerder = document.querySelector(".alertaPerder");


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
        divAlertaGanar.classList.remove("ocultar");
      }
      console.log("Vida Actual Enemigo: "+nuevaVidaEnemigo);
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
        divAlertaPerder.classList.remove("ocultar");
      };
      console.log("Vida Actual Enemigo: "+ nuevaVidaPlayer);
      return nuevaVidaPlayer;
    });
  };

  
  function ReiniciarJuego(){
    setVidasEnemigos(3);
    setImgVidasEnemigos(Vidas3);
    setVidasPlayer(3);
    setImgVidasPlayer(Vidas3);
    divImagenIzq.classList.add("ocultar");
    divImagenDer.classList.add("ocultar");
    divAlertaGanar.classList.add("ocultar");
    divAlertaPerder.classList.add("ocultar");
    neutro.classList.remove("ocultar");
    piedra1.classList.add("ocultar");
    papel1.classList.add("ocultar");
    tijera1.classList.add("ocultar");
  }



  useEffect(() => {
    if (mountedH === true && piePapTijRND !== "" && idDelBoton !== "" && VidasEnemigo !== "" && VidasPlayer !== ""){
      setMountedH(false);
      console.log("BOT: " + piePapTijRND);
      console.log(idDelBoton);

      let eleccionPlayer = "";

      if (idDelBoton === "idPiedra2"){
        eleccionPlayer = "Piedra";
      } else if (idDelBoton === "idPapel2"){
        eleccionPlayer = "Papel";
      } else if (idDelBoton === "idTijera2"){
        eleccionPlayer = "Tijera";
      };
      console.log("Escogiste " + eleccionPlayer);

      /* BOT BOT BOT BOT BOT BOT BOT */
      neutro.classList.add("ocultar");

      if (piePapTijRND === "Piedra"){
        piedra1.classList.remove("ocultar");
        papel1.classList.add("ocultar");
        tijera1.classList.add("ocultar");
      } else if (piePapTijRND === "Papel") {
        piedra1.classList.add("ocultar");
        papel1.classList.remove("ocultar");
        tijera1.classList.add("ocultar");
      }else if (piePapTijRND === "Tijera"){
        piedra1.classList.add("ocultar");
        papel1.classList.add("ocultar");
        tijera1.classList.remove("ocultar");
      };
      /* BOT BOT BOT BOT BOT BOT BOT */


      if (eleccionPlayer === piePapTijRND) {
        console.log("EMPATE 🐈");
        divEmpate.classList.remove("ocultar");
        divImagenDer.classList.add("ocultar");
        divImagenIzq.classList.add("ocultar");
      } else if ((eleccionPlayer === "Piedra" && piePapTijRND === "Papel") || (eleccionPlayer === "Papel" && piePapTijRND === "Tijera") || (eleccionPlayer === "Tijera" && piePapTijRND === "Piedra")){
        console.log("Perdiste 😾");
        CambioVidasPlayer()
        divImagenIzq.classList.remove("ocultar")
        divImagenDer.classList.add("ocultar");
        divEmpate.classList.add("ocultar");
      } else if ((eleccionPlayer === "Piedra" && piePapTijRND === "Tijera") || (eleccionPlayer === "Papel" && piePapTijRND === "Piedra") || (eleccionPlayer === "Tijera" && piePapTijRND === "Papel")){
        console.log("Ganaste 😼");
        CambioVidasEnemigo();
        divImagenDer.classList.remove("ocultar");
        divImagenIzq.classList.add("ocultar");
        divEmpate.classList.add("ocultar");
      }

    };
  }, [piePapTijRND, mountedH, idDelBoton, piedra1, papel1, tijera1, neutro, divImagenDer, divImagenIzq, VidasEnemigo, VidasPlayer, divEmpate]);





  return(
    <div className="cuerpo">
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
          

          <div className="cont1 col-10">
            <div className="contenedorIzquierda">
              <div className="divImagenIzq ocultar">
                <label>PERDISTE</label>
                <img
                  className="tamañoIMG"
                  src={GatoTriste}
                  alt="GatoTriste"/>
              </div>
            </div>


            <div className="neutro">
              <img
                className="tamañoIMG"
                src={RandomPiPaTi}
                alt="RandomPiPaTi"/>
            </div>
            <div className="piedra1 ocultar">
              <img
                className="tamañoIMG"
                src={PiedraBot}
                alt="PiedraBot"/>
            </div>
            <div className="papel1 ocultar">
              <img
                className="tamañoIMG"
                src={PapelBot}
                alt="PapelBot"/>
            </div>
            <div className="tijera1 ocultar">
              <img
                className="tamañoIMG"
                src={TijeraBot}
                alt="TijeraBot"/>
            </div>


            <div className="contenedorDerecha">
              <div className="divImagenDer ocultar">
                <label>GANASTE</label>
                <img
                  className="tamañoIMG"
                  src={NoHaceNadaHD}
                  alt="NoHaceNadaHD"/>
              </div>
            </div>


          </div>
          <div className="cont2 ocultar">
            <label>EMPATE</label>
          </div>
          <div className="cont3">
            <BtnPiePapTijRnd
              id="idPiedra2"
              classNameBTN="piedra2"
              onClick={(id) => random(id)}
              classNameIMG="tamañoIMG"
              src={PiedraPlayer}
              alt="PiedraPlayer"/>
            <BtnPiePapTijRnd
              id="idPapel2"
              classNameBTN="papel2"
              onClick={(id) => random(id)}
              classNameIMG="tamañoIMG"
              src={PapelPlayer}
              alt="PapelPlayer"/>
            <BtnPiePapTijRnd
              id="idTijera2"
              classNameBTN="tijera2"
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


        <div className="alertaGanar ocultar">
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
        <div className="alertaPerder ocultar">
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