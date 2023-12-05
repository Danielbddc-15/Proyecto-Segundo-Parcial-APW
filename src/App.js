import React from 'react';
import './App.css';
import Home from './Componentes/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistroUsuario from './Componentes/Registro.jsx';
import InicioEstudiante from './Componentes/InicioEstudiante.jsx';
import InicioDocente from './Componentes/InicioDocente.jsx'; 
import PerfilDocente from './Componentes/PerfilDocente.jsx';
import PerfilEstudiante from './Componentes/PerfilEstudiante.jsx';
import Ver from './Componentes/Ver'
import Agregar from './Componentes/Agregar.jsx';
import Evaluar from './Componentes/Evaluar.jsx';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Registro' element={<RegistroUsuario />} />
          <Route path='/InicioEstudiante' element={<InicioEstudiante />} />
          <Route path='/InicioDocente' element={<InicioDocente/>}/>
          <Route path='/PerfilDocente' element={<PerfilDocente/>}/>
          <Route path='/PerfilEstudiante' element={<PerfilEstudiante/>}/>
          <Route path='/Ver' element={<Ver/>}/>
          <Route path='/Agregar' element={<Agregar/>}/>
          <Route path='/Evaluar' element={<Evaluar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;