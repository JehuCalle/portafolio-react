import React from "react";
import logoBarra from '../Img/gato-normal.jpg';
import { Outlet, Link } from "react-router-dom";

import '../Css/BarraNav.css';


function BarraNav(){
  return(
    <div>
      <div className = 'contenedor-nav'>
        <img
          className = 'imagenBarra'
          src = {logoBarra}
          alt = 'Logo barra nav' />
        <Link
          className='BotonCambioPag'
          to= "/">Inicio
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
          to="/" >Ejemplo 4
        </Link>
        <Link
          className='BotonCambioPag'
          to="/" >Ejemplo 5
        </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default BarraNav;