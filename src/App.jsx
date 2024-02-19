import React from 'react';
import './App.css';
import BarraNav from './Componentes/BarraNav.jsx';
import Inicio from "./Pages/Inicio.jsx";
import SobreMi from "./Pages/SobreMi.jsx";
import Contacto from "./Pages/Contacto.jsx";

import ProyectosRND from './Pages/ProyectosRND.jsx';
import TarjetaRND from './Pages/TarjetaRND.jsx';
import PiedraPapelTijera from './Pages/PiedraPapelTijera.jsx';
import PiedraPapelTijeraConCSS from './Pages/PiedraPapelTijeraConCSS.jsx';



import { Routes, Route} from 'react-router-dom';

function App() {
  console.log("APP.JSX");
  return (
    <div className="App">
      <div className='contenedor-cuerpo'>
        <div className=''>
          <Routes>
            <Route path ="/portafolio-react" element = {<BarraNav />} >
              <Route path="/portafolio-react" element={<Inicio />} />
              <Route path="Pages/SobreMi" element={<SobreMi />} />
              <Route path="Pages/Contacto" element={<Contacto/>} />
              <Route path="Pages/ProyectosRND" element={<ProyectosRND/>} />
              <Route path="Pages/TarjetaRND" element={<TarjetaRND/>} />
              <Route path="Pages/PiedraPapelTijera" element={<PiedraPapelTijera/>} />
              <Route path="Pages/PiedraPapelTijeraConCSS" element={<PiedraPapelTijeraConCSS/>} />
            </Route>
          </Routes>
        </div>
      </div>
      <footer className='footer-app'>
        <label>paralelo-footer</label>
      </footer>
    </div>
  );
}

export default App;
