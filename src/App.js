import React from 'react';

import Home from './paginas/homeInstitucional';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPesquisa from './paginas/paginaPesquisa';
import Login from './paginas/Login';
import RegistroUnificado from './paginas/RegistroUnificado'
import Senha from './paginas/Senha';
import HomeLogada from './paginas/homeLogada'
import Carrinho from "./paginas/carrinho";
import Favorito from "./paginas/Favoritos";
import Duvidas from "./paginas/Duvidas";
import JogadorPaginaCompra from './paginas/JogadorPaginaCompra';
import Certificacao from "./paginas/Certificacao";

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
      <Route path='/paginaPesquisa' element={<PaginaPesquisa/>} />
      <Route path='/Duvidas' element={<Duvidas/>} />
      <Route path='/jogador' element={<JogadorPaginaCompra/>} />
      <Route path='/Certificacao' element={<Certificacao/>} />
    </Routes>
  </Router>
  );
};

export default App;
