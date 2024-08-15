import React from 'react';

import Home from './paginas/homeInstitucional';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './paginas/Login';
import Registro from './paginas/registro/registro';
import Registro2 from './paginas/registro/registro2';
import Registro3 from './paginas/registro/registro3';
const App = () => {
  return (
   
   <Router >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registro' element={<Registro/>}/>
      <Route path='/Registro2' element={<Registro2/>}/>
      <Route path='/Registro3' element={<Registro3/>}/>
    </Routes>
      
     
  
  </Router>
  );
};

export default App;
