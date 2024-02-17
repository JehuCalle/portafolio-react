import React from "react";
import logoBarra from '../Img/gato-normal.jpg';
import { Outlet, Link } from "react-router-dom";

import '../Css/BarraNav.css';


function BarraNav(){
  return(
    <div>
      <div className = "contImgBarra">
        <div className="col-ImgBarraNav">
          <img
            className = 'imagenBarra'
            src = {logoBarra}
            alt = 'Logo barra nav' />
        </div>
        <div className="contenedor-nav col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
          <Link
            className='BotonCambioPag'
            to= "/portafolio-react">Inicio
          </Link>
          <Link
            className='BotonCambioPag'
            to="Pages/SobreMi">Sobre Mi
          </Link>
          <Link
            className='BotonCambioPag'
            to="Pages/Contacto">Contacto
          </Link>
          <Link
            className='BotonCambioPag'
            to="/portafolio-react" >Ejemplo 4
          </Link>
          <Link
            className='BotonCambioPag'
            to="/portafolio-react" >Ejemplo 5
          </Link>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default BarraNav;