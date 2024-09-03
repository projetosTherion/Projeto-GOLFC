import React, { useState } from 'react';
import HeaderLogado from '../components/HeaderHomeLogado'
import CarouselHome from '../componentesHomeLogado/carouselHome'
import FuturosJogos from'../componentesHomeLogado/FuturosJogos'
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
    </div>

 );
};

export default HomeLogada;