import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import ImgGatoAsesino from '../Img/gato-asesino.jpg';
import ImgGatoGuerrero from '../Img/gato-guerrero.jpg';
import ImgGatoHealer from '../Img/gato-healer.jpg';
import ImgGatoMago from '../Img/gato-mago.jpg';
import ImgGatoTanke from '../Img/gato-tanke.jpg';

import '../Css/GatoFormulario.css';

function GatoFormulario(props){

  const [ inputNombre, setInputNombre ] = useState('');
  const [ inputEdad, setInputEdad ] = useState('');
  const [ claseGato, setClaseGato ] = useState("");
  const [ imagenGato, setImagenGato ] = useState("");
  const [ mountedClase, setMountedClase ] = useState(false);
  const [ armaGato, setArmaGato ] = useState("");
  const [ mountedArma, setMountedArma ] = useState(false);


  const [ btnClasePres, setBtnClasePres ] = useState([]);
  const [ btnArmaPres, setBtnArmaPres ] = useState([]);


  const manejarCambioNombre = e => {
    setInputNombre(e.target.value);
    console.log("CampoNombre");
  };
  const manejarCambioEdad = e => {
    setInputEdad(e.target.value);
    console.log("CampoEdad");
  };

  const claseAsesino = (e) => {
    setClaseGato("Asesino");
    setImagenGato(ImgGatoAsesino);
    if (btnClasePres.length >= 2) {
      setBtnClasePres([btnClasePres[1],e.target]);
    }else if (btnClasePres.length < 2 ) {
      setBtnClasePres([...btnClasePres, e.target]);
    };
  };
  const claseGuerrero = (e) => {
    setClaseGato("Guerrero");
    setImagenGato(ImgGatoGuerrero);
    if (btnClasePres.length >= 2) {
      setBtnClasePres([btnClasePres[1],e.target]);
    }else if (btnClasePres.length < 2 ) {
      setBtnClasePres([...btnClasePres, e.target]);
    };
  };
  const claseHealer = (e) => {
    setClaseGato("Healer");
    setImagenGato(ImgGatoHealer);
    if (btnClasePres.length >= 2) {
      setBtnClasePres([btnClasePres[1],e.target]);
    }else if (btnClasePres.length < 2 ) {
      setBtnClasePres([...btnClasePres, e.target]);
    };
  };
  const claseMago = (e) => {
    setClaseGato("Mago");
    setImagenGato(ImgGatoMago);
    if (btnClasePres.length >= 2) {
      setBtnClasePres([btnClasePres[1],e.target]);
    }else if (btnClasePres.length < 2 ) {
      setBtnClasePres([...btnClasePres, e.target]);
    };
  };
  const claseTanque = (e) => {
    setClaseGato("Tanque");
    setImagenGato(ImgGatoTanke);
    if (btnClasePres.length >= 2) {
      setBtnClasePres([btnClasePres[1],e.target]);
    }else if (btnClasePres.length < 2 ) {
      setBtnClasePres([...btnClasePres, e.target]);
    };
  };

  const armaDaga = (e) => {
    setArmaGato("Daga");
    if (btnArmaPres.length >= 2) {
      setBtnArmaPres([btnArmaPres[1],e.target]);
    }else if (btnArmaPres.length < 2 ) {
      setBtnArmaPres([...btnArmaPres, e.target]);
    };
  };
  const armaEspada = (e) => {
    setArmaGato("Espada");
    if (btnArmaPres.length >= 2) {
      setBtnArmaPres([btnArmaPres[1],e.target]);
    }else if (btnArmaPres.length < 2 ) {
      setBtnArmaPres([...btnArmaPres, e.target]);
    };
  };
  const armaArco = (e) => {
    setArmaGato("Arco");
    if (btnArmaPres.length >= 2) {
      setBtnArmaPres([btnArmaPres[1],e.target]);
    }else if (btnArmaPres.length < 2 ) {
      setBtnArmaPres([...btnArmaPres, e.target]);
    };
  };
  const armaBaculo = (e) => {
    setArmaGato("Baculo");
    if (btnArmaPres.length >= 2) {
      setBtnArmaPres([btnArmaPres[1],e.target]);
    }else if (btnArmaPres.length < 2 ) {
      setBtnArmaPres([...btnArmaPres, e.target]);
    };
  };
  const armaMandoble = (e) => {
    setArmaGato("Mandoble");
    if (btnArmaPres.length >= 2) {
      setBtnArmaPres([btnArmaPres[1],e.target]);
    }else if (btnArmaPres.length < 2 ) {
      setBtnArmaPres([...btnArmaPres, e.target]);
    };
  };
  useEffect(() => {
    console.log(btnClasePres)
    if( btnClasePres.length === 1){
      btnClasePres[0].classList.add("active");
    } else if (btnClasePres.length === 2) {
      btnClasePres[0].classList.remove("active");
      btnClasePres[1].classList.add("active");
    }

    if( btnArmaPres.length === 1){
      btnArmaPres[0].classList.add("active");
    } else if (btnArmaPres.length === 2) {
      btnArmaPres[0].classList.remove("active");
      btnArmaPres[1].classList.add("active");
    }

    if (mountedClase === true && mountedArma === true) {
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
        <button className="btnClasesFromu" onClick={claseAsesino}>Asesino</button>
        <button className="btnClasesFromu" onClick={claseGuerrero}>Guerrero</button>
        <button className="btnClasesFromu" onClick={claseHealer}>Healer</button>
        <button className="btnClasesFromu" onClick={claseMago}>Mago</button>
        <button className="btnClasesFromu" onClick={claseTanque}>Tanque</button>
      </div>
      <div>
        <label>Arma: </label>
        <button className="btnArmasFromu" onClick={armaDaga}>Dagas</button>
        <button className="btnArmasFromu" onClick={armaEspada}>Espada</button>
        <button className="btnArmasFromu" onClick={armaArco}>Arco</button>
        <button className="btnArmasFromu" onClick={armaBaculo}>Baculo</button>
        <button className="btnArmasFromu" onClick={armaMandoble}>Mandoble</button>
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