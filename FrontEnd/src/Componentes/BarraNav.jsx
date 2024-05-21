import React, { useState, useEffect, useRef } from "react";
import logoBarra from '../Img/gato-normal.jpg';
import { Outlet, Link } from "react-router-dom";

import LogoGitHub from '../Img/githubLogo.png';

import '../Css/BarraNav.css';


function BarraNav(){
  const barraNavPC = useRef(null);
  const barraNavMobil = useRef(null);

  

  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  
  useEffect(() => {
    const capturarAnchoPantalla = () => {
      setAnchoPantalla(window.innerWidth);
    };

    window.addEventListener('resize', capturarAnchoPantalla);

    return () => {
      window.removeEventListener('resize', capturarAnchoPantalla);
    };
  }, []);

  useEffect(() => {

    if( anchoPantalla <= 640){
      barraNavPC.current.classList.add("ocultar");
      barraNavMobil.current.classList.remove("ocultar");
    } else if ( anchoPantalla > 640 ) {
      barraNavPC.current.classList.remove("ocultar");
      barraNavMobil.current.classList.add("ocultar");
    };
  }, [anchoPantalla]); // El segundo argumento vacío asegura que el efecto solo se ejecute una vez al montar el componente
  

  const miGitHub = () => {
    window.open('https://github.com/JehuCalle', '_blank');
  }

  return(
    <div>

        <div
          className='col-12 contBarraMovil'
          ref={barraNavMobil}>
          <div className="col-ImgBarDesplegable col-3 col-sm-2">
            <img
              className = 'imagenBarra'
              src = {logoBarra}
              alt = 'Logo barra nav' />
          </div>
          <div className='contBotonesDesplegables col-9 col-sm-10'>
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
                  to="Pages/Contacto">Contacto
                </Link>
                <div
                  className='botonDesplegable btnGitHubNav'
                  onClick={miGitHub}>
                    <img
                      className='gitHubNav'
                      src={LogoGitHub}
                      alt='LogoGitHub'
                      />
                </div>
              </ul>
            </div>
          </div>
        </div>




      <div
        className="contImgBarra"
        ref={barraNavPC}>
        <div className="col-1 ImgBarraNav">
          <img
            className='imagenBarra'
            src = {logoBarra}
            alt = 'Logo barra nav' />
        </div>
        <div className="contenedor-nav col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
          <Link
            className='BotonCambioPag'
            to= "/portafolio-react">Inicio
          </Link>
          <Link
            className='BotonCambioPag'
            to="Pages/Contacto">Contacto
          </Link>
        </div>
        <div className="col-1">
          <img
            className='gitHubNav btnGitHubNav'
            src={LogoGitHub}
            alt='LogoGitHub'
            onClick={miGitHub}/>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default BarraNav;