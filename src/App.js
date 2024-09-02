import React from 'react';

import Home from './paginas/homeInstitucional';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './paginas/Login';
import RegistroUnificado from './paginas/RegistroUnificado'
import Senha from './paginas/Senha';
import HomeLogada from './paginas/homeLogada'

const App = () => {
  return (
   
   <Router >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registro' element={<RegistroUnificado/>}/>
      <Route path='/RecuperaçãoSenha' element={<Senha/>} />
      <Route path='/HomeLogada' element={<HomeLogada/>} />
    </Routes>
      
     
  
  </Router>
  );
};

export default App;
