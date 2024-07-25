import React from 'react';
import Carousel from '../components/carousel';
import Frame1 from'../imagens/Frame 4808.png'
import Frame2 from'../imagens/Frame 4827 (3).jpg'
import Frame3 from'../imagens/Frame 4828.png'
import Header from '../components/Header'
import LinhaGol from '../imagens/Linha logos.jpg'
import PagBola from '../imagens/Pag Bola.jpg'
import Sobre from '../imagens/Como Funciona.jpg'
let slides = [Frame1,Frame2,Frame3];
const homeInstitucional = () => {
  return (
  
 <div>
    <Header/>
  <div className="w-[100%] m-auto ">
      <Carousel slides={slides} />
    </div>

    <div>
        <img src={LinhaGol}/>
    </div>
    <div>
        <img src={Sobre}/>
    </div>
    <div>
        <img src={PagBola}/>
    </div>

 </div>

    
  );
};

export default homeInstitucional;
