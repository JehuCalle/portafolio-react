import React from "react";

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

let contPag1 = 0;

let contadorOrdenBtn = 0;

const btnDerecha = (e) => {
  e.preventDefault();
  const pagina1 = document.querySelector('.pagina1');
  const pagina2 = document.querySelector('.pagina2');

  if (contPag1 === 0 && contadorOrdenBtn === 1) {
    pagina1.style.transform = 'rotateY(-180deg)';
    pagina2.style.transform = 'rotateY(-180deg)';
    console.log("1");
    contPag1 += 1;
    contadorOrdenBtn +=1;
    console.log(contadorOrdenBtn);
  } else if (contadorOrdenBtn === 2) {
    pagina1.style.transform = 'rotateY(0deg)';
    pagina2.style.transform = 'rotateY(0deg)';
    console.log("2");
    contPag1 -= 1;
    contadorOrdenBtn -=1;
    console.log(contadorOrdenBtn);
  };
};

let contPag2 = 0;

const btnIzquierda = (e) => {
  e.preventDefault();
  const pagina3 = document.querySelector('.pagina3');
  const pagina4 = document.querySelector('.pagina4');

    if (contPag2 === 0 && contadorOrdenBtn === 0) {
      pagina3.style.transform = 'rotateY(-180deg)';
      pagina4.style.transform = 'rotateY(-180deg)';
      console.log("3");
      contPag2 += 1;
      contadorOrdenBtn +=1;
      console.log(contadorOrdenBtn);
    } else if (contadorOrdenBtn === 1){
      pagina3.style.transform = 'rotateY(0deg)';
      pagina4.style.transform = 'rotateY(0deg)';
      console.log("4");
      contPag2 -=1
      contadorOrdenBtn -=1;
      console.log(contadorOrdenBtn);
    };
} 

function TarjetaRND(){
  return(
    <div>
      <div className="contenedortitulo">
        <div className="imgTitulo">
          <img className="imgLogo"
            src={Logo}
            alt="LogoNoHaceNada">
          </img>
        </div>
        <div className="titulo"></div>
      </div>
      <div className="contenedorCuerpo">
        <div className="imagenes">
          <img
            className="tamañoIMG primerDiv"
            src={NoHaceNadaHD}
            alt="CuartaIMG">
          </img>
        </div>
        <div className="imagenes">
          <img
            className="tamañoIMG tercerDiv pagina1"
            src={NoHaceNadaHD}
            alt="QuintaIMG">
          </img>
        </div>

        <div className="imagenes">
          <img
            className="tamañoIMG segundoDiv pagina2"
            src={NoHaceNadaHD}
            alt="SegundaIMG">
          </img>
        </div>
        <div className="imagenes">
          <img
            className="tamañoIMG segundoDiv pagina3"
            src={NoHaceNadaHD }
            alt="TerceraIMG">
          </img>
        </div>

        <div className="imagenes">
          <img
            className="tamañoIMG tercerDiv pagina4"
            src={NoHaceNadaHD}
            alt="PrimeraIMG">
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
  );
}

export default TarjetaRND;