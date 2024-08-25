import React from 'react';
import Carousel from '../ComponentesHomeIstitucional/carousel';
import Frame1 from'../imagens/Frame 4808 (2).svg'
import Frame2 from'../imagens/Frame 4827 (5).jpg'
import Frame3 from'../imagens/Frame 4828 (1).svg'
import Header from '../components/Header'
import Footer from '../components/Footer.jsx'
import LinhaLogo from '../ComponentesHomeIstitucional/linhaLogo.jsx'
import Funciona from '../ComponentesHomeIstitucional/comoFunciona.jsx'
import Basics from '../ComponentesHomeIstitucional/infoBasics.jsx'
import waves from '../imagens/Rectangle 866.svg'
import Extra from '../ComponentesHomeIstitucional/infoExtra.jsx'
let slides = [Frame2,Frame1,Frame3];
const homeInstitucional = () => {
  return (
  
 <div className=' overflow-hidden  '>
    <Header/>
 
  <div className="w-[100%] h-[50%] m-auto">
      <Carousel slides={slides} />
    </div>
   

    <div>
      <LinhaLogo/> 
    </div>
      <div className='relative'>
       <Funciona/>
       <img src={waves} className=' absolute bottom-0 -mb-4 md:absolute md:bottom-0 md:-mb-9 '/>
  
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

export default homeInstitucional;
