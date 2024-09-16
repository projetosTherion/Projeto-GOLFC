import React, { useEffect } from 'react';
import Carousel from '../components/carousel';

import Header from '../components/Header'
import Footer from '../components/Footer.jsx'
import LinhaLogo from '../components/linhaLogo.jsx'
import Funciona from '../components/comoFunciona.jsx'
import Basics from '../components/infoBasics.jsx'
import waves from '../imagens/Rectangle 866.svg'
import Extra from '../components/infoExtra.jsx'

export default function HomeInstitucional() {
  useEffect(() => {
    document.title = "GolFC"
  }, [])
  
  return (
 <div className=' overflow-hidden  '>
    <Header/>
 
  <div className="w-[100%] h-[50%] m-auto">
      <Carousel />
    </div>
   

    <div>
      <LinhaLogo/> 
    </div>
      <div className='relative'>
       <Funciona/>
       <img src={waves} className='md:w-screen absolute bottom-0 -mb-4 md:absolute md:bottom-0 md:-mb-9 '/>
  
   </div>
   <div>
       <Basics/> 
   </div>
   <div>
    <Extra/>
   </div>
   <div>
    <Footer/>
   </div>
    </div> 
     
    
    
  );
};
