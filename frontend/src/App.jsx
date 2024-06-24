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
import ExperimentoConBD from './Pages/ExperimentoConBD.jsx';

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
              <Route path="Pages/ExperimentoConBD" element={<ExperimentoConBD/>} />
            </Route>
          </Routes>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center flex-wrap flex-column text-center position-absolute opacity-50 col-12 d-none'>
        <div className='col-sm-2 bg-danger'>sm</div>
        <div className='col-md-4 bg-danger'>md</div>
        <div className='col-lg-6 bg-danger'>lg</div>
        <div className='col-xl-8 bg-danger'>xl</div>
        <div className='col-xxl-10 bg-danger'>xxl</div>
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
