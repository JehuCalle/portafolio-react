import React, { useState, useEffect, useRef } from "react";
import LogoBootstrap from '../Img/bootstrap-5Logo.svg';
import LogoHTML from '../Img/html5Logo.png';
import LogoJS from '../Img/javaScriptLogo.png';
import LogoCSS from '../Img/cssLogo.png';
import LogoReact from '../Img/reactLogo2.png';
import LogoC from '../Img/cLogo.png';
import LogoJava from '../Img/javaLogo.png';


import { Link } from "react-router-dom";

import LogoVisualCode from '../Img/visualStudioCodeLogo.svg';
import LogoGitHub from '../Img/githubLogo.png';
import LogoGitHubDesk from '../Img/githubDesktopLogo.svg';
import LogoAndroidStudio from '../Img/androidStudioLogo.png';
import LogoUnity from '../Img/unityLogo.png';

import '../Css/Inicio.css';

function Inicio(){

  const notaRef = useRef(null);

  const cerrarNota = () => {
    notaRef.current.classList.add('animNota');
    setTimeout(()=>{
      if(notaRef.current === null) {
        console.log('notaRef null');
      }else if(notaRef.current !== null) {
        notaRef.current.classList.add('d-none');
      };
    },550)
  };

  return(
    <div className="contenedorDivs">
      <h1 className="testTitulo">Quien soy</h1>
      <div className="quienSoyCont col-11 col-sm-9 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
        
        <label className="textoSeparado">
          Mi nombre es Jehú Calle, vivo en Chile, en la región de Ñuble, actualmente mi objetivo es especializarme en el desarrollo front-end para luego aprender a desarrollar en back-end y ser un desarrollador full-stack y luego de ser un desarrollador full-stack, me gustaría aprender otros lenguajes de programación para incrementar mis conocimientos en programación.
        </label>
      </div>

      <div className="contenedorHabilidades">
        <h1>Habilidades en</h1>
        <div className="contenedorImagenesHab col-11 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-6">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <img
              className="logoBootstrap"
              src={LogoBootstrap}
              alt="Bootstrap logo" />
            <img
              className="logoHTML"
              src={LogoHTML}
              alt="HTML logo" />
            <img
              className="logoJS"
              src={LogoJS}
              alt="JavaScript logo" />
            <img
              className="logoCSS"
              src={LogoCSS}
              alt="CSS logo" />
            <img
              className="logoReact"
              src={LogoReact}
              alt="React logo" />
          </div>
        </div>
      </div>  
      <div className="campoProyectos col-12">
        <h1>Mis Proyectos</h1>
        <div className="contenedorProtectos col-12 col-sm-8 col-md-8 col-lg-10 col-xl-12 col-xxl-10">
          <div className="contenedorImagenesProy col-12">
            <Link
              className="proyectoActivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4"
              to= "Pages/ProyectosRND">
                <div className="proyectoN1">
                  <label className="h3">Proyecto N°1</label>
                  <label>Apartado donde se puede establece un color randon a un texto usando un boton, jugar al cara o sello, seleccionar e ingresar datos para crear un gato, consumir una API para agregar fotos y gifs y por ultimo se simula un chat con 2 usuarios.</label>
                  <div className="miniContP col-12">
                    <div className="miniContPImg">
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoHTML}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoCSS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoJS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoReact}/>
                    </div>
                    <label>2023 </label>
                  </div>
                </div>
            </Link>
            <Link 
              className="proyectoActivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4"
              to= "Pages/TarjetaRND">
                <div className="proyectoN2">
                  <label className="h3">Proyecto N°2</label>
                  <label>Apartado donde se simula un triptico usando css.</label>
                  <div className="miniContP col-12">
                    <div className="miniContPImg">
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoHTML}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoCSS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoJS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoReact}/>
                    </div>
                    <label>2023 </label>
                  </div>
                </div>
            </Link>
            <Link 
              className="proyectoActivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4"
              to= "Pages/PiedraPapelTijera">
                <div className="proyectoN3">
                  <label className="h3">Proyecto N°3</label>
                  <label>Apartado para jugar a piedra, papel o tijera, si te quedas sin vidas pierdes.</label>
                  <div className="miniContP col-12">
                    <div className="miniContPImg">
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoHTML}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoCSS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoJS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoReact}/>
                    </div>
                    <label>2023 </label>
                  </div>
                </div>
            </Link>
            <Link 
              className="proyectoActivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4"
              to= "Pages/DiferentesAnim">
                <div className="proyectoN4">
                  <label className="h3">Proyecto N°4</label>
                  <label>Apartado en donde primero se tiene un campo con botones con animaciones vanilla, luego un formulario con alertas usando MUI Core, y después otro campo pero con botones y alertas de MUI Core y en general se validan los datos ingresados usando Regex</label>
                  <div className="miniContP col-12">
                    <div className="miniContPImg">
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoHTML}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoCSS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoJS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoReact}/>
                    </div>
                    <label>30 Marzo 2024 </label>
                  </div>
                </div>
            </Link>
            <Link
              className="proyectoDesactivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4">
                <div className="proyectoN5">
                  <label className="h3">Proyecto N°5</label>
                  <label>Proximamente experimentando con shaders Proximamente experimentando con shaders Proximamente experimentando con shaders Proximamente experimentando con shaders Proximamente experimentando con shaders Proximamente experimentando con shaders</label>
                  <label> XXXXXXX, XXXX </label>
                </div>
            </Link>
            <Link
              className="proyectoDesactivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4">
                <div className="proyectoN6">
                  <label className="h3">Proyecto N°6</label>
                  <label>Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente Proximamente</label>
                  <label> XXXXXXX, XXXX </label>
                </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="contenedorHerramientas col-12">
        <h1>Herramientas que utilizo</h1>
        <div className="contenedorImagenesHerr col-8 col-sm-7 col-md-6 col-lg-5 col-xl-5 col-xxl-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <img
              className="logoVisualCode"
              src={LogoVisualCode}
              alt="Visual Studio Code logo" />
            <img
              className="logoGitHub"
              src={LogoGitHub}
              alt="GitHub logo" />
            <img
              className="logoGitHubDesk"
              src={LogoGitHubDesk}
              alt="GitHub Desktop logo" />
          </div>
        </div>
      </div>
      <div
        className="contNota col-4 col-sm-3 col-md-3 col-lg-2 col-xxl-2"
        ref={notaRef}>
        <button
          className="btnNota"
          onClick={cerrarNota}>
            X
        </button>
        <label className="nota">Por favor, no refrescar los apartados que no sean este. (Se está intentando solucionar el bug 🙇)</label>
      </div>
    </div>
  );
};

export default Inicio;