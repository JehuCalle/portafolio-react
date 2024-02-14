import React from "react";
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
      <div className="quienSoyCont">
        <h1>Quien soy</h1>
        <label className="textoSeparado">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui facere distinctio autem rerum fugit iure molestias praesentium, amet eius, commodi ipsam quia optio neque itaque vel labore suscipit dolorum!
        </label>
      </div>

      <div className="contenedorHabilidades">
        <h1>Habilidades en</h1>
        <div className="contenedorImagenesHab">
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
            className="logoC"
            src={LogoC}
            alt="C# logo" />
          <img
            className="logoJava"
            src={LogoJava}
            alt="Java logo" />
        </div>
      </div>  

      <div className="">
        <img
          className="gifRandom"
          src={GifRandom}
          alt="Gif Random" />
      </div>

      <div className="contenedorProtectos">
        <h1>MIS PROYECTOS</h1>
          <div className="contenedorImagenesProy">
            <Link
              className="proyecto1 dividirPartesIguales"
              to= "Pages/ProyectosRND">Proyecto N°1
            </Link>
            <Link 
              className="proyecto2 dividirPartesIguales"
              to= "Pages/TarjetaRND">Proyecto N°2
            </Link>
            <Link 
              className="proyecto3 dividirPartesIguales"
              to= "Pages/PiedraPapelTijera">Proyecto N°3
            </Link>
          </div>
          <div className="contenedorImagenesProy">
            <Link 
              className="proyecto4 dividirPartesIguales"
              to= "Pages/PiedraPapelTijeraConCSS">Proyecto N°4
            </Link>
            <label className="proyecto5 dividirPartesIguales">proyecto5</label>
            <label className="proyecto6 dividirPartesIguales">proyecto6</label>
          </div>
      </div>

      <div className="contenedorHerramientas">
        <h1>Herramientas que utilizo</h1>
        <div className="contenedorImagenesHerr">
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
  );
};

export default Inicio;