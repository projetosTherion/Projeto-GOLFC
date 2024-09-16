import React from 'react';

import Home from './pages/homeInstitucional';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import RegistroUnificado from './pages/RegistroUnificado'
import Senha from './pages/Senha';
import HomeLogada from './pages/homeLogada'
import Carrinho from "./pages/carrinho";
import Favorito from "./pages/Favoritos";
const App = () => {
  return (
   
   <Router >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registro' element={<RegistroUnificado/>}/>
      <Route path='/RecuperaçãoSenha' element={<Senha/>} />
      <Route path='/Home' element={<HomeLogada/>} />
      <Route path='/Carrinho' element={<Carrinho/>} />
      <Route path='/Favoritos' element={<Favorito/>} />
    </Routes>
      
     
  
  </Router>
  );
};

export default App;
