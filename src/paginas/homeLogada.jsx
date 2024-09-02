import React, { useState } from 'react';
import HeaderLogado from '../components/HeaderHomeLogado'
import CarouselHome from '../componentesHomeLogado/carouselHome'
import Cards from'../componentesHomeLogado/Card'
const HomeLogada = () => {
 
  
    
 return(

    <div className=' '>
        <div> 
              <HeaderLogado/>
        </div>
        <div>
     < CarouselHome/>
        </div>
        <div>
            <Cards/>
        </div>
    </div>

 );
};

export default HomeLogada;