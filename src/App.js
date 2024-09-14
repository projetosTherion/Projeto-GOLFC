import React from 'react';

import Home from './paginas/homeInstitucional';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './paginas/Login';
import RegistroUnificado from './paginas/RegistroUnificado'
import Senha from './paginas/Senha';
import HomeLogada from './paginas/homeLogada'
import Carrinho from "./paginas/carrinho";
import Favorito from "./paginas/Favoritos";
const App = () => {
  return (
   
   <Router >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registro' element={<RegistroUnificado/>}/>
      <Route path='/RecuperaçãoSenha' element={<Senha/>} />
      <Route path='/HomeLogada' element={<HomeLogada/>} />
      <Route path='/Carrinho' element={<Carrinho/>} />
      <Route path='/Favoritos' element={<Favorito/>} />
    </Routes>
      
     
  
  </Router>
  );
};

export default App;
