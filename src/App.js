import React from 'react';
import './App.css';
import BarraNav from './Componentes/BarraNav.js';
import Inicio from "./Pages/Inicio.jsx";
import SobreMi from "./Pages/SobreMi.jsx";
import Contacto from "./Pages/Contacto.jsx";

import ProyectosRND from './Pages/ProyectosRND.jsx';
import TarjetaRND from './Pages/TarjetaRND.jsx';
import PiedraPapelTijera from './Pages/PiedraPapelTijera.jsx';
import PiedraPapelTijeraConCSS from './Pages/PiedraPapelTijeraConCSS.jsx';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      testeo
      <div className='contenedor-cuerpo'>
        <Routes>
          <Route path = "/" element = {<BarraNav />} >
            <Route path="/" element={<Inicio />} />
            <Route path="Pages/SobreMi" element={<SobreMi />} />
            <Route path="Pages/Contacto" element={<Contacto/>} />
            <Route path="Pages/ProyectosRND" element={<ProyectosRND/>} />
            <Route path="Pages/TarjetaRND" element={<TarjetaRND/>} />
            <Route path="Pages/PiedraPapelTijera" element={<PiedraPapelTijera/>} />
            <Route path="Pages/PiedraPapelTijeraConCSS" element={<PiedraPapelTijeraConCSS/>} />
          </Route>
        </Routes>
        <Inicio></Inicio>
      </div>
      <footer className='footer-app'>
        <label>paralelo-footer</label>
      </footer>
    </div>
  );
}

export default App;
