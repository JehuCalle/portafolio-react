import React, {useRef, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

import MensajePrimChat from "./MensajePrimChat";
import MensajeSeguChat from "./MensajeSeguChat";
import FormularioPrimerChat from "./FormularioPrimerChat";
import FormularioSegundoChat from "./FormularioSegundoChat";

import '../Css/ListaChat.css';

function ListaChat() {

  const referencia = useRef(null);

  /* PRIMER CHAT PRIMER CHAT PRIMER CHAT PRIMER CHAT PRIMER CHAT PRIMER CHAT PRIMER CHAT PRIMER CHAT PRIMER CHAT PRIMER CHATPRIMER CHAT  */

  const [ mountedMSG, setMountedMSG ] = useState([]);

  useEffect(() => {
    if( referencia.current && mountedMSG === true){
      setMountedMSG(false);
      referencia.current.scrollTop = referencia.current.scrollHeight;
    };
  }, [ mountedMSG ]);

  const [ todosLosMSGs, settodosLosMSGs ] = useState([]);

  const agregarPrimerMSG = mensaje => {
    if(mensaje.mensaje.trim()){
      mensaje.mensaje = mensaje.mensaje.trim()
      setMountedMSG(true);
      const primerosMSGsActualizados = [ ...todosLosMSGs, mensaje];
      settodosLosMSGs(primerosMSGsActualizados);
    };
  }; 


  const agregarSegundoMSG = mensaje => {
    if(mensaje.mensaje.trim()){
      mensaje.mensaje = mensaje.mensaje.trim();
      setMountedMSG(true);
      const segundosMSGsActualizados = [ ...todosLosMSGs, mensaje]
      settodosLosMSGs(segundosMSGsActualizados);
    };
  };


  useEffect(() => {
    if(mountedMSG === true){
      console.log(todosLosMSGs);
      setMountedMSG(false);
    }
  }, [ mountedMSG, todosLosMSGs ]);

  return(
    <div className='Chat'>
      <div className="ContenedorChats col-12 col-md-5 col-lg-4 col-xl-4 col-xxl-3">
        <FormularioPrimerChat
          onSubmit = {agregarPrimerMSG}/>
        <FormularioSegundoChat
          onSubmit= {agregarSegundoMSG}/>
      </div>
      <div className="RegistroChat col-12 col-md-5 col-lg-4 col-xl-3 col-xxl-3">
        <div
          className="contenedorHistorial"
          ref={referencia}>
          {
            todosLosMSGs.map((mensaje) => {
              if(mensaje.tipo === "primero"){
                return(
                  <MensajePrimChat
                  key = {uuidv4()}
                  id = {mensaje.id}
                  fecha= {mensaje.fecha}
                  tipo = {mensaje.tipo}
                  mensaje= {mensaje.mensaje}
                />
                );
              }else{
                return(
                  <MensajeSeguChat
                    key = {uuidv4()}
                    id = {mensaje.id}
                    fecha = {mensaje.fecha}
                    tipo = {mensaje.tipo}
                    mensaje = {mensaje.mensaje}
                  />

                );
              }
            })
          }

          {
            /*

              */
          }
        </div>
      </div>
    </div>
  )
};

export default ListaChat;