import React, { useState } from 'react';
import HeaderLogado from '../components/HeaderHomeLogado'
import CarouselHome from '../componentesHomeLogado/carouselHome'
import FuturosJogos from'../componentesHomeLogado/FuturosJogos'
import CarouselJogadores from'../componentesHomeLogado/CarouselJogadores'
import GrandeCarousel from'../componentesHomeLogado/GrandeCarousel'
import Footer from'../components/Footer'
const HomeLogada = () => {
 
  
    
 return(

    <div className=' bg-gradient-to-b from-Azul-Gol to-Azul-GolClaro100 '>
        <div> 
              <HeaderLogado/>
        </div>
        <div>
     < CarouselHome/>
        </div>
        <div>
            <FuturosJogos/>
        </div>
        <div>
        <div>
      <div className='ml-[10%] mt-[5%] '>
    <span className='text-white  font-tuskerGrotesk'>GOLCARDS MAIS RECENTE</span>
    <div className="border h-px  w-[90%] justify-center bg-white"></div>
    </div>
           <CarouselJogadores/>  
          
      <div className='ml-[10%] mt-[5%] '>
    <span className='text-white font-tuskerGrotesk'>GOLCARDS MAIS RECENTE</span>
    <div className="border h-px  w-[90%] justify-center bg-white"></div>
    </div>
     <GrandeCarousel/>
    </div>
    </div>
    <Footer/>
    <div></div>
    </div>

 );
};

export default HomeLogada;