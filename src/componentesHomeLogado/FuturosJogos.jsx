import React from 'react';
import Time1 from '../imagens/Bahia.png'
import Time2 from '../imagens/Athlético Paranaense.png'
import { IoIosArrowDropdownCircle } from "react-icons/io";
const FuturosJogos = () => {
   return(
    
    <div className='bg-FuturosJogos  bg-cover'> 
    <div className='font-tuskerGrotesk  text-white md:ml-[10%]'> PROXIMAS PARTIDAS</div>
  <div className='flex justify-center mt-[1%]  '>
   <div className='bg-white rounded-lg   md:w-[20%]'>
   <div className='flex  '>

    <div className='flex mb-[5%]'>

      <img src={Time1} alt="" className=' mr-[2%] mt-[4%] '/>
      <span className=' font-bold  mt-[15%]'> X </span> 
      <img src={Time2} alt=""className=' mt-[4%] '/>
      
      </div>

       <span className='font-CarbonaBold mt-[2%] text-customResponsiveJogosFuturos'>Brasileiro| 
        <span className='md:ml-[3%]'>
             20/07| 
                <span className='md:ml-[3%]'>
                 21:00|<br/>
                  <span>
                    Maracana
                  </span>
                </span>
         </span>
        </span>
    </div>
    </div> 
       </div>
    <div className='flex mr-[5%] justify-end font-Carbona text-center text-white '> <button className='flex'> Ver mais <span className='mt-[5%] ml-[0%] text-Verde-Gol'><IoIosArrowDropdownCircle /></span>
</button>
    </div>
</div>
   
   )
  };
  
  export default FuturosJogos ;