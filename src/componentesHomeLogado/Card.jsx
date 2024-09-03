import React from 'react';
import LogoRedondaBranca from "../imagens/Frame 4731.png"
import Tacinha from "../imagens/image 42 (1).svg"
import Logo from "../imagens/logo 05 4.png"
import LogoRedonda from "../imagens/logo 17 2.svg"
import PlaceHolder from '../imagens/image 96.png'
import Time1 from '../imagens/Bahia.png'
import Time2 from '../imagens/Athlético Paranaense.png'
const Cards = () => {
   return(
    
    <div className='border  border-Verde-Gol w-10% md:w-[9%]  rounded-xl bg-Card'>
       
       <div className='flex relative  justify-between'> 
       <img src={Tacinha} className=' mt-[5%] md:ml-[5%]  md:w-[15%] md:h-[13%]' />
       <img src={Logo} className=' mt-[5%] md:ml-[20%] md:w-[15%] md:h-[23%]' />


       <div className='bg-gradient-to-r flex text-white   rounded-lg  w-[30%] ml-[15%] h-[40%] from-Azul-Gol to-Azul-GolClaro100'>
      
       <div className='mt-[4.5%] items-center text-customResponsiveNumber   '> 100 </div> 
       <img src={LogoRedonda} alt="Logo Gol" className=' md:w-[40%]  ml-[2%] md:mt-[8%] md:h-[65%] ' />
       </div> 
       
       </div>
       <div className='relative'>
        {/*foto d jogador*/}
     <img src={PlaceHolder} alt="placeholder" className=' mt-[2%] md:ml-[6%] md:h-[90%] md:mr-[5%] md:w-[85%] ' />
    
    <div className='absolute bottom-0 left-6    place-items-center rounded-t-lg text-center bg-gradient-to-r from-Azul-Gol text-customResponsiveNumberPlayer to-Azul-GolClaro100  md:w-[50%] '>
         nome <span className='text-Verde-Gol'>00'</span> 
        
        </div>

 </div>
     <div className='flex justify-center mr-[3%] mt-[5%] mb-[5%]'>
      {/*escudo dos times e placar*/}
      <img src={Time1} alt="" className=' mr-[5%] w-[20%] h-[45%]'/>
      <span className='text-white font-Carbona'> 1 <span>x</span> 2 </span> 
      <img src={Time2} alt=""className='ml-[5%] w-[20%] h-[45%]'/>
     </div>
     
    </div>
  
   )
  };
  
  export default Cards;