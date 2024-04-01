import React, { useState, useEffect, useRef } from "react";
import LogoBootstrap from '../Img/bootstrap-5Logo.svg';
import LogoHTML from '../Img/html5Logo.png';
import LogoJS from '../Img/javaScriptLogo.png';
import LogoCSS from '../Img/cssLogo.png';
import LogoReact from '../Img/reactLogo2.png';
import LogoC from '../Img/cLogo.png';
import LogoJava from '../Img/javaLogo.png';

import GifRandom from '../Gif/animacion.gif';

import { Link } from "react-router-dom";

import LogoVisualCode from '../Img/visualStudioCodeLogo.svg';
import LogoGitHub from '../Img/githubLogo.png';
import LogoGitHubDesk from '../Img/githubDesktopLogo.svg';
import LogoAndroidStudio from '../Img/androidStudioLogo.png';
import LogoUnity from '../Img/unityLogo.png';

import '../Css/Inicio.css';

function Inicio(){

  return(
    <div className="contenedorDivs">
      <h1 className="testTitulo">Quien soy</h1>
      <div className="quienSoyCont col-11 col-sm-9 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
        
        <label className="textoSeparado">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui facere distinctio autem rerum fugit iure molestias praesentium, amet eius, commodi ipsam quia optio neque itaque vel labore suscipit dolorum!
        </label>
      </div>

      <div className="contenedorHabilidades">
        <h1>Habilidades en</h1>
        <div className="contenedorImagenesHab col-11 col-sm-9 col-md-8 col-lg-9 col-xl-8 col-xxl-8">
          <div className="col-12 col-sm-12 col-md-11 col-lg-7 col-xl-7 col-xxl-7">
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
          </div>
          <div className="col-8 col-sm-8 col-md-7 col-lg-5 col-xl-5 col-xxl-5">
            <img
              className="logoReact"
              src={LogoReact}
              alt="React logo" />
            <img
              className="logoC"
              src={LogoC}
              alt="C# logo" />
            <img
              className="logoJava"
              src={LogoJava}
              alt="Java logo" />
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
                  <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui quas laudantium dignissimos perspiciatis. Nisi architecto, perferendis animi assumenda, ipsum quo, quis labore dolore blanditiis accusantium odio quas quia at?</label>
                  <label>
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
                    XXXXXXX, 2023 
                  </label>
                </div>
            </Link>
            <Link 
              className="proyectoActivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4"
              to= "Pages/TarjetaRND">
                <div className="proyectoN2">
                  <label className="h3">Proyecto N°2</label>
                  <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui quas laudantium dignissimos perspiciatis. Nisi architecto, perferendis animi assumenda, ipsum quo, quis labore dolore blanditiis accusantium odio quas quia at?</label>
                  <label>
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
                    XXXXXXX, 2023 
                  </label>
                </div>
            </Link>
            <Link 
              className="proyectoActivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4"
              to= "Pages/PiedraPapelTijera">
                <div className="proyectoN3">
                  <label className="h3">Proyecto N°3</label>
                  <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui quas laudantium dignissimos perspiciatis. Nisi architecto, perferendis animi assumenda, ipsum quo, quis labore dolore blanditiis accusantium odio quas quia at?</label>
                  <label>
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
                    XXXXXXX, 2023 
                  </label>
                </div>
            </Link>
            <Link 
              className="proyectoActivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4"
              to= "Pages/DiferentesAnim">
                <div className="proyectoN4">
                  <label className="h3">Proyecto N°4</label>
                  <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui quas laudantium dignissimos perspiciatis. Nisi architecto, perferendis animi assumenda, ipsum quo, quis labore dolore blanditiis accusantium odio quas quia at?</label>
                  <label>
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
                    XXXXXXX, 2023 
                  </label>
                </div>
            </Link>
            <Link
              className="proyectoDesactivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4">
                <div className="proyectoN5">
                  <label className="h3">Proyecto N°5</label>
                  <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui quas laudantium dignissimos perspiciatis. Nisi architecto, perferendis animi assumenda, ipsum quo, quis labore dolore blanditiis accusantium odio quas quia at?</label>
                  <label> XXXXXXX, XXXX </label>
                </div>
            </Link>
            <Link
              className="proyectoDesactivado dividirPartesIguales col-12 col-lg-6 col-xl-4 col-xxl-4">
                <div className="proyectoN6">
                  <label className="h3">Proyecto N°6</label>
                  <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui quas laudantium dignissimos perspiciatis. Nisi architecto, perferendis animi assumenda, ipsum quo, quis labore dolore blanditiis accusantium odio quas quia at?</label>
                  <label> XXXXXXX, XXXX </label>
                </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="contenedorHerramientas col-12">
        <h1>Herramientas que utilizo</h1>
        <div className="contenedorImagenesHerr col-8 col-sm-6 col-md-6 col-lg-6 col-xl-7 col-xxl-5">
          <div className="col-12 col-sm-12 col-md-11 col-lg-7 col-xl-7 col-xxl-7">
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
          <div className="col-8 col-sm-8 col-md-7 col-lg-5 col-xl-5 col-xxl-5">
            <img
              className="logoAndroidStudio"
              src={LogoAndroidStudio}
              alt="Android Studio logo" />
            <img
              className="logoUnity"
              src={LogoUnity}
              alt="Unity logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;