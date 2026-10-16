import React, { useState } from 'react';

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
      <div className="py-4 mx-5 col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-3">
        <label className="txtDesc">Guallaby es una aplicación creada con React Native que como base sirve para crear y gestionar recordatorios mediante notificaciones con Notifee y Firebase para regar nuestras plantas. A futuro se tiene pensado agregar las funciones de poder modificar nuestro perfil e implementar un apartado donde la gente pueda publicar sus plantas, para que el resto de usuarios mediante comentarios, comparta consejos y experiencias y a la vez estos puedan chatear por privado.
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