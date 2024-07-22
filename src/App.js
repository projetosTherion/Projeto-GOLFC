import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';

const App = () => {
  return (
   
   <Router >
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/Login' element={<Login/>}/>
     
    </Routes>
      
     
  
  </Router>
  );
};

export default App;
