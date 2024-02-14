import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import ImgGatoAsesino from '../Img/gato-asesino.jpg';
import ImgGatoGuerrero from '../Img/gato-guerrero.jpg';
import ImgGatoHealer from '../Img/gato-healer.jpg';
import ImgGatoMago from '../Img/gato-mago.jpg';
import ImgGatoTanke from '../Img/gato-tanke.jpg';

function GatoFormulario(props){

  const [inputNombre, setInputNombre] = useState('');
  const [inputEdad, setInputEdad] = useState('');
  const [claseGato, setClaseGato] = useState("");
  const [ imagenGato, setImagenGato] = useState("");
  const [mountedClase, setMountedClase] = useState(false);
  const [armaGato, setArmaGato] = useState("");
  const [mountedArma, setMountedArma] = useState(false);


  const manejarCambioNombre = e => {
    setInputNombre(e.target.value);
    console.log("CampoNombre");
  };
  const manejarCambioEdad = e => {
    setInputEdad(e.target.value);
    console.log("CampoEdad");
  };

  const claseAsesino = () => {
    setClaseGato("Asesino");
    setImagenGato(ImgGatoAsesino);
  };
  const claseGuerrero = () => {
    setClaseGato("Guerrero");
    setImagenGato(ImgGatoGuerrero);
  };
  const claseHealer = () => {
    setClaseGato("Healer");
    setImagenGato(ImgGatoHealer);
  };
  const claseMago = () => {
    setClaseGato("Mago");
    setImagenGato(ImgGatoMago);
  };
  const claseTanque = () => {
    setClaseGato("Tanque");
    setImagenGato(ImgGatoTanke);
  };

  const armaDaga = () => {
    setArmaGato("Daga");
  };
  const armaEspada = () => {
    setArmaGato("Espada");
  };
  const armaArco = () => {
    setArmaGato("Arco");
  };
  const armaBaculo = () => {
    setArmaGato("Baculo");
  };
  const armaMandoble = () => {
    setArmaGato("Mandoble");
  };
  useEffect(() => {
    if(mountedClase === true && mountedArma === true){
      console.log("Se ha creado un Gato " + claseGato + " con " + armaGato);
      
      setMountedClase(false);
      setMountedArma(false);
    }
  }, [claseGato, armaGato, mountedClase, mountedArma])


  const manejarEnvio = e => {
    e.preventDefault();
    console.log("Enviando Gatito...");

    const gatitoNuevo = {
      id: uuidv4(),
      nombre: inputNombre,
      edad: inputEdad,
      clase: claseGato,
      arma: armaGato,
      imagen: imagenGato,
      vida: 100,
      mana: 100
    };
    props.onSubmit(gatitoNuevo);
  };

  return(
    <div>
      <div>
        <label>Clase: </label>
        <button onClick={claseAsesino}>Asesino</button>
        <button onClick={claseGuerrero}>Guerrero</button>
        <button onClick={claseHealer}>Healer</button>
        <button onClick={claseMago}>Mago</button>
        <button onClick={claseTanque}>Tanque</button>
      </div>
      <div>
        <label>Arma: </label>
        <button onClick={armaDaga}>Dagas</button>
        <button onClick={armaEspada}>Espada</button>
        <button onClick={armaArco}>Arco</button>
        <button onClick={armaBaculo}>Baculo</button>
        <button onClick={armaMandoble}>Mandoble</button>
      </div>
      <form
      onSubmit={manejarEnvio}>
        <div>
          <label>Nombre:</label>
          <input
            onChange={manejarCambioNombre}
            placeholder="Escriba su nombre"/>
        </div>
        <div>
          <label>Edad: </label>
          <input
            onChange={manejarCambioEdad}
            placeholder="Ingrese su edad"/>
          <div>
            <button>Crear</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GatoFormulario;