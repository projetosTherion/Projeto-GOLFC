import React from 'react';
import LogoRedondaBranca from "../imagens/Frame 4731.png"
import Tacinha from "../imagens/image 42 (1).svg"
import Logo from "../imagens/logo 05 4.png"
import LogoRedonda from "../imagens/logo 17 2.svg"
import PlaceHolder from '../imagens/image 96.png'
import Time1 from '../imagens/Bahia.png'
import Time2 from '../imagens/Athlético Paranaense.png'
const Cards = ({ content }) => {
   return(
    
    <div className='border bg-cover border-Verde-Gol w-[90%] md:w-[65%] h-[100%] rounded-xl bg-Card'>
       
       <div className='flex relative  justify-between'> 
       <img src={Tacinha} className=' mt-[5%] md:ml-[5%]  ml-[10%] w-[15%] h-[13%] md:w-[15%] md:h-[13%]' />
       <img src={Logo} className=' mt-[5%] ml-[5%] md:ml-[20%] md:w-[15%] md:h-[23%]' />


       <div className='bg-gradient-to-r  text-white  flex justify-center rounded-lg  w-[30%] md:w-[45%] md:ml-[6%] h-[40%] from-Azul-Gol to-Azul-GolClaro100'>
      
       <div className='mt-[4.5%] items-center text-customResponsiveNumber  md:w-[60%] mr-[10%] '> 100 </div> 
       <img src={LogoRedonda} alt="Logo Gol" className=' md:w-[40%] mt-[5%] w-[30%] h-[10%]   md:h-[85%] ' />
       </div> 
       
       </div>
       <div className='relative'>
        {/*foto d jogador*/}
     <img src={PlaceHolder} alt="placeholder" className=' mt-[2%] ml-[10%] md:ml-[6%] h-[40%] w-[75%] md:h-[90%] md:mr-[5%] md:w-[85%] ' />
    
    <div className='absolute bottom-0 left-6 md:bottom-0 md:left-6    place-items-center rounded-t-lg text-center bg-gradient-to-r from-Azul-Gol text-customResponsiveNumberPlayer to-Azul-GolClaro100  md:w-[50%] '>
         nome <span className='text-Verde-Gol'>00'</span> 
        
        </div>

 </div>
     <div className='flex justify-center mr-[3%] mt-[5%] mb-[5%]'>
      {/*escudo dos times e placar*/}
      <img src={Time1} alt="" className=' mr-[5%] w-[20%] h-[45%]'/>
      <span className='text-white font-Carbona'> 1 <span>x</span> 2 </span> 
      <img src={Time2} alt=""className='ml-[5%] w-[20%] h-[45%]'/>
     </div>
     <div className='card'>
      {content}
    </div>
    </div>
  
   )
  };
  
  export default Cards;