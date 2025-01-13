import React, {useState, useRef, useEffect} from "react";

import '../../Css/JuegosRNDcss/JRDeletrear.css';

function JRDeletrear({pasarSumarPuntos, deletrearOcultar, deletrarFin, activar, activarContGlob}) {

  const deletreoRef = useRef(null);

  const [ palabraDeletreo, setPalabraDeletreo ] = useState('');
  const [ palabra, setPalabra ] = useState('');
  const [ palabrasCompl, setPalabrasCompl ] = useState([]);

  const [ esInputDeletreo, setEsInputDeletreo ] = useState(true);

  const [ contadorDel, setContadorDel ] = useState(15.00);
  const [ estadoContDel, setEstadoContDel ] = useState(false);

  const manejarCambioPalabra = (e) => {
    setPalabraDeletreo(e.target.value);
  };

  const fetchPalabra = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/words/an-array-of-spanish-words/master/index.json');
      const data = await response.json();

      const palabrasEsp = data;
      const palabraAleatoria = palabrasEsp[Math.floor(Math.random() * palabrasEsp.length)];

      setPalabra(palabraAleatoria);
    } catch (error) {
      console.error('Error al obtener las palabras:', error);
    };
  }
  
  useEffect(()=>{
    let intervalo;
    if (estadoContDel === true && contadorDel > 0){
      intervalo = setInterval(() => {
        setContadorDel((prevContadorDel) => Math.max(prevContadorDel - 0.01, 0));
      }, 10);
    } else if (contadorDel === 0){
      setEstadoContDel(false);
      clearInterval(intervalo);
      setEsInputDeletreo(true);
      deletrarFin(true);
    };
    return () => clearInterval(intervalo);
  },[estadoContDel, contadorDel]);

  useEffect(()=>{
    const detectarTecla = (e) => {
      if ((e.key === '.') && activar === false){
        setEstadoContDel(true);
        activarContGlob(true);
        setEsInputDeletreo(false);
        setTimeout(()=>{
          deletreoRef.current?.focus();
        }, 0);
      }
    };
    
    if( activar === true ){
      setEstadoContDel(false);
      setPalabrasCompl([]);
      setEsInputDeletreo(true);
      deletreoRef.current.value = '';
      setTimeout(() => {
        setContadorDel(15.00);
      }, 50);
    };

    window.addEventListener('keydown',detectarTecla);

    return () => {
      window.removeEventListener('keydown',detectarTecla);
    };
  },[activar]);

  useEffect(()=>{
    if( palabra === '' ){
      fetchPalabra();
    }
    if( palabra !== '' && palabraDeletreo !== '' ){
      if((palabra.length === palabraDeletreo.length) && (palabra === palabraDeletreo.toLowerCase())){
        fetchPalabra();
        deletreoRef.current.value = '';
        setPalabraDeletreo('');
        pasarSumarPuntos();
        if(palabrasCompl.length === 0){
          setPalabrasCompl((prevPalabrasCompl) => [...prevPalabrasCompl, palabra]);
        }else if(palabrasCompl.length > 0){
          setPalabrasCompl((prevPalabrasCompl) => [...prevPalabrasCompl,", " + palabra]);
        }
        console.log("COMPLETADO");
      }else if ((palabra.length === palabraDeletreo.length) && (palabra !== palabraDeletreo.toLowerCase())){
        console.log('falta')
      }
    };

  },[palabraDeletreo, palabra, palabrasCompl, pasarSumarPuntos]);

  return(
    <div className={`${deletrearOcultar}`}>
      <div className="col-12 t1">
        <div className="col-12 col-sm-12 col-md-12 deleContCentro">
          <div className="col-12 col-sm-7 col-lg-5 col-xxl-4 d-flex flex-column align-items-center">
            <label className="delTextP">Presiona 「·」 para comenzar</label>
            <div className="col-12 t3">
              <div className="col-12 t3hijo">
                <label className="t4">{palabra}</label>
                <input
                  className="t2"
                  ref={deletreoRef}
                  onChange={manejarCambioPalabra} 
                  disabled={esInputDeletreo}
                  type="text" />
                <button
                  onClick={fetchPalabra}>
                    Cambiar Palabra
                </button>
                <label className="text-center"> {contadorDel.toFixed(2)} segundos</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 deleContListPalabras">
          <div className="t5">
            <label>{palabrasCompl}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JRDeletrear;