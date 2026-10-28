import React, { useState } from 'react';

import notifee from '../Img/notifeeLogo.png';
import firebase from '../Img/firebaseLogo.png';
import tailwindCss from '../Img/tailwindcss.png'

import img1 from '../Img/RNPlantas/pf-crear.jpg';
import img2 from '../Img/RNPlantas/pf-lista.jpg';
import img3 from '../Img/RNPlantas/pf-detalles.jpg';
import img4 from '../Img/RNPlantas/pf-editar.jpg';

import '../Css/RNPlantas.css';

const lista_Imagenes = [img1, img2, img3, img4]

function RNPlantas(){
  const [indImg, setIndImg] = useState(0);

  const siguienteImg = () => {
    setIndImg((prevInd) => prevInd === lista_Imagenes.length -1 ? 0 : prevInd +1);
  }

  const anteriorImg = () => {
    setIndImg((prevInd) => prevInd === 0 ? lista_Imagenes.length -1 : prevInd -1);
  };

  const descargarApp = () => {
    window.open('https://github.com/JehuCalle/RNPlantas/releases', '_blank');
  };

  return(
    <div className="col-12 contRNP d-flex flex-wrap justify-content-center align-items-center">
      <h1 className="m-0 col-12 text-center">Guallaby</h1>
      <div className="py-4 px-1 mx-5 col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5 col-xxl-5">
          <label className="txtDesc">Guallaby es una aplicación creada con React Native que como base sirve para crear y gestionar recordatorios para regar nuestras plantas.</label>
          <div className="d-flex mb-2 align-items-center">
            <img
              className="imgLogos rounded-5"
              src={notifee}
              alt="notifee"/>
            <label className="px-2 py-1">Mediante Notifee se realizan las notificaciones personalizadas para que el usuario pueda regar sus plantas sin necesidad de entrar a la app.</label>
          </div>
          <div className="d-flex mb-2 align-items-center">
            <img
              className="imgLogos rounded-5 p-2"
              src={firebase}
              alt="firebase"/>
            <label className="px-2 py-1">Gracias a las múltiples funciones con las que cuenta Firebase, como Firebase Firestore, con la que se almacenan todos los datos de los clientes, Firebase Functions, con la cual se activan las notificaciones de notifee para notificar cuando regar cada planta, Firebase Storage, para almacenar las fotos de las plantas que toma o sube el usuario y por último Firebase Authentication, con el que se almacenan los usuarios y sus credenciales para que estas no se repiten y así validarlas mediante Firebase.</label>
          </div>
          <div className="d-flex mb-2 align-items-center">
            <img
              className="imgLogos rounded-5 p-2"
              src={tailwindCss}
              alt="tailwindCss"/>
            <label className="px-2 py-1">Con TailwindCSS se ha dado el diseño y estética de las interfaces y todo lo visual de la aplicación y se ha decidido usar TailwindCSS porque, a diferencia de Bootstrap, cuenta con más flexibilidad para modificar las clases con las que cuenta TailwindCSS.</label>
          </div>
        <label className="txtDesc">A futuro se tiene pensado agregar las funciones de poder modificar nuestro perfil e implementar un apartado donde la gente pueda publicar sus plantas, para que el resto de usuarios mediante comentarios, comparta consejos y experiencias y a la vez estos puedan chatear por privado.
        </label>
      </div>
      <div className="">
        <img
          className="RNPimg"
          src={lista_Imagenes[indImg]}
          alt="test"/>
        <div className="d-flex align-items-center justify-content-evenly">
          <button className="btnSigAnt" onClick={anteriorImg}>Anterior</button>
          <button className="btnSigAnt" onClick={siguienteImg}>Siguiente</button>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <button className="btnDescargar" onClick={descargarApp}>Descargar</button>
        </div>
      </div>
    </div>
  );
}

export default RNPlantas;