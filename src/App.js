import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './screens/Home.js';
import Estadisticas from './screens/Estadisticas.js'
import PaginaContacto from './screens/PaginaContacto.js'
import PersonaDetalle from './screens/PersonaDetalle.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/PersonaDetalle/:personaId' element={<PersonaDetalle/>} />
          <Route path='/Estadisticas' element={<Estadisticas/>} />
          <Route path='/PaginaContacto' element={<PaginaContacto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
