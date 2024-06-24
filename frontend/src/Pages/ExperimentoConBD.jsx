import React, { useEffect, useRef, useState } from "react";

import '../Css/ExperimentoConBD.css';

import axios from 'axios';
import EditarInfoMongoDB from "../Componentes/EditarInfoMongoDB.jsx";

function ExperimentoConBD (){

  const [textoLbl, setTextoLbl] =useState('Cargando...')

  //PRIMERA PARTE
  const refTexto = useRef(null);
  const [ texto, setTexto ] = useState('');
  const refPass = useRef(null);
  const [ pass, setPass ] = useState('');
  const refNumeros = useRef(null);
  const [ numeros, setNumeros ] = useState('');
  const refEmail = useRef(null);
  const [ email, setEmail ] = useState('');
  const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [ tooltipViOOcForm, setTooltipViOOc ] = useState('textoTooltipOc');
  const [ textoTooltipEmailForm, setTextoTooltipEmail ] = useState('');
  const [ estadoTooltipForm, setEstadoTooltip ] = useState('');
  //SEGUNDA PARTE
  const [ primerCheck, setPrimerCheck ] = useState(false);
  const [ segundoCheck, setSegundoCheck ] = useState(false);
  const [ tercerCheck, setTerceroCheck ] = useState(false);
  const [ cuartoCheck, setCuartoCheck ] = useState(false);
  const [ opcionRadio, setOpcionRadio ] = useState('');
  //TERCERA PARTE
  const refFecha = useRef(null);
  const [ fecha, setFecha ] = useState('');
  const refHora = useRef(null);
  const [ hora, setHora ] = useState('');
  const refArchivo = useRef('');
  const [ archivos, setArchivos ] = useState('');
  //CUARTA PARTE
  const refTextTarea = useRef(null);
  const [ textTarea, setTextTarea ] = useState('');

  const refAlerta = useRef(null);
  const [ txtAlerta, setTxtAlerta ] = useState('');
  const [ estadoTxtAlerta, setEstadoTxtAlerta ] = useState('');
  const [ estadoAnimAlerta, setEstadoAnimAlerta ] = useState('');
  const [ pesoArchivo, setPesoArchivo ] = useState('Solo imagen de maximo 100kb');

  // INGRESO DE DATOS
  const textoCaptura = (e) => {
    setTexto(refTexto.current.value);
  };
  const passCaptura = (e) => {
    setPass(refPass.current.value);
  };
  const numerosCaptura = (e) => {
    setNumeros(refNumeros.current.valueAsNumber);
  };
  const emailCaptura = (e) => {
    if(e.target.value !== ''){
      setTooltipViOOc('textTooltipVi');
    }else if(e.target.value === ''){
      setTooltipViOOc('textTooltipOC');
    }
    if(validarEmail.test(refEmail.current.value) === true){
      setEmail(refEmail.current.value);
      setEstadoTooltip('tooltipCorr');
      setTextoTooltipEmail('Email valido :]')
    }else if(validarEmail.test(refEmail.current.value) === false){
      setEmail('');
      setEstadoTooltip('tooltipIncorr');
      setTextoTooltipEmail('Email no valido :[');
    }
  };
  // SELECCION CHECKBOX
  const primerCheckCaptura = (e) => {
    setPrimerCheck(!primerCheck);
  };
  const segundoCheckCaptura = (e) => {
    setSegundoCheck(!segundoCheck);
  };
  const tercerCheckCaptura = (e) => {
    setTerceroCheck(!tercerCheck);
  };
  const cuartoCheckCaptura = (e) => {
    setCuartoCheck(!cuartoCheck);
  };
  // SELECCION CHECK RADIO
  const detectarCambioRadio = (e) => {
    setOpcionRadio(e.target.value);
  };
  // INGRESO FECHA - HORA - ARCHIVO/S
  const fechaCambio = (e) => {
    setFecha(e.target.value);
  };
  const horaCambio = (e) => {
    setHora(e.target.value);
  };
  const archivoCambio = (e) => {
    if(e.target.files[0].size < 100000){
      setArchivos(e.target.files[0]);
      setPesoArchivo('Peso del archivo permitido :]');
    }else if(e.target.files[0].size >= 100000){
      setArchivos('');
      setPesoArchivo('Pesa mucho :[');
    }
  };
  // DESCRIPCION
  const textTareaCambio = (e) => {
    setTextTarea(e.target.value);
  };


  /* VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - 
    VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - 
     VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - VER USUARIO - */
  const [ usuariosList, setUsuariosList ] = useState([])
  const [ estadoBD, setEstadoBD ] = useState('');

  const obtenerUsuarios = async (e) => {
    try {
      const resultado = await axios.get('http://localhost:3000/api/users');
      if(resultado.status === 200){
        setEstadoBD(true);
        console.log('Conexion base de datos establecida');
        setUsuariosList(resultado.data);
      }else{
        console.log('Error conexion base de datos');
        setEstadoBD(false);
        setTextoLbl('La base de datos no se encuentra disponible, lamento las molestias 🙇‍♂️');
      }
    } catch (error) {
      console.log('Error conexion base de datos');
      setEstadoBD(false);
      setTextoLbl('La base de datos no se encuentra disponible, lamento las molestias 🙇‍♂️');
    }
  };

  useEffect(()=>{
    const fetchUsuarios = async () => {
      try {
        obtenerUsuarios();
      } catch (error) {
        console.error("ERROR LISTA USUARIOS");
        console.log("ERROR LISTA USUARIOS");
      };
    };
    fetchUsuarios();
  },[])

  /* CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - 
    CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - 
     CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - CREAR USUARIO - */ 
  const [ listaInp, setListaInp ] = useState([])

  const agregarInputs = () => {
    setListaInp([
      refTexto.current,
      refPass.current,
      refNumeros.current,
      refEmail.current,
      refFecha.current,
      refHora.current,
      refArchivo.current,
      refTextTarea.current
    ])
  }

  const t1 = () => {
    for(let cont = 0; cont < 8; cont++ ){
      if(!!listaInp[cont].value === true){
        listaInp[cont].classList.remove('vacio');
        listaInp[cont].classList.add('lleno');
      }else if(!!listaInp[cont].value === false){
        listaInp[cont].classList.remove('lleno');
        listaInp[cont].classList.add('vacio');
      };
    };
    if(email !== ''){
      listaInp[3].classList.remove('vacio');
      listaInp[3].classList.add('lleno');
    }else if(email ===''){
      listaInp[3].classList.remove('lleno');
      listaInp[3].classList.add('vacio');
    }
    if(archivos !== ''){
      listaInp[6].classList.remove('vacio');
      listaInp[6].classList.add('lleno');
    }else if(archivos === ''){
      listaInp[6].classList.remove('lleno');
      listaInp[6].classList.add('vacio');
    };
  };

  const [ estadoUEForm, setEstadoUEForm ] = useState(false); 

  const envioFormMongoBD = (e) => {
    e.preventDefault();
    setEstadoUEForm(true);
    agregarInputs()

    setEstadoAnimAlerta('animAlertaBD');
    setTimeout(() => {
      setEstadoAnimAlerta('');
    }, 1700);
  };

  useEffect(()=>{
    if(estadoUEForm === true){
      t1();
      if(!!texto && !!pass && !!numeros && !!email && !!opcionRadio && !!fecha && !!hora && !!archivos && !!textTarea ){
        const reader = new FileReader();
  
        reader.onloadend = async () => {
          const ArchivoBase64 = reader.result;
  
          await axios.post('http://localhost:3000/api/users', {
            Texto: texto,
            Pass: pass,
            Numeros: numeros,
            Email: email,
            Primero: primerCheck,
            Segundo: segundoCheck,
            Tercero: tercerCheck,
            Cuarto: cuartoCheck,
            Opcion: opcionRadio,
            Fecha: fecha,
            Hora: hora,
            ArchivoBase64,
            Descripcion: textTarea
          });
          obtenerUsuarios();
        };
  
        reader.readAsDataURL(archivos);
  
        refTexto.current.value = '';
        setTexto('');
        refPass.current.value = '';
        setPass('');
        refNumeros.current.value = '';
        setNumeros('');
        refEmail.current.value = '';
        setEmail('');
        setTooltipViOOc('textTooltipOC');
        setPrimerCheck(false);
        setSegundoCheck(false);
        setTerceroCheck(false);
        setCuartoCheck(false);
        setOpcionRadio('');
        refFecha.current.value = '';
        setFecha('');
        refHora.current.value = '';
        setHora('');
        refArchivo.current.value = '';
        setArchivos('');
        refTextTarea.current.value = '';
        setTextTarea('');
        setPesoArchivo('Solo imagen de maximo 100kb');

        for( let cont = 0; cont < 8; cont++ ){
          listaInp[cont].classList.remove('lleno')
        };
  
        setEstadoTxtAlerta('alertaBien');
        setTxtAlerta('Usuario Agregado :]')

        setEstadoUEForm(false);
      }else{
        console.log('FALTAN DATOS');
        setEstadoTxtAlerta('alertaMal');
        setTxtAlerta('Faltan datos :[');
        setEstadoUEForm(false);
      }
    }
  },[estadoUEForm, texto, pass, numeros, email, primerCheck, segundoCheck, tercerCheck, cuartoCheck, opcionRadio, fecha, hora, archivos, textTarea, listaInp]);

  /* EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - 
    EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - 
     EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - EDITAR USUARIO - */
  const [ capId, setCapId ] = useState('')
  const [ capTexto, setCapTexto ] = useState('');
  const [ textoEd, setTextoEd ] = useState('');
  const refCapTexto = useRef(null);//

  const [ capPass, setCapPass ] = useState('');
  const [ passEd, setPassEd ] = useState('');
  const refCapPass = useRef(null);//

  const [ capNumeros, setCapNumeros ] = useState('');
  const [ numerosEd, setNumerosEd ] = useState('');
  const refCapNumeros = useRef(null);//

  const [ capEmail, setCapEmail ] = useState('');
  const [ emailEd, setEmailEd ] = useState('');
  const [ estadoEmailEd, setEstadoEmailEd ] = useState(false);
  const refCapEmail = useRef(null);//
  const [ TooltipEmailViOOcEd, setTooltipEmailEd ] = useState('textoTooltipOc');
  const [ estadoTooltipEmailEd, setEstadoTooltipEmailEd ] = useState('');
  const [ txtTooltipEmailEd, setTxtTooltipEmailEd ] = useState('');

  const [ capPrimero, setCapPrimero ] = useState('');
  const [ capSegundo, setCapSegundo ] = useState('');
  const [ capTercero, setCapTercero ] = useState('');
  const [ capCuarto, setCapCuarto ] = useState('');
  const [ capOpcion, setCapOpcion] = useState('');
  const [ capFecha, setCapFecha ] = useState('');
  const [ fechaEd, setFechaEd ] = useState('');
  const refCapFecha = useRef(null);//

  const [ capHora, setCapHora ] = useState('');
  const [ horaEd, setHoraEd ] = useState('');
  const refCapHora = useRef(null)//

  const [ capDescripcion, setCapDescripcion ] = useState('');
  const [ descripcionEd, setDescripcionEd ] = useState('');
  const refCapDescripcion = useRef(null);//

  const [ capArchivo, setCapArchivo ] = useState('');
  const [ capArchivoEdit, setCapArchivoEdit ] = useState('');
  const [ reiniciarArchivo, setReiniciarArchivo ] = useState(Date.now());
  const refCapArchivo = useRef(null);//

  const [ pesoArchivoEd, setPesoArchivoEd ] = useState('Solo imagen de maximo 100kb');

  const [ usEf, setUsEf ] = useState(false);

  const cambioTextoEd = (e) => {
    setTextoEd(e.target.value);
  };
  const cambioPassEd = (e) => {
    setPassEd(e.target.value);
  };
  const cambioNumerosEd = (e) => {
    setNumerosEd(e.target.value);
  };
  const cambioEmailEd = (e) => {
    if(e.target.value !== ''){
      setTooltipEmailEd('textTooltipVi');
    }else if(e.target.value === ''){
      setTooltipEmailEd('textoTooltipOc');
    }
    if(validarEmail.test(e.target.value) === true){
      setEmailEd(e.target.value);
      setEstadoTooltipEmailEd('tooltipCorr');
      setTxtTooltipEmailEd('Email valido :]');
      setEstadoEmailEd(true);
    }else if(validarEmail.test(e.target.value) === false){
      setEmailEd(e.target.value);
      setEstadoTooltipEmailEd('tooltipIncorr');
      setTxtTooltipEmailEd('Email no valido :[');
      setEstadoEmailEd(false)
    };
  };
  const manejarCambioPri = () => {
    setCapPrimero(!capPrimero);
  };
  const manejarCambioSeg = () => {
    setCapSegundo(!capSegundo);
  };
  const manejarCambioTer = () => {
    setCapTercero(!capTercero);
  };
  const manejarCambioCuar = () => {
    setCapCuarto(!capCuarto);
  };
  const estadoRadio = (estadoRadio) => {
    if(estadoRadio.target.value === '1'){
      setCapOpcion('1')
    }else if (estadoRadio.target.value === '2'){
      setCapOpcion('2')
    }else if (estadoRadio.target.value === '3'){
      setCapOpcion('3')
    }else if (estadoRadio.target.value === '4'){
      setCapOpcion('4')
    }
  };
  const cambioFechaEd = (e) => {
    setFechaEd(e.target.value);
  };
  const cambioHoraEd = (e) => {
    setHoraEd(e.target.value);
  };
  const cambiosArchEdit = (e) => {
    if(e.target.files[0].size < 100000){
      setCapArchivoEdit(e.target.files[0]);
      setPesoArchivoEd('Peso del archivo permitido :]');
    }else if(e.target.files[0].size > 100000){
      setCapArchivoEdit('');
      setPesoArchivoEd('Pesa mucho :[')
    };
  };
  const cambioDescripcionEd = (e) => {
    setDescripcionEd(e.target.value);
  };




  const cerrarEditor = () => {
    setMostrarONo(false);
  };

  const editarUsuario = async (id) => {
    const reste = await axios.get('http://localhost:3000/api/users/' + id);
    console.log(reste.data)
    setCapId(reste.data._id);
    setCapTexto(reste.data.Texto)
    setCapPass(reste.data.Pass);
    setCapNumeros(reste.data.Numeros);
    setCapEmail(reste.data.Email);
    setCapPrimero(reste.data.Primero);
    setCapSegundo(reste.data.Segundo);
    setCapTercero(reste.data.Tercero);
    setCapCuarto(reste.data.Cuarto);
    setCapOpcion(reste.data.Opcion);
    setCapFecha(reste.data.Fecha);
    setCapHora(reste.data.Hora);
    setCapArchivo(reste.data.ArchivoBase64)
    setCapDescripcion(reste.data.Descripcion);

    setTextoEd('');
    setPassEd('');
    setNumerosEd('');
    setEmailEd('');
    setTooltipEmailEd('textoTooltipOc');
    setEstadoEmailEd(false);
    setFechaEd('');
    setHoraEd('');
    setReiniciarArchivo(Date.now());
    setDescripcionEd('');
    setPesoArchivoEd('Solo imagen de maximo 100kb');
    
    obtenerUsuarios();
    

    
    setMostrarONo(true);
  }

  const enviarEditar = async (e) => {
    e.preventDefault()  
    setUsEf(true);
    if(textoEd === ''){
      setTextoEd(capTexto);
    };
    if(passEd === ''){
      setPassEd(capPass);
    };
    if(numerosEd === ''){
      setNumerosEd(capNumeros);
    };
    if(emailEd === '' ||   estadoEmailEd === false){
      setEmailEd(capEmail);
    };
    if(fechaEd === ''){
      setFechaEd(capFecha);
    };
    if(horaEd === ''){
      setHoraEd(capHora);
    };
    if(descripcionEd === ''){
      setDescripcionEd(capDescripcion);
    };
  };
  useEffect(()=>{
    if(usEf === true){
      const testeo = async () => {
        if(!!capArchivoEdit){
          const reader = new FileReader();
  
          reader.onloadend = async () => {
            const ArchivoBase64 = reader.result;
      
            await axios.put('http://localhost:3000/api/users/' + capId, {
              Texto: textoEd,
              Pass: passEd,
              Numeros: numerosEd,
              Email: emailEd,
              Primero: capPrimero,
              Segundo: capSegundo,
              Tercero: capTercero,
              Cuarto: capCuarto,
              Opcion: capOpcion,
              Fecha: fechaEd,
              Hora: horaEd,
              ArchivoBase64,
              Descripcion: descripcionEd 
            });
            obtenerUsuarios();
          };
          reader.readAsDataURL(capArchivoEdit);
        }else if(capArchivoEdit === ''){
          await axios.put('http://localhost:3000/api/users/' + capId, {
            Texto: textoEd,
            Pass: passEd,
            Numeros: numerosEd,
            Email: emailEd,
            Primero: capPrimero,
            Segundo: capSegundo,
            Tercero: capTercero,
            Cuarto: capCuarto,
            Opcion: capOpcion,
            Fecha: fechaEd,
            Hora: horaEd,
            ArchivoBase64: capArchivo,
            Descripcion: descripcionEd 
          });
          obtenerUsuarios();
        };
      };
      testeo();

      setCapTexto('');
      setCapPass('');
      setCapNumeros('');
      setCapEmail('');
      setTooltipEmailEd('textoTooltipOc');
      setEstadoEmailEd(false);
      setCapPrimero('');
      setCapSegundo('');
      setCapTercero('');
      setCapCuarto('');
      setCapOpcion('');
      setCapFecha('');
      setCapHora('');
      setCapDescripcion('');
      setCapArchivo('');
      setCapArchivoEdit('');
      
      setMostrarONo(false)

      setUsEf(false);
    }
  },[usEf, capArchivo, capId, textoEd, passEd, numerosEd, emailEd, fechaEd, horaEd, descripcionEd, capPrimero, capSegundo, capTercero, capCuarto, capOpcion, capArchivoEdit]);


  /* ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - 
    ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - 
     ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - ELIMINAR USUARIO - */
  const eliminarUsuario = async (id) => {
    await axios.delete('http://localhost:3000/api/users/' + id);
    obtenerUsuarios();
  };

  const [ mostrarONo, setMostrarONo ] = useState(false);

  const estadoCheck = (estadoCheck) => {
    if(estadoCheck === true){
      return("Si")
    }else if(estadoCheck === false){
      return("No")
    }
  }

  const [ posicionTooltipForm, setPosicionTooltipForm ] = useState(window.innerWidth > 870 ? 'tooltipIzq' : 'tooltipAbajo');
  const [ posicionTooltipEdit, setPosicionTooltipEdit ] = useState(window.innerWidth > 1090 ? 'tooltipIzq' : 'tooltipAbajo');
  const [ infoUserLimitONo, setInfoUserLimitONo ] = useState(window.innerWidth > 1200 ? 'tamañoLimiInfo' : 'tamañoNoLimiInfo');

  useEffect(()=>{
    const cambioDeTamaño = () => {
      setInfoUserLimitONo(window.innerWidth > 1200 ? 'tamañoLimiInfo' : 'tamañoNoLimiInfo');
      setPosicionTooltipForm(window.innerWidth > 870 ? 'tooltipIzq' : 'tooltipAbajo');
      setPosicionTooltipEdit(window.innerWidth > 1090 ? 'tooltipIzq' : 'tooltipAbajo');
    }
    window.addEventListener('resize', cambioDeTamaño);

    return () => {
      window.removeEventListener('resize', cambioDeTamaño);
    };
  },[])
  
  return(
    <div className="col-12 cuerpoBD">
      <div className={`estadoBD ${estadoBD ? 'd-none' : ''}`}>
        <label className="lblEstadoBD">{textoLbl}</label>
        <label>Este apartado lamentablemente no funciona en dispositivos mobiles, por favor ingrese desde una computadora para conectarse a la base de datos. 🙇‍♂️</label>
      </div>
      <div className={`contAlertaBD ${estadoTxtAlerta} ${estadoAnimAlerta}`} ref={refAlerta}>
        <label>{txtAlerta}</label>
      </div>
      
      <div className="col-12 contFormBD">
        <div className="col-12 tituloFormBD">
            Formulario para probar BD
        </div>
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 estiloFormBD">          
          <form className="col-12 formBD">
            <div className="col-12 contInputsForm espaciadoEntreInputs">
              <div className="col-12 miniContFormBD espaciadoEntreInputs">
                <input ref={refTexto} onChange={textoCaptura} type="text" placeholder="Cualquier texto :]"/>
                <input ref={refPass} onChange={passCaptura} type="password" placeholder="Contraseña :]"/>
              </div>
              <div className="col-12 miniContFormBD espaciadoEntreInputs">
                <input ref={refNumeros} onChange={numerosCaptura} type="number" placeholder="Solo numeros :]"/>
                <div className="contInputYTooltipFrom">
                  <input className="inputTooltip" ref={refEmail} onChange={emailCaptura} type="email" placeholder="Email :]"/>
                  <span className={`textoTooltip ${posicionTooltipForm}  ${tooltipViOOcForm} ${estadoTooltipForm}`}>{textoTooltipEmailForm}</span>
                </div>
              </div>
            </div>
            <div className="col-12 miniContFormBD">
              <label className="col-12">Selecciona las que quieras :]</label>
              <div className="col-12 d-flex justify-content-center flex-wrap">
                <div className="col-6 col-sm-3">
                  primero
                  <input value='primero' checked={primerCheck} onChange={primerCheckCaptura} type="checkbox"/>
                </div>
                <div className="col-6 col-sm-3">
                  segundo
                  <input value='segundo' checked={segundoCheck} onChange={segundoCheckCaptura} type="checkbox"/>
                </div>
                <div className="col-6 col-sm-3">
                  tercero
                  <input value='tercero' checked={tercerCheck} onChange={tercerCheckCaptura} type="checkbox"/>
                </div>
                <div className="col-6 col-sm-3">
                  cuarto
                  <input value='cuarto' checked={cuartoCheck} onChange={cuartoCheckCaptura} type="checkbox"/>
                </div>
              </div>
            </div>
            <div className="col-12 miniContFormBD">
              <label className="col-12">Selecciona solo una opcion :]</label>
              <div>
                1
                <input type="radio" value='1' checked={opcionRadio === '1'} onChange={detectarCambioRadio}/>
                2
                <input type="radio" value='2' checked={opcionRadio === '2'} onChange={detectarCambioRadio}/>
                3
                <input type="radio" value='3' checked={opcionRadio === '3'} onChange={detectarCambioRadio}/>
                4
                <input type="radio" value='4' checked={opcionRadio === '4'} onChange={detectarCambioRadio}/>
              </div>
            </div>
            <div className="col-12 miniContFormBD">
              <label className="col-12">Ingresa fecha, hora y archivo/s :]</label>
              <input type="date" ref={refFecha} onChange={fechaCambio}/>
              <input type="time" ref={refHora} onChange={horaCambio}/>
              <input className="formArchivo" type="file" ref={refArchivo} onChange={archivoCambio} accept=".png, .jpeg, .jpg, .gif, .svg, .webp, .ico"/>
              <label className="col-12">{pesoArchivo}</label>
            </div>
            <label>Descripcion</label>
            <textarea className="textareaFormBD" ref={refTextTarea} onChange={textTareaCambio} rows="3"></textarea>
          </form>
        </div>
      </div>
      <div className="col-12 contBDMongoMySQL">
        <div
          className="col-12 col-sm-8 contBasesDeDatos">
            <button onClick={envioFormMongoBD} type="submit">Enviar Formulario a MongoDB</button>
            MongoDB
            <div className="col-12 tablaEstilo">
              {
                usuariosList.map(user => (
                  <div 
                    className="col-12 contUser" 
                    key={user._id}>
                      <div className="eliminarUser">
                        <button onClick={()=>editarUsuario(user._id)}>Editar</button>

                        <button onClick={()=>eliminarUsuario(user._id)}>X</button>
                      </div>
                      <div className="col-12 col-lg-8">
                        <div className={`col-10 contInfoUser ${infoUserLimitONo}`}>
                          <label className="col-12 col-xl-6">Texto: {user.Texto}</label>
                          <label className="col-12 col-xl-6">Pass: {user.Pass}</label>
                          <label className="col-12 col-xl-6">Numeros: {user.Numeros}</label>
                          <label className="col-12 col-xl-6">Email: {user.Email}</label>
                          <label className="col-12 col-xl-6">Primero: {estadoCheck(user.Primero)}</label>
                          <label className="col-12 col-xl-6">Segundo: {estadoCheck(user.Segundo)}</label>
                          <label className="col-12 col-xl-6">Tercero: {estadoCheck(user.Tercero)}</label>
                          <label className="col-12 col-xl-6">Cuarto: {estadoCheck(user.Cuarto)}</label>
                          <label className="col-12 col-xl-6">Opcion: {user.Opcion}</label>
                          <label className="col-12 col-xl-6">Fecha: {user.Fecha}</label>
                          <label className="col-12 col-xl-6">Hora: {user.Hora}</label>
                        </div>
                        <div className="col-12">
                          <label className="col-12">Descripcion: {user.Descripcion}</label>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 miniContUser2">
                        <label>Archivo</label>
                        {<img className="col-8 imgTamaño" src={user.ArchivoBase64} alt="a"></img>}
                      </div>

                  </div>
                ))
              }

              {/* SOLUCIONAR QUE CUANDO LA PANTALLA ES DE S10 NO SE MUESTRE LA X PARA CERRAR (DESACTIVANDO EL ALIGN-ITEM: CENTER DE 'mostrarModal' ) <= AL HACER ESO TAMBIEN HAY QUE SOLUCIONAR EL PROBLEMA QUE EL CONTENIDO DE ABAJO SE DESBORDA */}
              <EditarInfoMongoDB mostrar={mostrarONo} btnCerrar={cerrarEditor}>
                <form className="editForm">
                  <h2 className="col-12">{capTexto}</h2>
                  <div className="col-12 contInputEdit">
                    <div className="col-12 contPrimCuaInp">
                      <div className="col-12 d-flex justify-content-evenly flex-wrap">
                        <div className="col-12 col-sm-8 col-md-5">
                          <label className="col-3" >Texto:</label><input className="col-9" ref={refCapTexto} value={textoEd} onChange={cambioTextoEd} type="text" placeholder={capTexto} />  
                        </div>
                        <div className="col-12 col-sm-8 col-md-5">
                          <label className="col-3">Pass:</label><input className="col-9" ref={refCapPass} value={passEd} onChange={cambioPassEd} type="password" placeholder={capPass}/>
                        </div>
                      </div> 
                      <div className="col-12 d-flex justify-content-evenly flex-wrap">
                        <div className="col-12 col-sm-8 col-md-5">
                          <label className="col-3">Numeros:</label><input className="col-9" ref={refCapNumeros} value={numerosEd} onChange={cambioNumerosEd} type="number" placeholder={capNumeros}/>
                        </div>
                        <div className="col-12 col-sm-8 col-md-5 d-flex">
                          <label className="col-3">Email:</label>
                          <div className="col-9 contInputYTooltipFrom">
                            <input className={`col-12 inputTooltip `} ref={refCapEmail} value={emailEd} onChange={cambioEmailEd} type="email" placeholder={capEmail}/>
                            <span className={`textoTooltip ${posicionTooltipEdit} ${TooltipEmailViOOcEd} ${estadoTooltipEmailEd}`}>{txtTooltipEmailEd}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-12 d-flex justify-content-evenly flex-wrap">
                      <div className="col-6 col-sm-2 d-flex justify-content-center">
                        <label className="">Primero:</label><input className="" type="checkbox" checked={capPrimero} onChange={manejarCambioPri}/>
                      </div>
                      <div className="col-6 col-sm-2 d-flex justify-content-center">
                        <label className="">Segundo:</label><input className="" type="checkbox" checked={capSegundo} onChange={manejarCambioSeg}/>
                      </div>
                      <div className="col-6 col-sm-2 d-flex justify-content-center">
                        <label className="">Tercero:</label><input className="" type="checkbox" checked={capTercero} onChange={manejarCambioTer}/>
                      </div>
                      <div className="col-6 col-sm-2 d-flex justify-content-center">
                        <label className="">Cuarto:</label><input className="" type="checkbox" checked={capCuarto} onChange={manejarCambioCuar}/>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <div className="col-2 col-sm-1 d-flex justify-content-center">
                        <label className="">1</label><input className="col-3" value='1' type="radio" checked={capOpcion === '1'} onChange={estadoRadio}/>
                      </div>
                      <div className="col-2 col-sm-1 d-flex justify-content-center">
                        <label className="">2</label><input className="col-3" value='2' type="radio" checked={capOpcion === '2'} onChange={estadoRadio}/>
                      </div>
                      <div className="col-2 col-sm-1 d-flex justify-content-center">
                        <label className="">3</label><input className="col-3" value='3' type="radio" checked={capOpcion === '3'} onChange={estadoRadio}/>
                      </div>
                      <div className="col-2 col-sm-1 d-flex justify-content-center">
                        <label className="">4</label><input className="col-3" value='4' type="radio" checked={capOpcion === '4'} onChange={estadoRadio}/>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-evenly flex-wrap">
                      <div className="col-12 col-sm-5">
                        <label className="col-3">Fecha:</label><input className="" value={fechaEd} ref={refCapFecha} onChange={cambioFechaEd} type="date"/>
                      </div>
                      <div className="col-12 col-sm-3">
                        <label className="col-3 col-sm-5">Hora:</label><input className="" value={horaEd} ref={refCapHora} onChange={cambioHoraEd} type="time"/>
                      </div>
                    </div>
                    <div className="col-11">
                      <label className="col-12">Descripcion:</label><textarea className="col-12 txTareaFormEditMDB" value={descripcionEd} ref={refCapDescripcion} onChange={cambioDescripcionEd}  rows="3" placeholder={capDescripcion}></textarea>
                    </div>
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                      <label className="col-12">Archivo:</label>
                      <div className="col-12 d-flex justify-content-evenly align-items-center flex-wrap">
                        <img className="imgTamaño" src={capArchivo} alt=""/>
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                          <input className="col-12" ref={refCapArchivo} key={reiniciarArchivo} type="file" onChange={cambiosArchEdit} accept=".png, .jpeg, .jpg, .gif, .svg, .webp, .ico"/>
                          <label>{pesoArchivoEd}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </form>
                <div className="col-12 d-flex justify-content-center">
                  <button className="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2" type="submit" onClick={enviarEditar}>Guardar</button>
                </div>
              </EditarInfoMongoDB>
            </div>
        </div>
        <div
          className="col-8 contBasesDeDatos">
            <button type="submit">Enviar Formulario a MySQL</button>
            MySQL
        </div>
      </div>
    </div>
  )
};

export default ExperimentoConBD;