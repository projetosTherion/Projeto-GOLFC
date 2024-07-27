import React from 'react';
import Carousel from '../ComponentesHomeIstitucional/carousel';
import Frame1 from'../imagens/Frame 4808 (2).svg'
import Frame2 from'../imagens/Frame 4827 (2).svg'
import Frame3 from'../imagens/Frame 4828 (1).svg'
import Header from '../components/Header'
import LinhaLogo from '../ComponentesHomeIstitucional/linhaLogo.jsx'
import Funciona from '../ComponentesHomeIstitucional/comoFunciona.jsx'

let slides = [Frame2,Frame1,Frame3];
const homeInstitucional = () => {
  return (
  
 <div>
    <Header/>
  <div className="w-[100%] m-auto">
      <Carousel slides={slides} />
    </div>

    <div>
        <LinhaLogo/>
    </div>
   <div>
       <Funciona/>
   </div>
    </div> 
     
    
    
  );
};

export default homeInstitucional;
