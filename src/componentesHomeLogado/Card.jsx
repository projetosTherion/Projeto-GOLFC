import React, { useRef } from 'react';
import LogoRedondaBranca from "../imagens/Frame 4731.png"
import Tacinha from "../imagens/image 42 (1).svg"
import Logo from "../imagens/logo 05 4.png"
import LogoRedonda from "../imagens/logo 17 2.svg"
import PlaceHolder from '../imagens/image 96.png'
import Time1 from '../imagens/Bahia.png'
import Time2 from '../imagens/Athlético Paranaense.png'
var ref = null;

const Cards = ({ content }) => {
   ref = useRef(null);
   
   return (

      <div 
      ref={ref}
      className='border bg-cover border-Verde-Gol w-[80%] md:w-[80%] h-[100%] rounded-xl bg-Card overflow-hidden'>

         <div className='flex relative  justify-between items-center'>
            <img src={Tacinha} className='md:ml-[5%]  ml-[10%] w-[15%] h-[15%]' />
            <img src={Logo} className='w-4 md:w-4 md:h-auto absolute left-1/2 -translate-x-1/2' />


            <div className='bg-gradient-to-r max-w-[38%] text-white flex justify-end rounded-bl-xl p-1 items-center from-Azul-Gol to-Azul-GolClaro100'>
                  <div className='text-center text-[70%] italic mr-1'> 100 </div>
               <img src={LogoRedonda} alt="Logo Gol" className=' md:w-[40%] w-[50%] h-[20%]  md:h-[85%] ' />
            </div>

         </div>
         <div className='relative flex flex-col items-center'>
            {/*foto d jogador*/}
            <img src={PlaceHolder} alt="placeholder" className=' mt-[2%] h-[40%] w-[90%] md:h-[90%] md:w-[95%] ' />
            <div className=' text-gray-300 absolute bottom-0 pt-[3%] rounded-tl-2xl rounded-tr-2xl bg-Azul-GolClaro px-[10%]  place-items-center  text-center  text-customResponsiveNumberPlayer    '>
               Arrascaeta <span className='text-Verde-Gol'>00'</span>
            </div>
         </div>
         <div className='flex justify-center items-center mt-[5%] mb-[5%]'>
            {/*escudo dos times e placar*/}
            <img src={Time1} alt="" className=' mr-[5%] w-[20%] h-[45%]' />
            <span className='text-white font-Carbona'> 1 <span>x</span> 2 </span>
            <img src={Time2} alt="" className='ml-[5%] w-[20%] h-[45%]' />
         </div>
         <div className='card'>
            {content}
         </div>
      </div>

   )
};

export { ref }; 
export default Cards;