import React from 'react';
import './App.css';
import BarraNav from './Componentes/BarraNav.jsx';
import Inicio from "./Pages/Inicio";
import SobreMi from "./Pages/SobreMi";
import Contacto from "./Pages/Contacto";

import ProyectosRND from './Pages/ProyectosRND.jsx';
import TarjetaRND from './Pages/TarjetaRND.jsx';
import PiedraPapelTijera from './Pages/PiedraPapelTijera.jsx';
import PiedraPapelTijeraConCSS from './Pages/PiedraPapelTijeraConCSS.jsx';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
      </div>
      <footer className='footer-app'>
        <label>paralelo-footer</label>
      </footer>
    </div>
  );
}

export default App;
