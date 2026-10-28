import React, { useState, useEffect, useRef } from "react";
import LogoBootstrap from '../Img/bootstrap-5Logo.svg';
import LogoHTML from '../Img/html5Logo.png';
import LogoJS from '../Img/javaScriptLogo.png';
import LogoCSS from '../Img/cssLogo.png';
import LogoReact from '../Img/reactLogo2.png';
import LogoMongoDB from '../Img/mongoDBLogo.png';
import LogoMySQL from '../Img/mySQLLogo.png';
import LogoTailwindCSS from '../Img/tailwindcss.png';
import LogoFirebase from '../Img/firebaseLogo.png';
import LogoNotifee from '../Img/notifeeLogo.png';

import Xarrow from 'react-xarrows';


import { Link } from "react-router-dom";

import LogoVisualCode from '../Img/visualStudioCodeLogo.svg';
import LogoGitHub from '../Img/githubLogo.png';
import LogoGitHubDesk from '../Img/githubDesktopLogo.svg';

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
      <div className="col-12 py-5 row justify-content-evenly align-items-center">
        <div className="quienSoyCont col-10 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-6">
          <h1 className="testTitulo">Quien soy</h1>
          <label className="textoSeparado">
            Mi nombre es Jehú Calle, vivo en Chile, titulado como Ingeniero en Informática y me especializo en el desarrollo front-end de aplicaciones web con React JS + Bootstrap y en aplicaciones móviles con React Native + Tailwind CSS. Ya que me gusta ser autodidacta y aprender cada vez más cosas nuevas, he logrado estar más cerca de ser un desarrollador mobile full-stack, gracias a eso he logrado implementar varias funciones de Firebase a mi aplicación mobile, la cual me gustaría perfeccionar e implementar varias ideas más.
          </label>
        </div>
        <div className="contenedorHabilidades col-10 col-sm-10 col-md-10 col-lg-4">
          <h1>Habilidades en</h1>
          <div className="contenedorImagenesHab col-11 col-sm-8 col-md-8 col-lg-10 col-xl-10 col-xxl-10">
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
              <img
                className="logoFirebase" 
                alt="A"
                src={LogoFirebase}/>
              <img
                className="logoNotifee" 
                alt="A"
                src={LogoNotifee}/>
              <img
                className="logoTailwindCSS" 
                alt="A"
                src={LogoTailwindCSS}/>
            </div>
          </div>
        </div>  
      </div>



      <div className="campoProyectos col-12 flex-wrap">
        <h1 className="col-12 z-3">Mis Proyectos</h1>
        
        <div className="col-12 contConst">
          <div className="col-12 col-sm-12 col-md-8 col-lg-7 col-xl-5 col-xxl-5 contConstCap">
            <div
              className="bg-light constCapri constCap1"
              id="constCap1"/>
            <div
              className="bg-light constCapri constCap2"
              id="constCap2"/>
            <div
              className="bg-light constCapri constCap3"
              id="constCap3"/>
            <div
              className="bg-light constCapri constCap4"
              id="constCap4"/>
            <div
              className="bg-light constCapri constCap5"
              id="constCap5"/>
            <div
              className="bg-light constCapri constCap6"
              id="constCap6"/>
            <div
              className="bg-light constCapri constCap7"
              id="constCap7"/>
            <div
              className="bg-light constCapri constCap8"
              id="constCap8"/>
            <div
              className="bg-light constCapri constCap9"
              id="constCap9"/>
            <div
              className="bg-light constCapri constCap10"
              id="constCap10"/>
            <div
              className="bg-light constCapri constCap11"
              id="constCap11"/>
          </div>

          <Xarrow
            start="constCap1"
            end="constCap2"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea1" }}/>
          <Xarrow
            start="constCap2"
            end="constCap3"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea2" }}/>
          <Xarrow
            start="constCap3"
            end="constCap4"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea3" }}/>
          <Xarrow
            start="constCap4"
            end="constCap5"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea4" }}/>
          <Xarrow
            start="constCap5"
            end="constCap6"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea5" }}/>
          <Xarrow
            start="constCap1"
            end="constCap7"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea3" }}/>
          <Xarrow
            start="constCap7"
            end="constCap8"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea1" }}/>
          <Xarrow
            start="constCap8"
            end="constCap9"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea4" }}/>
          <Xarrow
            start="constCap9"
            end="constCap10"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea3" }}/>
          <Xarrow
            start="constCap6"
            end="constCap10"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea5" }}/>
          <Xarrow
            start="constCap10"
            end="constCap11"
            showHead={false}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            path="straight"
            color="rgb(0, 198, 248)"/*rgba(0, 61, 77, 0.192)*/
            strokeWidth={1.0}
            passProps={{ className: "parpadeoLinea4" }}/>
        </div>



        <div className="contenedorProyectos col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-7">
          <h3 className="col-12 m-0">React Native</h3>
          <div className="contenedorImagenesProy col-12">
            <Link
              className="proyectoActivado dividirPartesIguales col-12 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-6"
              to= "Pages/RNPlantas">
                <div className="proyectoN6">
                  <label className="h3">Guallaby</label>
                  <label>Aplicacion para celular el cual sirve como "alarma" para cuando debamos de regar nuestras plantas.</label>
                  <div className="miniContP col-12">
                    <div className="miniContPImg">
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoFirebase}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoNotifee}/>
                      <img
                        className="imgLogoProy bg-info" 
                        alt="A"
                        src={LogoTailwindCSS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoReact}/>
                    </div>
                    <label>08 Octubre 2026 </label>
                  </div>
                </div>
            </Link>
          </div>
        </div>
        <div className="contenedorProyectos col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-8">
          <h3 className="col-12 m-0">React JS</h3>
          <div className="contenedorImagenesProy col-12">
            <Link
              className="proyectoActivado dividirPartesIguales col-12 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5"
              to= "Pages/JuegosRND">
                <div className="proyectoN6">
                  <label className="h3">Mini juegos</label>
                  <label>Apartado donde en 120 segundos se tiene que superar varios minijuegos y lograr la mayor cantidad de puntos posibles.</label>
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
                        src={LogoBootstrap}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoJS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoReact}/>
                    </div>
                    <label>14 Enero 2025 </label>
                  </div>
                </div>
            </Link>
            <Link
              className="proyectoActivado dividirPartesIguales col-12 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5"
              to= "Pages/ExperimentoConBD">
                <div className="proyectoN5">
                  <label className="h3">Formulario con base de datos</label>
                  <label>Apartado en donde se envian y reciben datos de dos bases de datos, en la primera base de datos se utiliza MongoDB que es NoSQL y en la segunda base de datos se utiliza MySQL que es SQL.</label>
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
                        src={LogoBootstrap}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoJS}/>
                      <img
                        className="imgLogoProy" 
                        alt="A"
                        src={LogoReact}/>
                      <img
                        className="imgLogoProy bg-light" 
                        alt="A"
                        src={LogoMongoDB}/>
                      <img
                        className="imgLogoProy bg-light" 
                        alt="A"
                        src={LogoMySQL}/>
                    </div>
                    <label className="col-3 col-sm-4">17 Septiembre 2024 </label>
                  </div>
                </div>
            </Link>
            <Link 
              className="proyectoActivado dividirPartesIguales col-12 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5"
              to= "Pages/DiferentesAnim">
                <div className="proyectoN4">
                  <label className="h3">Botones Vanilla y Mui Core</label>
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
                        src={LogoBootstrap}/>
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
              className="proyectoActivado dividirPartesIguales col-12 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5"
              to= "Pages/PiedraPapelTijera">
                <div className="proyectoN3">
                  <label className="h3">Piedra, papel o tijera</label>
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
                        src={LogoBootstrap}/>
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
              className="proyectoActivado dividirPartesIguales col-12 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5"
              to= "Pages/TarjetaRND">
                <div className="proyectoN2">
                  <label className="h3">Triptico</label>
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
                        src={LogoBootstrap}/>
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
              className="proyectoActivado dividirPartesIguales col-12 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5"
              to= "Pages/ProyectosRND">
                <div className="proyectoN1">
                  <label className="h3">Varias cosas random</label>
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
                        src={LogoBootstrap}/>
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