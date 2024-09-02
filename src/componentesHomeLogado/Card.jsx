import React from 'react';
import LogoRedondaBranca from "../imagens/Frame 4731.png"
import Tacinha from "../imagens/image 42 (1).svg"
import Logo from "../imagens/logo 05 4.png"
import LogoRedonda from "../imagens/logo 17 2.svg"
import PlaceHolder from '../imagens/image 96.png'
const Cards = () => {
   return(
    
    <div className='border  border-Verde-Gol w-10% md:w-[10%]  rounded-xl bg-Card'>
       
       <div className='flex relative  justify-between'> 
       <img src={Tacinha} className=' mt-[5%] md:ml-[5%]  md:w-[10%] md:h-[13%]' />
       <img src={Logo} className=' mt-[2%] md:ml-[20%] md:w-[15%] md:h-[23%]' />


       <div className='bg-gradient-to-r flex text-white   rounded-lg  w-[30%] ml-[15%] h-[30%] from-Azul-Gol to-Azul-GolClaro100'>
      
       <div className='mt-[4.5%] items-center text-customResponsiveNumber  ml-[20%] '> 100 </div> 
       <img src={LogoRedonda} alt="Logo Gol" className=' md:w-[35%]  ml-[5%] md:mt-[5%] md:h-[75%] ' />
       </div> 
       
       </div>
       <div className='relative'> <img src={PlaceHolder} alt="placeholder" className=' md:ml-[5%] md:h-[90%] md:mr-[8%] md:w-[90%] ' />
    
    <div className='absolute bottom-6 place-items-center rounded-t-lg text-center bg-gradient-to-r from-Azul-Gol text-customResponsiveNumberPlayer to-Azul-GolClaro100 md:ml-[20%] md:w-[50%] '>
         nome <span className='text-Verde-Gol'>00'</span> 
        
        </div>
 <div>ee</div>
 </div>
    
     
    </div>
  
   )
  };
  
  export default Cards;