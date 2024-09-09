import React, { useState } from 'react';
import HeaderLogado from '../components/HeaderHomeLogado'
import CarouselHome from '../componentesHomeLogado/carouselHome'
import FuturosJogos from'../componentesHomeLogado/FuturosJogos'
import FundoLogo from '../imagens/Frame 4515 (1).jpg'
import LogoRedondaFundo from '../imagens/Frame 4751.jpg'
import GrandeCarousel from'../componentesHomeLogado/GrandeCarousel'
import Footer from'../components/Footer'
const HomeLogada = () => {
 
  
    
 return(

    <div className='  overflow-hidden bg-gradient-to-b from-Azul-Gol to-Azul-GolClaro100 '>
        <div> 
              <HeaderLogado/>
        </div>
        <div className=''>
     < CarouselHome/>
        </div>
        <div>
            <FuturosJogos/>
        </div>
        <div>
        <div className='mt-[5%]'>
      
     <GrandeCarousel/>
    </div>
    </div>
   
    <div className='flex justify-center mt-[5%]   h-[90%] '>
      <div className='bg-white w-[80%]  h-[100%] border rounded-xl border-gray-300'>
<span>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
</span>

      </div>
    </div>
   
    <div className='ml-[10%] mr-[10%] mt-[5%] mb-[10%] '>
    <div className='md:flex ml-[15%] md:ml-[0%] md:justify-between'>
      <img src={FundoLogo} alt="" className='   w-[80%] md:w-[45%] rounded-xl ' />
      <img src={LogoRedondaFundo} alt="" className='mt-[5%] md:mt-[0%] w-[80%] md:w-[45%] rounded-xl ' />
    </div>
    </div>
   

  <div><Footer/></div>
    </div>

 );
};

export default HomeLogada;