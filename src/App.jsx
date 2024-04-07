import React from 'react';
import './App.css';
import BarraNav from './Componentes/BarraNav.jsx';
import Inicio from "./Pages/Inicio.jsx";
import SobreMi from "./Pages/SobreMi.jsx";
import Contacto from "./Pages/Contacto.jsx";

import ProyectosRND from './Pages/ProyectosRND.jsx';
import TarjetaRND from './Pages/TarjetaRND.jsx';
import PiedraPapelTijera from './Pages/PiedraPapelTijera.jsx';
import DiferentesAnim from './Pages/DiferentesAnim.jsx';

import { Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className='contenedor-cuerpo'>
        <div className=''>
          <Routes>
            <Route path ="/portafolio-react" element = {<BarraNav/>} >
              <Route path="/portafolio-react" element={<Inicio />} />
              <Route path="Pages/Contacto" element={<Contacto/>} />
              <Route path="Pages/ProyectosRND" element={<ProyectosRND/>} />
              <Route path="Pages/TarjetaRND" element={<TarjetaRND/>} />
              <Route path="Pages/PiedraPapelTijera" element={<PiedraPapelTijera/>} />
              <Route path="Pages/DiferentesAnim" element={<DiferentesAnim/>} />
            </Route>
          </Routes>
        </div>
      </div>
      <footer className='footer-app'>
        <div className='contFoot col-12'>
          <div
            className="miniContFoot col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            
          </div>
          <div
            className="miniContFoot col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            
          </div>
          <div
            className="miniContFoot col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <label>jehucallecontacto@gmail.com</label>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
