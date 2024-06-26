import React, {useRef, useState, useEffect} from 'react';


import "../Css/CaraOSello.css";

function CaraOSello({ enviar, cara, sello, resultadoCalculo, respuesta, historial, refInputNom, refInputRes, onFuncionB, activarFuncionEx}){

  // 1- SE ESTABLECE LA FUNCIÓN QUE SE EXPORTARÁ
  const funcionB = () => {
    setMountedHist(true);
  };

  // 2- SE ESTABLECE UN USEEFFECT PARA CONFIGURAR COMO SE USARÁ LA FUNCIÓN
  useEffect(() => {
    // Llama a la funciónB cuando el componente se monta
    if (activarFuncionEx === 'true') {
      onFuncionB(funcionB);
    }

    // Limpia la función cuando el componente se desmonta (opcional)
    return () => {
      onFuncionB(null);
    };
  }, [onFuncionB]);

  // 6- SE ESTABLECE EL SCROLL PARA QUE BAJE EL HISTORIAL
  const referenciaHistorial = useRef(null);
  const [ mountedHist, setMountedHist ] = useState(false);

  useEffect(() => {
    if ( referenciaHistorial.current && mountedHist === true ){
      setMountedHist(false);
      referenciaHistorial.current.scrollTop = referenciaHistorial.current.scrollHeight;
    }
  }, [mountedHist]);


  const agregarMarg = tamaño => {
    return( tamaño < 992 )
  }

  const [ claseMargenSup, setClaseMargenSup ] = useState(agregarMarg(window.innerWidth) ? 'margenSup' : '');

  useEffect(()=>{
    const cambioDeTamaño = () => {
      setClaseMargenSup(agregarMarg(window.innerWidth) ? 'margenSup' : '');
    }
    window.addEventListener('resize', cambioDeTamaño);

    return () => {
      window.removeEventListener('resize', cambioDeTamaño);
    };
  },[])

  return(
    <div className={`cara-o-sello ${claseMargenSup} col-12 col-lg-6`}>
      <div className="contenedor-respuestas col-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
        <div className='contenedor-imputs'>
          <label>Nombre </label>
          <input
            className='inputCaraOSello'
            type="text"
            id="nombre"
            ref={refInputNom} />
          <label>respuesta</label>
          <input
            className='inputCaraOSello'
            type="text"
            id="respuesta"
            ref={refInputRes}/>
          <button
            onClick={enviar}>
            Enviar
          </button>

          <div className="contenedor-botones">
            <button
              onClick={cara}>
              Cara
            </button>
            <label>O</label>
            <button
              onClick={sello}>
              Sello
            </button>
          </div>
        </div>
      </div>
    
      <div className="contenedor-resultados col-6 col-md-5 col-lg-6 col-xl-6 col-xxl-6">
        <label>Adivine si sale cara o sello, primero escriba su nombre y escoga su respuesta escribiendola o presionando uno de los botones</label>
        <br></br>
        <label>Ha salido: {resultadoCalculo}</label>
        <br></br>
        <label>
            Resultado: {respuesta}
        </label>
      </div>

      <div className="contenedor-historial col-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <label>
          Historial
        </label>
        <div
          id='a'
          className="historial-resultados"
          ref={referenciaHistorial}
          >
            {historial}
        </div>
      </div>
    </div>
  );
};

// 3- Exponer la funciónB mediante una función get
CaraOSello.getFuncionB = () => {
  return CaraOSello.funcionB;
};

export default CaraOSello;

