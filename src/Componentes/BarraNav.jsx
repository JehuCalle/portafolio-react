import React, { useState, useEffect } from "react";
import logoBarra from '../Img/gato-normal.jpg';
import { Outlet, Link } from "react-router-dom";

import '../Css/BarraNav.css';


function BarraNav(){

  console.log("BARRANAV.JSX");
  console.log(window.innerWidth);
  console.log(window.innerHeight);


  useEffect(() => {
    const barraNavPC = document.querySelector(".contImgBarra");
    const barraNavMobil = document.querySelector(".contBarraMovil");

    if( window.innerWidth <= 640){
      barraNavPC.classList.add("ocultar");
      barraNavMobil.classList.remove("ocultar");
      console.log("MENOR A 640");
    } else if ( window.innerWidth > 640 ) {
      barraNavPC.classList.remove("ocultar");
      barraNavMobil.classList.add("ocultar");
      console.log("MAYOR A 640");
    };
  }, []); // El segundo argumento vacío asegura que el efecto solo se ejecute una vez al montar el componente
  

  return(
    <div>

        <div className='col-12 contBarraMovil'>
          <div className="col-ImgBarDesplegable col-1">
            <img
              className = 'imagenBarra'
              src = {logoBarra}
              alt = 'Logo barra nav' />
          </div>
          <div className='contBotonesDesplegables col-11'>
            <div className="dropdown">
              <button className="botonDrop btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </button>
              <ul className="contBotonesFix dropdown-menu padding0">
              <Link
                className='botonDesplegable margin0 text-center'
                to= "/portafolio-react">Inicio
              </Link>
              <Link
                className='botonDesplegable margin0'
                to="Pages/SobreMi">Sobre Mi
              </Link>
              <Link
                className='botonDesplegable margin0'
                to="Pages/Contacto">Contacto
              </Link>
              </ul>
            </div>
          </div>
        </div>




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