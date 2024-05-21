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

  const contVidasEnemigo = useRef(null);
  const contVidasPlayer = useRef(null);


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
    contVidasEnemigo.current.classList.add('pierdeVidaE');

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
      setTimeout(()=>{
        if(contVidasEnemigo.current === null) {
          console.log('contVidasEnemigo null');
        }else if(contVidasEnemigo.current !== null) {
          contVidasEnemigo.current.classList.remove('pierdeVidaE');
        }
      },300);
      return nuevaVidaEnemigo;
    });
  };


  function CambioVidasPlayer(){
    contVidasPlayer.current.classList.add('pierdeVidaP');

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
      setTimeout(()=>{
        if(contVidasPlayer.current === null) {
          console.log('contVidasPlayer null')
        }else if(contVidasPlayer !== null) {
          contVidasPlayer.current.classList.remove('pierdeVidaP');
        }
      },300);
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

  const [ claseCuerpo, setClaseCuerpo ] = useState(grandeOChico(window.innerWidth) ? 'cuerpoAlturaChico' : 'cuerpoAlturaGrande');
  const [ claseCont1, setClaseCont1 ] = useState(grandeOChico(window.innerWidth) ? 'cont1AlturaChico' : 'cont1AlturaGrande');
  const [ claseElementosCont, setClaseElementosCont ] = useState(grandeOChico(window.innerWidth) ? 'eleccionCont1Chiquito' : '');
  const [ claseCont3, setClaseCont3 ] = useState(grandeOChico(window.innerWidth) ? 'cont3AlturaChico' : 'cont3AlturaGrande');
  const [ clasePiPaTi2, setClasePiPaTi2 ] = useState(grandeOChico(window.innerWidth) ? 'piePapTij2Chiquito' : '');
  const [ claseAlertaGanar, setClaseAlertaGanar ] = useState(grandeOChico(window.innerWidth) ? 'alertaGanarChico' : 'alertaGanarGrande');
  const [ claseAlertaPerder, setClaseAlertaPerder ] = useState(grandeOChico(window.innerWidth) ? 'alertaPerderChico' : 'alertaPerderGrande');


  useEffect(()=> {
    const cambioDeTamaño = () => {
      setClaseCuerpo(grandeOChico(window.innerWidth) ? 'cuerpoAlturaChico' : 'cuerpoAlturaGrande');
      setClaseCont1(grandeOChico(window.innerWidth) ? 'cont1AlturaChico' : 'cont1AlturaGrande');
      setClaseElementosCont(grandeOChico(window.innerWidth) ? 'eleccionCont1Chiquito' : '');
      setClaseCont3(grandeOChico(window.innerWidth) ? 'cont3AlturaChico' : 'cont3AlturaGrande');
      setClasePiPaTi2(grandeOChico(window.innerWidth) ? 'piePapTij2Chiquito' : '');
      setClaseAlertaGanar(grandeOChico(window.innerWidth) ? 'alertaGanarChico' : 'alertaGanarGrande');
      setClaseAlertaPerder(grandeOChico(window.innerWidth) ? 'alertaPerderChico' : 'alertaPerderGrande');
    };

    window.addEventListener('resize', cambioDeTamaño);

    return () => {
      window.removeEventListener('resize', cambioDeTamaño);
    };
  },[])

  return(
    <div className={`cuerpo ${claseCuerpo}`}>
      <div className="contContenedores col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11 col-xxl-10">
        <div className="contenedorCentro col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 col-xxl-12">
          <div
            className="contVidasEnemigo"
            ref={contVidasEnemigo}>
              <label>VIDAS:</label>
              <img
                className="tamañoVidas"
                src={ImgVidasEnemigo}
                alt="ImgVidasEnemigo"/>
          </div>
          

          <div className={`cont1 col-10 ${claseCont1}`}>
            <div className={`contenedorIzquierda ${claseElementosCont}`}>
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
              className={`neutro ${claseElementosCont}`}
              ref={neutro}>
              <img
                className="tamañoIMG"
                src={RandomPiPaTi}
                alt="RandomPiPaTi"/>
            </div>
            <div
              className={`piedra1 ${claseElementosCont} ocultar`}
              ref={piedra1}>
              <img
                className="tamañoIMG"
                src={PiedraBot}
                alt="PiedraBot"/>
            </div>
            <div
              className={`papel1 ${claseElementosCont} ocultar`}
              ref={papel1}>
              <img
                className="tamañoIMG"
                src={PapelBot}
                alt="PapelBot"/>
            </div>
            <div
              className={`tijera1 ${claseElementosCont} ocultar`}
              ref={tijera1}>
              <img
                className="tamañoIMG"
                src={TijeraBot}
                alt="TijeraBot"/>
            </div>


            <div className={`contenedorDerecha ${claseElementosCont}`}>
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
          <div className={`cont3 ${claseCont3}`}>
            <BtnPiePapTijRnd
              id="idPiedra2"
              classNameBTN={`piedra2 animPiPaTi ${clasePiPaTi2}`}
              onClick={(id) => random(id)}
              classNameIMG="tamañoIMG"
              src={PiedraPlayer}
              alt="PiedraPlayer"/>
            <BtnPiePapTijRnd
              id="idPapel2"
              classNameBTN={`papel2 animPiPaTi ${clasePiPaTi2}`}
              onClick={(id) => random(id)}
              classNameIMG="tamañoIMG"
              src={PapelPlayer}
              alt="PapelPlayer"/>
            <BtnPiePapTijRnd
              id="idTijera2"
              classNameBTN={`tijera2 animPiPaTi ${clasePiPaTi2}`}
              onClick={(id) => random(id)}
              classNameIMG="tamañoIMG"
              src={TijeraPlayer}
              alt="TijeraPlayer"/>
          </div>
          <div
            className="contVidasPlayer"
            ref={contVidasPlayer}>
            <label>VIDAS:</label>
            <img
              className="tamañoVidas"
              src={ImgVidasPlayer}
              alt="ImgVidasPlayer"/>
          </div>
        </div>


        <div
          className={`alertaGanar col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 col-xxl-12 ocultar ${claseAlertaGanar}`}
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
          className={`alertaPerder col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 col-xxl-12 ocultar ${claseAlertaPerder}`}
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