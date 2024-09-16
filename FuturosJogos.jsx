import React, { useState } from 'react';
import Time1 from '../imagens/Bahia.png';
import Time2 from '../imagens/Athlético Paranaense.png';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const FuturosJogos = () => {
  const [showMore, setShowMore] = useState(false);

  const nome = {
    0: {
      img1: Time1,
      img2: Time2,
      content: <span className='font-CarbonaBold mt-[2%] text-customResponsiveJogosFuturos'>Brasileiro |  
        <span className='md:ml-[3%]'>
          20/07 |
          <span className='md:ml-[3%]'>
            21:00 |
            <span>Maracana</span>
          </span>
        </span>
      </span>
    },
    1: {
      img1: Time1,
      img2: Time2,
      content: <span className='font-CarbonaBold mt-[2%] text-customResponsiveJogosFuturos'>Brasileiro | 
        <span className='md:ml-[3%]'>
          20/07 |
          <span className='md:ml-[3%]'>
            21:00 |
            <span>Maracana</span>
          </span>
        </span>
      </span>
    },
    2: {
      img1: Time1,
      img2: Time2,
      content: <span className='font-CarbonaBold mt-[2%] text-customResponsiveJogosFuturos'>Brasileiro| 
        <span className='md:ml-[3%]'>
          20/07 |
                    <span className='md:ml-[3%]'>
            21:00 |
                        <span>Maracana</span>
          </span>
        </span>
      </span>
    },
    
  };
  const nomeExtendido = {
    0: {
      img1: Time1,
      img2: Time2,
      content: <span className='font-CarbonaBold mt-[2%] text-customResponsiveJogosFuturos'>Brasileiro |  
        <span className='md:ml-[3%]'>
          20/07 |
          <span className='md:ml-[3%]'>
            21:00 |
            <span>Maracana</span>
          </span>
        </span>
      </span>
    },
    1: {
      img1: Time1,
      img2: Time2,
      content: <span className='font-CarbonaBold mt-[2%] text-customResponsiveJogosFuturos'>Brasileiro | 
        <span className='md:ml-[3%]'>
          20/07 |
          <span className='md:ml-[3%]'>
            21:00 |
            <span>Maracana</span>
          </span>
        </span>
      </span>
    },
    2: {
      img1: Time1,
      img2: Time2,
      content: <span className='font-CarbonaBold mt-[2%] text-customResponsiveJogosFuturos'>Brasileiro| 
        <span className='md:ml-[3%]'>
          20/07 |
                    <span className='md:ml-[3%]'>
            21:00 |
                        <span>Maracana</span>
          </span>
        </span>
      </span>
    },
    
    
  };

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
    <div className='bg-FuturosJogos bg-cover'>
      <div className='font-tuskerGrotesk mt-[2%] text-white md:ml-[10%]'>PROXIMAS PARTIDAS</div>
      <div className='flex justify-center mt-[1%]'>
        {Object.values(nome).map((item, index) => (
         <div
         key={index}
         className={`bg-white rounded-lg mr-[5%] ${
           index < 2 ? 'w-[40%] md:w-[20%]' : 'hidden md:block md:w-[20%]'
         }`}
       >
           <div className='flex'>
             <div className='flex mb-[5%]'>
               <img src={item.img1} alt="" className='md:mt-[4%] md:w-[60%] md:h-[80%]  mt-[10%] w-[40%] h-[70%]' />
               <span className='font-bold mt-[15%]'> X </span>
               <img src={item.img2} alt="" className='md:mt-[4%] md:w-[60%] md:h-[80%]  mt-[10%] w-[40%] h-[70%] ' />
             </div>
             <span>{item.content}</span>
           </div>
         </div>
        ))}
      </div>


      {showMore && (
  <div className={`mt-4     `}>
    <div className='flex  justify-center mt-[1%]'>
      {Object.values(nomeExtendido).map((item, index) => (
        <div
        key={index}
        className={`bg-white rounded-lg mr-[5%] ${
          index < 2 ? 'w-[40%] md:w-[20%]' : 'hidden md:block md:w-[20%]'
        }`}
      >
          <div className='flex'>
            <div className='flex mb-[5%]'>
              <img src={item.img1} alt="" className='md:mt-[4%] md:w-[60%] md:h-[80%]  mt-[10%] w-[40%] h-[70%] ' />
              <span className='font-bold mt-[15%]'> X </span>
              <img src={item.img2} alt="" className='md:mt-[4%] md:w-[60%] md:h-[80%]  mt-[10%] w-[40%] h-[70%]  ' />
            </div>
            <span className=''> {item.content}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
      <div className='flex mr-[5%] justify-end font-Carbona text-center text-white'>
        <button className='flex  text-customResponsiveHeader' onClick={handleToggle}>
          Ver mais 
          
          <span className='mt-[5%] ml-[0%]  text-Verde-Gol'>
            <IoIosArrowDropdownCircle />
            </span>
        </button>
      </div>
    </div>
    <div className='flex mt-[5%] justify-center'>

    <div className='flex justify-between text-customResponsiveConteudo font-tuskerGrotesk md:h-[90%] h-[70%] rounded-lg md:w-[60%] w-[80%] bg-[#D9D9D9]'>
      
     <span className='ml-[5%] mb-[3%] md:text-customResponsiveConteudo text-customResponsiveTitulo mt-[3%]'>
      
      PROPAGANDA PLACEHOLDER</span>
     
     <span className="font-bold relative">

    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 h-[90%] w-[2px] bg-[#3C2290]  "></div>
  </span>
     <span className=' ml-[3%] mt-[3%] mb-[3%] md:text-customResponsiveConteudo text-customResponsiveTitulo'>CONVITE AMIGOS(PLACEHOLDER)</span>
    </div></div>
    </div>
  );
};

export default FuturosJogos;
