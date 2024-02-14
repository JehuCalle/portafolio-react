import React, {useRef, useState, useEffect} from "react";


import '../Css/ListaDeGatos.css';
import GatoFormulario from "./GatoFormulario";
import Gato from "./Gato";


function ListaDeGatos(props, ref){

  const referencia = useRef(null);
  const [mountedT, setMountedT] = useState(false);

  useEffect(() => {
    if(referencia.current && mountedT === true){
      setMountedT(false);
      console.log("aaa");
      referencia.current.scrollTop = referencia.current.scrollHeight;
    };
  }, [ mountedT]);




  const [ gatos, setGatos ] = useState([]);

  const agregarGato = gato => {
    if(gato.nombre.trim() && gato.edad.trim() && gato.clase.trim() && gato.arma.trim()){
      gato.nombre = gato.nombre.trim();
      gato.edad = gato.edad.trim();
      gato.clase = gato.clase.trim();
      gato.arma = gato.arma.trim();
      setMountedT(true);
      const gatosActualizados = [gato, ...gatos];
      setGatos(gatosActualizados);
      console.log(gatosActualizados);
    };
  };

  function ObtenerIndice(id){
    const reducirVidaGato = [...gatos]

    const indice = reducirVidaGato.findIndex( gato => gato.id === id);

    return(indice)
  }
  
  const Habilidad1 = (id) => {
    const reducirVidaGato = [...gatos]

    if (ObtenerIndice(id) !== -1) {
      reducirVidaGato[ObtenerIndice(id)].vida = reducirVidaGato[ObtenerIndice(id)].vida -10;

      if(reducirVidaGato[ObtenerIndice(id)].clase === "Asesino"){
        console.log("GATO ASESINO");
      }else if(reducirVidaGato[ObtenerIndice(id)].clase === "Guerrero"){
        console.log("GATO GUERRERO");
      }else if(reducirVidaGato[ObtenerIndice(id)].clase === "Healer"){
        console.log("GATO HEALER");
      }else if(reducirVidaGato[ObtenerIndice(id)].clase === "Mago"){
        console.log("GATO MAGO");
      }else if(reducirVidaGato[ObtenerIndice(id)].clase === "Tanque"){
        console.log("GATO TANQUE");
      };

      console.log("HABILIDAD N°1.....REDUCIENDO VIDA DE: "+reducirVidaGato[ObtenerIndice(id)].nombre)
      setGatos(reducirVidaGato);
    } else {
      console.log("No se encontró ninguna persona con ese ID.");
      }
  };

  const Habilidad2 = id => {
    const reducirVidaGato = [...gatos]

    if (ObtenerIndice(id) !== -1) {
      reducirVidaGato[ObtenerIndice(id)].mana = reducirVidaGato[ObtenerIndice(id)].mana -10;

      if(reducirVidaGato[ObtenerIndice(id)].clase === "Asesino"){
        console.log("GATO ASESINO");
      }else if(reducirVidaGato[ObtenerIndice(id)].clase === "Guerrero"){
        console.log("GATO GUERRERO");
      }else if(reducirVidaGato[ObtenerIndice(id)].clase === "Healer"){
        console.log("GATO HEALER");
      }else if(reducirVidaGato[ObtenerIndice(id)].clase === "Mago"){
        console.log("GATO MAGO");
      }else if(reducirVidaGato[ObtenerIndice(id)].clase === "Tanque"){
        console.log("GATO TANQUE");
      };

      console.log("HABILIDAD N°2.....REDUCIENDO MANA DE: "+reducirVidaGato[ObtenerIndice(id)].nombre)
      setGatos(reducirVidaGato);
    } else {
      console.log("No se encontró ninguna persona con ese ID.");
      }
  };
  const Habilidad3 = id => {
    const reducirVidaGato = [...gatos]

    if (ObtenerIndice(id) !== -1) {
      reducirVidaGato[ObtenerIndice(id)].vida = reducirVidaGato[ObtenerIndice(id)].vida +10;

      console.log("RECUPERANDO VIDA DE: "+reducirVidaGato[ObtenerIndice(id)].nombre)
      setGatos(reducirVidaGato);
    } else {
      console.log("No se encontró ninguna persona con ese ID.");
      }
  };
  const Habilidad4 = id => {
    const reducirVidaGato = [...gatos]

    if (ObtenerIndice(id) !== -1) {
      reducirVidaGato[ObtenerIndice(id)].mana = reducirVidaGato[ObtenerIndice(id)].mana +10;

      console.log("RECUPERANDO MANA DE: "+reducirVidaGato[ObtenerIndice(id)].nombre)
      setGatos(reducirVidaGato);
    } else {
      console.log("No se encontró ninguna persona con ese ID.");
      }
  };
  return(
    <div className="gato-rpg">
      <div className="contenedor-caracteristicas">
        <GatoFormulario
          onSubmit={agregarGato}/>
      </div>
      <div
      className="contenedor-lista"
      ref={referencia}>
        {
          gatos.map((gato) => 
            <Gato
              key={gato.id}
              id={gato.id}
              nombre={gato.nombre}
              edad={gato.edad}
              clase={gato.clase}
              arma={gato.arma}
              imagen={gato.imagen}
              vida={gato.vida}
              mana={gato.mana}
              verID1={Habilidad1}
              verID2={Habilidad2}
              verID3={Habilidad3}
              verID4={Habilidad4}  />
          )
        }
      </div>
  </div>
  );
};

export default (ListaDeGatos);