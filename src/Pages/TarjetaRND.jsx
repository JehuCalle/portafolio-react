import React, { useRef } from "react";

import Logo from '../Img/NoHaceNadaChiquito.png';
/*
import PrimeraIMG from '../Img/1.png';
import SegundaIMG from '../Img/2.png';
import TerceraIMG from '../Img/3.png';
import CuartaIMG from '../Img/4.png';
import QuintaIMG from '../Img/5.png';
*/

import NoHaceNadaHD from '../Img/PiedraPapelTijera/NoHaceNadaHD.png'

import '../Css/TarjetaRND.css';

function TarjetaRND(){

  let contPag1 = 0;

  let contadorOrdenBtn = 0;
  
  let contPag2 = 0;

  const pagina1 = useRef(null);
  const pagina2 = useRef(null);
  const btnDerecha = (e) => {
    e.preventDefault();
  
    if (contPag1 === 0 && contadorOrdenBtn === 1) {
      pagina1.current.style.transform = 'rotateY(-180deg)';
      pagina2.current.style.transform = 'rotateY(-180deg)';
      console.log("1");
      contPag1 += 1;
      contadorOrdenBtn +=1;
      console.log(contadorOrdenBtn);
    } else if (contadorOrdenBtn === 2) {
      pagina1.current.style.transform = 'rotateY(0deg)';
      pagina2.current.style.transform = 'rotateY(0deg)';
      console.log("2");
      contPag1 -= 1;
      contadorOrdenBtn -=1;
      console.log(contadorOrdenBtn);
    };
  };

  const pagina3 = useRef(null);
  const pagina4 = useRef(null);
  const btnIzquierda = (e) => {
    e.preventDefault();

    if (contPag2 === 0 && contadorOrdenBtn === 0) {
      pagina3.current.style.transform = 'rotateY(-180deg)';
      pagina4.current.style.transform = 'rotateY(-180deg)';
      console.log("3");
      contPag2 += 1;
      contadorOrdenBtn +=1;
      console.log(contadorOrdenBtn);
    } else if (contadorOrdenBtn === 1){
      pagina3.current.style.transform = 'rotateY(0deg)';
      pagina4.current.style.transform = 'rotateY(0deg)';
      console.log("4");
      contPag2 -=1
      contadorOrdenBtn -=1;
      console.log(contadorOrdenBtn);
    };
  } 

  const tamañomini = valor => {
    return (valor <= 767);
  }

  return(
    <div>
      <div className="contenedortitulo col-12">
        <div className="imgTitulo col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
          <img className="imgLogo"
            src={Logo}
            alt="LogoNoHaceNada">
          </img>
        </div>
        <div className="titulo col-9 col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11">TITULO TITULO</div>
      </div>
      <div className={`contenedorCuerpo d-flex flex-column ${tamañomini(window.innerWidth) ? 'tamañoChicoContCuerpo' : 'tamañoGrandeContCuerpo'}`}>
        <div className={ `contenedorTarjeta ${tamañomini(window.innerWidth) ? 'tañamoChicoContTarjeta' : 'tamañoGrandeContTarjeta'}   col-12 col-sm-10 col-md-12 col-lg-11 col-xl-9 col-xxl-9` }>
          <div className="imagenes col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <img
              className="tamañoTarjetaIMG primerDiv"
              src={NoHaceNadaHD}
              alt="CuartaIMG">
            </img>
          </div>
          <div className="imagenes col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <img
              className="tamañoTarjetaIMG tercerDiv pagina1"
              src={NoHaceNadaHD}
              alt="QuintaIMG"
              ref={pagina1}>
            </img>
          </div>

          <div className="imagenes col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <img
              className="tamañoTarjetaIMG segundoDiv pagina2"
              src={NoHaceNadaHD}
              alt="SegundaIMG"
              ref={pagina2}>
            </img>
          </div>
          <div className="imagenes col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <img
              className="tamañoTarjetaIMG segundoDiv pagina3"
              src={NoHaceNadaHD }
              alt="TerceraIMG"
              ref={pagina3}>
            </img>
          </div>

          <div className="imagenes col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <img
              className="tamañoTarjetaIMG tercerDiv pagina4"
              src={NoHaceNadaHD}
              alt="PrimeraIMG"
              ref={pagina4}>
            </img>
          </div>
          
        </div>
          <div className="contenedorBotones">
          <button
            className="estiloBotones"
            onClick={btnIzquierda}>
              Primero
          </button>
          <button
            className="estiloBotones"
            onClick={btnDerecha}>
              Segundo
          </button>
        </div>
      </div>

    </div>
  );
}

export default TarjetaRND;